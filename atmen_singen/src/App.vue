<template>
  <v-app class="app-container">
    <header class="header d-none d-md-block">
      <router-link to="/home">
        <img :src="headerImage">
      </router-link>
    </header>

    <NavBar />

    <v-main class="main-container">
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
    case '/singen_atmen/atmen':
      return new URL('@/assets/logos/header_atmen.svg', import.meta.url).href;
    case '/singen_atmen/klavier':
      return new URL('@/assets/logos/header_klavier.svg', import.meta.url).href;
    case '/singen_atmen/singen':
      return new URL('@/assets/logos/header_singen.svg', import.meta.url).href;
    case '/singen_atmen/sprechen':
      return new URL('@/assets/logos/header_sprechen.svg', import.meta.url).href;
    default:
      return new URL('@/assets/logos/header_home.svg', import.meta.url).href;
  }
});

</script>



<style scoped>
.header {
  display: block;
  margin: auto;
  width: 15%;
}


.main-container {
  max-width: 1200px;
  margin: auto;
  width: 80%;
}

@media (max-width: 959px) {
  .main-container {
    width: 95%;
  }
}


.app-container {
  background: linear-gradient(to bottom, #ffffff, #f0f4f8);
}
</style>
