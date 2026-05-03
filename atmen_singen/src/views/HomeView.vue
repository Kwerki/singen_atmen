<template>
  <div class="main-container">

    <!-- Hero Section -->
    <div class="hero-section">
      <h1 class="h1-style text-center">
        Zwei Wege.<br class="hero-break"> Eine Leidenschaft.
      </h1>
      <p class="hero-subtitle text-center body-text">
        Entdecken Sie Angebote für Musik &amp; Kunst oder Sprache &amp; Therapie — 
        und finden Sie Ihren persönlichen Zugang zur Welt der Stimme.
      </p>
    </div>

    <!-- Two Main Sections -->
    <v-row class="section-row" align="stretch">

      <!-- Musik & Kunst -->
      <v-col cols="12" md="6">
        <div class="section-card musik-card" @click="navigateTo('/singen')">
          <!-- Card image header -->
          <div class="card-image-wrapper">
            <v-img :src="musikImage" height="300" cover class="card-image"></v-img>
            <div class="card-image-overlay"></div>
          </div>

          <!-- Top decorative corner -->
          <svg class="corner-deco corner-tl" width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle cx="0" cy="0" r="50" fill="#e8c97a" opacity="0.18"/>
          </svg>

          <div class="section-header musik-header">
            <div class="icon-circle musik-icon-circle">
              <v-icon size="28" class="section-icon">mdi-music-clef-treble</v-icon>
            </div>
            <div>
              <h2 class="h2-style section-title">Musik &amp; Kunst</h2>
              <p class="section-tagline">Singen · Klavier · Atem</p>
            </div>
          </div>

          <div class="service-list">
            <div class="service-item" @click.stop="navigateTo('/singen')">
              <div class="service-icon-wrap musik-icon-wrap">
                <v-icon size="20" color="#c97b2a">mdi-microphone</v-icon>
              </div>
              <div class="service-text">
                <span class="service-name h3-style">Singen</span>
                <span class="service-desc body-text">Gesangskunst — Technik &amp; Ausdruck</span>
              </div>
              <v-icon size="18" color="#c97b2a" class="service-arrow">mdi-arrow-right</v-icon>
            </div>

            <div class="service-item" @click.stop="navigateTo('/klavier')">
              <div class="service-icon-wrap musik-icon-wrap">
                <v-icon size="20" color="#c97b2a">mdi-piano</v-icon>
              </div>
              <div class="service-text">
                <span class="service-name h3-style">Klavier</span>
                <span class="service-desc body-text">Klavierunterricht — Noten &amp; Emotion</span>
              </div>
              <v-icon size="18" color="#c97b2a" class="service-arrow">mdi-arrow-right</v-icon>
            </div>

            <div class="service-item" @click.stop="navigateTo('/atmen')">
              <div class="service-icon-wrap musik-icon-wrap">
                <v-icon size="20" color="#c97b2a">mdi-lungs</v-icon>
              </div>
              <div class="service-text">
                <span class="service-name h3-style">Atmen</span>
                <span class="service-desc body-text">Atemtechnik — Bewusstheit &amp; Kraft</span>
              </div>
              <v-icon size="18" color="#c97b2a" class="service-arrow">mdi-arrow-right</v-icon>
            </div>
          </div>

          <div class="section-footer">
            <v-btn
              :ripple="false"
              variant="plain"
              class="section-btn musik-btn"
              @click.stop="navigateTo('/singen')"
            >
              <span class="btn-underline">Zu Musik &amp; Kunst</span>
              <v-icon size="18" class="ml-1">mdi-arrow-right</v-icon>
            </v-btn>
          </div>
        </div>
      </v-col>

      <!-- Sprache & Therapie -->
      <v-col cols="12" md="6">
        <div class="section-card sprache-card" @click="navigateTo('/sprechen')">
          <!-- Card image header -->
          <div class="card-image-wrapper">
            <v-img :src="spracheImage" height="300" cover class="card-image"></v-img>
            <div class="card-image-overlay"></div>
          </div>

          <!-- Top decorative corner -->
          <svg class="corner-deco corner-tr" width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle cx="60" cy="0" r="50" fill="#c4b5db" opacity="0.18"/>
          </svg>

          <div class="section-header sprache-header">
            <div class="icon-circle sprache-icon-circle">
              <v-icon size="28" class="section-icon">mdi-account-voice</v-icon>
            </div>
            <div>
              <h2 class="h2-style section-title">Sprache &amp; Therapie</h2>
              <p class="section-tagline">Sprechen · Logopädie</p>
            </div>
          </div>

          <div class="service-list">
            <div class="service-item" @click.stop="navigateTo('/sprechen')">
              <div class="service-icon-wrap sprache-icon-wrap">
                <v-icon size="20" color="#7b5ea7">mdi-drama-masks</v-icon>
              </div>
              <div class="service-text">
                <span class="service-name h3-style">Sprechen</span>
                <span class="service-desc body-text">Logopädie — Stimme &amp; Ausdruck</span>
              </div>
              <v-icon size="18" color="#7b5ea7" class="service-arrow">mdi-arrow-right</v-icon>
            </div>
          </div>

          <div class="section-footer">
            <v-btn
              :ripple="false"
              variant="plain"
              class="section-btn sprache-btn"
              @click.stop="navigateTo('/sprechen')"
            >
              <span class="btn-underline">Zu Sprache &amp; Therapie</span>
              <v-icon size="18" class="ml-1">mdi-arrow-right</v-icon>
            </v-btn>
          </div>
        </div>
      </v-col>

    </v-row>

    <!-- News Feed -->
    <div class="news-feed-section">
      <h2 class="h2-style news-section-title">Aktuelles</h2>
      <v-row v-if="news.length">
        <v-col cols="12" v-for="item in news" :key="item.id">
          <v-card class="news-card-full" elevation="2" @click="navigateTo('/news')">
            <v-row no-gutters align="center">
              <v-col cols="12" md="4">
                <img :src="getNewsImage(item.imageId)" loading="lazy" height="200" cover class="news-image" style="object-fit: cover; width: 100%;">
              </v-col>
              <v-col cols="12" md="8">
                <v-card-text class="news-card-content">
                  <div class="news-date">{{ formatDate(item.date) }}</div>
                  <h3 class="h3-style mb-2">{{ item.title }}</h3>
                  <p class="body-text">{{ item.text }}</p>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

import newsData from '@/assets/news.json';

const router = useRouter();

router.options.scrollBehavior = (to, from, savedPosition) => {
  return { top: 0 };
};

const news = newsData;

const musikImage = new URL('@/assets/home_logos/singen.jpg', import.meta.url).href;
const spracheImage = new URL('@/assets/landing/sprache.jpg', import.meta.url).href;

const navigateTo = (route) => {
  router.push(route);
};

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' });
};

// Static image paths
const musikImage = new URL('@/assets/home_logos/singen.jpg', import.meta.url).href;
const spracheImage = new URL('@/assets/landing/sprache.jpg', import.meta.url).href;

// Proper per-news-item image mapping
const newsImageMap = {
  1: new URL('@/assets/home_logos/singen.jpg', import.meta.url).href,
  2: new URL('@/assets/home_logos/klavier.jpg', import.meta.url).href,
  3: new URL('@/assets/home_logos/sprechen.jpg', import.meta.url).href,
};

const navigateTo = (route) => {
  router.push(route);
};

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' });
};

// Use imageId from news item to show correct image
const getNewsImage = (imageId) => {
  return newsImageMap[imageId] || newsImageMap[1];
};

</script>

<style scoped>
/* Hero */
.hero-section {
  padding: 3.5rem 1rem 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 0%, rgba(232,201,122,0.12) 0%, transparent 65%);
  pointer-events: none;
}

.hero-wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  color: #fdf3e3;
  pointer-events: none;
  z-index: 0;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, #fdf3e3, #fff8ee);
  border: 1.5px solid #e8c97a;
  border-radius: 100px;
  padding: 6px 16px;
  font-family: 'Kolage Light', sans-serif;
  font-size: 0.8rem;
  color: #c97b2a;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
}

.h1-style {
  font-family: 'Inter';
  font-size: 2.8rem;
  font-weight: 800;
  margin: 0 0 1rem;
  line-height: 1.15;
  background: linear-gradient(135deg, #2d3748 0%, #4a5568 50%, #c97b2a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 1;
  animation: fadeUp 0.6s ease-out both;
}

.hero-break { display: none; }

.hero-subtitle {
  max-width: 640px;
  margin: 0 auto;
  font-size: 1.15rem;
  color: #6b7a90;
  position: relative;
  z-index: 1;
  animation: fadeUp 0.6s 0.1s ease-out both;
}

/* Hero decorative notes */
.hero-deco {
  position: absolute;
  top: 2rem;
  right: 8%;
  pointer-events: none;
  z-index: 0;
}

.note {
  display: block;
  animation: floatNote 4s ease-in-out infinite;
}

.note-1 { animation-delay: 0s; }
.note-2 { animation-delay: 1.2s; margin-left: 20px; margin-top: -8px; }
.note-3 { animation-delay: 0.6s; margin-left: -10px; margin-top: 4px; opacity: 0.7; }

/* Section Cards */
.section-row {
  margin-bottom: 3rem;
}

.section-card {
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  padding: 0 2rem 2rem;
  min-height: 680px; height: 100%;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  animation: fadeUp 0.6s 0.2s ease-out both;
  display: flex;
  flex-direction: column;
}

.musik-card {
  background: #fffdf7;
  border: 2px solid rgba(232, 201, 122, 0.5);
  box-shadow: 0 4px 24px rgba(201, 123, 42, 0.08), 0 1px 4px rgba(0,0,0,0.04);
}

/* Card image header */
.card-image-wrapper {
  position: relative;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
  margin: -2rem -2rem 1.5rem -2rem;
}

.card-image {
  transition: transform 0.4s ease;
}

.section-card:hover .card-image {
  transform: scale(1.05);
}

.card-image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.15));
}

.sprache-card {
  background: #faf8ff;
  border: 2px solid rgba(196, 181, 219, 0.5);
  box-shadow: 0 4px 24px rgba(123, 94, 167, 0.08), 0 1px 4px rgba(0,0,0,0.04);
  animation-delay: 0.3s;
}

.section-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.12);
}

.musik-card:hover {
  border-color: rgba(201, 123, 42, 0.4);
}

.sprache-card:hover {
  border-color: rgba(123, 94, 167, 0.4);
}

/* Corner decorations */
.corner-deco {
  position: absolute;
  pointer-events: none;
}

.corner-tl {
  top: -20px;
  left: -20px;
}

.corner-tr {
  top: -20px;
  right: -20px;
}

/* Section Header */
.section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.icon-circle {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.musik-icon-circle {
  background: linear-gradient(135deg, #fdf3e3, #fff3d6);
  border: 1.5px solid rgba(232, 201, 122, 0.5);
}

.sprache-icon-circle {
  background: linear-gradient(135deg, #f3f0f7, #ede8f8);
  border: 1.5px solid rgba(196, 181, 219, 0.5);
}

.musik-header .section-icon {
  color: #c97b2a;
}

.sprache-header .section-icon {
  color: #7b5ea7;
}

.section-title {
  margin: 0 0 2px;
  color: #2d3748;
  font-size: 1.4rem;
}

.section-tagline {
  font-family: 'Kolage Light', sans-serif;
  font-size: 0.78rem;
  color: #8a9ab5;
  margin: 0;
  letter-spacing: 0.04em;
}

/* Service List */
.service-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 1.75rem;
}

.service-item {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 0.875rem 1rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0,0,0,0.04);
  transition: all 0.25s ease;
  cursor: pointer;
}

.musik-card .service-item:hover {
  background: rgba(253, 243, 227, 0.9);
  border-color: rgba(232, 201, 122, 0.3);
  box-shadow: 0 4px 16px rgba(201, 123, 42, 0.08);
}

.sprache-card .service-item:hover {
  background: rgba(243, 240, 247, 0.9);
  border-color: rgba(196, 181, 219, 0.3);
  box-shadow: 0 4px 16px rgba(123, 94, 167, 0.08);
}

.service-icon-wrap {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.service-item:hover .service-icon-wrap {
  transform: scale(1.1);
}

.musik-icon-wrap {
  background: linear-gradient(135deg, #fdf3e3, #fff8ee);
}

.sprache-icon-wrap {
  background: linear-gradient(135deg, #f3f0f7, #faf8ff);
}

.service-text {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.service-name {
  font-family: 'Inter';
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
  line-height: 1.3;
  transition: color 0.2s ease;
}

.musik-card .service-item:hover .service-name { color: #c97b2a; }
.sprache-card .service-item:hover .service-name { color: #7b5ea7; }

.service-desc {
  font-size: 0.875rem;
  color: #7a8ba0;
  margin: 0;
  line-height: 1.4;
}

.service-arrow {
  flex-shrink: 0;
  opacity: 0;
  transform: translateX(-6px);
  transition: all 0.25s ease;
}

.musik-card .service-item:hover .service-arrow {
  opacity: 1;
  transform: translateX(0);
}

.sprache-card .service-item:hover .service-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* Section Footer / CTA */
.section-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
}

.section-btn {
  font-size: 0.95rem !important;
}

.musik-btn {
  color: #c97b2a !important;
}

.sprache-btn {
  color: #7b5ea7 !important;
}

/* About Preview */
.about-preview {
  display: none;
}

/* Animations */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes floatNote {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(5deg); }
}

@keyframes floatBubble {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

/* Mobile */
@media (max-width: 959px) {
  .hero-section {
    padding: 2rem 0.5rem 2rem;
  }

  .h1-style {
    font-size: 2.2rem;
  }

  .hero-break { display: block; }

  .hero-deco {
    display: none;
  }

  .section-card {
    margin-bottom: 0.5rem;
    padding: 1.5rem 1.25rem 1.5rem;
  }

  .about-image {
    border-radius: 20px 20px 0 0;
  }

  .about-content {
    padding: 1.5rem 1.5rem 1.75rem;
  }

  .about-text {
    font-size: 1rem;
  }
}

@media (max-width: 599px) {
  .h1-style {
    font-size: 1.9rem;
  }

  .icon-circle {
    width: 48px;
    height: 48px;
  }

  .service-item {
    padding: 0.75rem 0.875rem;
  }
}

/* News Feed Section */
.news-feed-section {
  margin-top: 3rem;
  animation: fadeUp 0.6s 0.4s ease-out both;
}

.news-section-title {
  margin-bottom: 1.5rem;
  text-align: center;
}

.news-card-home {
  border-radius: 16px;
  height: 100%;
  transition: all 0.3s ease;
  cursor: pointer;
  display: none;
}

.news-card-full {
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-bottom: 1rem;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.news-card-full:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.news-card-full:active {
  transform: scale(0.98) translateY(0);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.news-image {
  border-radius: 0;
  display: block;
  width: 100%;
}

@media (max-width: 959px) {
  .news-card-full {
    border-radius: 16px;
  }

  .news-image {
    border-radius: 16px 16px 0 0;
    height: 200px;
  }
}

.news-card-content {
  padding: 1.5rem;
}

.news-date {
  font-size: 0.85rem;
  color: #9a8c7a;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.news-preview {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>