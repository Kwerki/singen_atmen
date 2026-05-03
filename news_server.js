const http = require('http');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const REPO_PATH = '/data/.openclaw/workspace/singen_atmen/atmen_singen';
const NEWS_FILE = path.join(REPO_PATH, 'src/assets/news.json');
const PORT = 3456;

const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }
  
  if (req.method === 'POST' && req.url === '/news') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const { title, text, imageId } = JSON.parse(body);
        if (!title || !text) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Title and text required' }));
          return;
        }
        
        // Read current news
        let news = [];
        if (fs.existsSync(NEWS_FILE)) {
          news = JSON.parse(fs.readFileSync(NEWS_FILE, 'utf8'));
        }
        
        // Add new entry
        const newEntry = {
          id: Date.now(),
          title,
          text,
          imageId: imageId || 1,
          date: new Date().toISOString().split('T')[0]
        };
        news.unshift(newEntry);
        
        // Write updated news
        fs.writeFileSync(NEWS_FILE, JSON.stringify(news, null, 2));
        
        // Git add, commit, push
        process.chdir(REPO_PATH);
        execSync('git add src/assets/news.json', { stdio: 'pipe' });
        execSync(`git commit -m "Add news: ${title}"`, { stdio: 'pipe' });
        execSync('git push origin dev', { 
          stdio: 'pipe',
          env: { ...process.env, GIT_ASKPASS: 'echo' }
        });
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, entry: newEntry }));
      } catch (err) {
        console.error('Error:', err.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`News server running on port ${PORT}`);
});
