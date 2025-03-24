<template>
    <div class="home-container">
      <h1 class="title">Entdecken Sie die AtemWelt</h1>
  
      <div class="grid-container">
        <!-- Atemtechnik Card -->
        <div class="grid-item">
          <div class="image-wrapper">
            <img src="../assets/atemtechnik.jpg" alt="Atemtechnik Visual" class="hover-scale">
          </div>
          <h3 class="item-title slide-up">Atemtechnik</h3>
          <p class="item-text">Entdecken Sie die Kraft des bewussten Atems</p>
          <router-link to="/atemtechnik" class="cta-link">Mehr erfahren →</router-link>
        </div>
  
        <!-- Vokalexpression Card -->
        <div class="grid-item">
          <div class="image-wrapper">
            <img src="../assets/vokal.jpg" alt="Vokalexpression Visual" class="hover-scale">
          </div>
          <h3 class="item-title slide-up">Vokalexpression</h3>
          <p class="item-text">Ihre Stimme als einzigartiges Ausdrucksmittel</p>
          <router-link to="/vokalexpression" class="cta-link">Stimmreise beginnen →</router-link>
        </div>
  
        <!-- Instrumentalpraxis Card -->
        <div class="grid-item">
          <div class="image-wrapper">
            <img src="../assets/klavier.jpg" alt="Klavierpraxis Visual" class="hover-scale">
          </div>
          <h3 class="item-title slide-up">Instrumentalpraxis</h3>
          <p class="item-text">Meisterschaft zwischen Noten und Emotionen</p>
          <router-link to="/instrumentalpraxis" class="cta-link">Zur Virtuosität →</router-link>
        </div>
  
        <!-- Gesangskunst Card -->
        <div class="grid-item">
          <div class="image-wrapper">
            <img src="../assets/gesang.jpg" alt="Gesangskunst Visual" class="hover-scale">
          </div>
          <h3 class="item-title slide-up">Gesangskunst</h3>
          <p class="item-text">Wo Technik auf Herzschlag trifft</p>
          <router-link to="/gesang" class="cta-link">Stimmzauber entdecken →</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .grid-container {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    padding: 2rem 0;
  }
  
  .grid-item {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    transition: transform 0.3s ease;
  }
  
  .grid-item:hover {
    transform: translateY(-5px);
  }
  
  .image-wrapper {
    height: 200px;
    overflow: hidden;
    border-radius: 8px;
  }
  
  .hover-scale {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
  
  .hover-scale:hover {
    transform: scale(1.05);
  }
  
  .item-title {
    margin: 1rem 0 0.5rem;
    font-size: 1.4rem;
    color: #2c3e50;
    opacity: 0;
    animation: slideUp 0.6s ease forwards;
    animation-delay: 0.2s;
  }
  
  .item-text {
    font-size: 0.95rem;
    color: #666;
    margin-bottom: 1rem;
    line-height: 1.4;
  }
  
  .cta-link {
    display: inline-block;
    color: #3498db;
    text-decoration: none;
    font-weight: 500;
    opacity: 0;
    animation: fadeIn 0.6s ease forwards;
    animation-delay: 0.4s;
  }
  
  .cta-link:hover {
    text-decoration: underline;
    color: #2980b9;
  }
  
  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @media (max-width: 768px) {
    .grid-container {
      grid-template-columns: 1fr;
      max-width: 400px;
      margin: 0 auto;
    }
  }
  </style>