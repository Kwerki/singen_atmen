<template>
  <div class="main-container">
    <div class="page-hero fade-in">
      <p class="eyebrow">Aktuelles</p>
      <h1 class="h1-style text-center">News</h1>
    </div>

    <v-container v-if="news.length">
      <v-row>
        <v-col v-for="item in news" :key="item.id" cols="12">
          <v-card class="news-card-full" elevation="2">
            <v-row no-gutters align="stretch">
              <v-col cols="12" md="4">
                <img
                  :src="getImageSrc(item)"
                  loading="lazy"
                  alt=""
                  class="news-image"
                />
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
    </v-container>

    <v-container v-else>
      <p class="body-text text-center">Noch keine News vorhanden.</p>
    </v-container>
  </div>
</template>

<script setup>
import { useNews } from '@/composables/useNews';

const { news, getImageSrc } = useNews();

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' });
};
</script>

<style scoped>
.page-hero {
  margin: 1.5rem 0 3rem;
}

.news-card-full {
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  margin-bottom: 1rem;
}

.news-card-full:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08) !important;
}

.news-image {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 220px;
  object-fit: cover;
  object-position: center;
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

@media (max-width: 959px) {
  .news-image {
    height: 220px;
    min-height: 220px;
  }
}
</style>
