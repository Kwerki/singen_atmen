<template>
  <v-app>
    <header class="header">
      <img :src="headerImage">
    </header>

    <NavBar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute();

const headerImage = computed(() => {
  switch (route.path) {
    case '/atmen':
      return new URL('@/assets/header_atmen.svg', import.meta.url).href;
    case '/klavier':
      return new URL('@/assets/header_klavier.svg', import.meta.url).href;
    case '/singen':
      return new URL('@/assets/header_singen.svg', import.meta.url).href;
    case '/sprechen':
      return new URL('@/assets/header_sprechen.svg', import.meta.url).href;
    default:
      return new URL('@/assets/home_header.svg', import.meta.url).href;
  }
});
</script>



<style scoped>
.header {
  display: block;
  margin: auto;
  width: 20%;
}
</style>
