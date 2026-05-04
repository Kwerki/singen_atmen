import { ref, computed, watch } from 'vue';
import seedNews from '@/assets/news.json';

const STORAGE_KEY = 'singen-atmen.news.v1';
const MAX_IMAGE_SIZE = 1200;
const JPEG_QUALITY = 0.82;

const ASSET_IMAGES = {
  1: new URL('@/assets/home_logos/singen.jpg', import.meta.url).href,
  2: new URL('@/assets/home_logos/klavier.jpg', import.meta.url).href,
  3: new URL('@/assets/home_logos/sprechen.jpg', import.meta.url).href,
  4: new URL('@/assets/home_logos/atem.jpg', import.meta.url).href,
};

const ASSET_OPTIONS = [
  { label: 'Singen', value: 1 },
  { label: 'Klavier', value: 2 },
  { label: 'Sprechen', value: 3 },
  { label: 'Atem', value: 4 },
];

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function persist(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (err) {
    console.warn('News-Speicher voll oder nicht verfügbar:', err);
  }
}

const news = ref(loadFromStorage() ?? [...seedNews]);

watch(news, (val) => persist(val), { deep: true });

function nextId() {
  return news.value.reduce((max, item) => Math.max(max, item.id ?? 0), 0) + 1;
}

function addNews(payload) {
  const item = {
    id: nextId(),
    title: payload.title.trim(),
    text: payload.text.trim(),
    date: payload.date || new Date().toISOString().split('T')[0],
    imageId: payload.imageId ?? null,
    imageData: payload.imageData ?? null,
  };
  news.value = [item, ...news.value];
  return item;
}

function updateNews(id, payload) {
  news.value = news.value.map((item) =>
    item.id === id ? { ...item, ...payload } : item
  );
}

function deleteNews(id) {
  news.value = news.value.filter((item) => item.id !== id);
}

function resetToSeed() {
  news.value = [...seedNews];
}

function getImageSrc(item) {
  if (item?.imageData) return item.imageData;
  if (item?.imageId && ASSET_IMAGES[item.imageId]) return ASSET_IMAGES[item.imageId];
  return ASSET_IMAGES[1];
}

function exportJson() {
  const cleaned = news.value.map(({ id, title, text, date, imageId, imageData }) => ({
    id,
    title,
    text,
    date,
    ...(imageId ? { imageId } : {}),
    ...(imageData ? { imageData } : {}),
  }));
  const blob = new Blob([JSON.stringify(cleaned, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'news.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

async function importJson(file) {
  const text = await file.text();
  const parsed = JSON.parse(text);
  if (!Array.isArray(parsed)) throw new Error('Ungültiges JSON-Format');
  news.value = parsed;
}

function readFileAsImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function processImageFile(file) {
  if (!file.type.startsWith('image/')) {
    throw new Error('Bitte eine Bilddatei auswählen.');
  }
  const img = await readFileAsImage(file);
  const ratio = Math.min(1, MAX_IMAGE_SIZE / Math.max(img.width, img.height));
  const w = Math.round(img.width * ratio);
  const h = Math.round(img.height * ratio);
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, w, h);
  return canvas.toDataURL('image/jpeg', JPEG_QUALITY);
}

export function useNews() {
  return {
    news: computed(() => news.value),
    addNews,
    updateNews,
    deleteNews,
    resetToSeed,
    getImageSrc,
    exportJson,
    importJson,
    processImageFile,
    assetOptions: ASSET_OPTIONS,
  };
}
