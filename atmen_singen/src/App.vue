<template>
  <v-app>
    <header class="header">
      <router-link to="/home">
        <img :src="headerImage">
      </router-link>
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
      return new URL('@/assets/logos/header_atmen.svg', import.meta.url).href;
    case '/klavier':
      return new URL('@/assets/logos/header_klavier.svg', import.meta.url).href;
    case '/singen':
      return new URL('@/assets/logos/header_singen.svg', import.meta.url).href;
    case '/sprechen':
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
  width: 25%;
}
</style>
