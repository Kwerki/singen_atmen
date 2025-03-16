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
      return new URL('@/assets/header_atmen.png', import.meta.url).href;
    case '/klavier':
      return new URL('@/assets/header_klavier.png', import.meta.url).href;
    case '/singen':
      return new URL('@/assets/header_singen.png', import.meta.url).href;
    case '/sprechen':
      return new URL('@/assets/header_sprechen.png', import.meta.url).href;
    default:
      return new URL('@/assets/header_home.png', import.meta.url).href;
  }
});

</script>



<style scoped>
.header {
  width: 100%;
  height: auto;
  position: relative;
}

.header img {
  width: 500px;
  height: auto;
  display: block;
  margin: auto;
}
</style>
