<template>
  <v-app>
    <header class="header">
      <img src=" @/assets/home_header.svg">
    </header>

    <NavBar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue';

</script>



<style scoped>
.header {
  display: block;
  margin: auto;
  width: 20%;
}
</style>
