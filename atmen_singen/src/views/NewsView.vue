<template>
  <div class="main-container">
    <h1 class="h1-style text-center mb-8">News</h1>
    <v-divider class="my-8">
      <v-icon color="secondary">mdi-newspaper-variant</v-icon>
    </v-divider>
    
    <v-container v-if="news.length">
      <v-row>
        <v-col v-for="item in news" :key="item.id" cols="12" md="6" lg="4">
          <v-card class="news-card" elevation="2">
            <v-card-text>
              <div class="news-date">{{ formatDate(item.date) }}</div>
              <h3 class="h3-style mb-3">{{ item.title }}</h3>
              <p class="body-text">{{ item.text }}</p>
            </v-card-text>
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
import { ref, onMounted } from 'vue';
import newsData from '@/assets/news.json';

const news = ref(newsData);

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' });
};
</script>

<style scoped>
.news-card {
  border-radius: 16px;
  height: 100%;
}

.news-date {
  font-size: 0.85rem;
  color: #9a8c7a;
  margin-bottom: 0.5rem;
  font-weight: 500;
}
</style>
