<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header class="header">
    <img src=" @/assets/primär_mS-24.svg" alt="HeaderLogo">
  </header>


  <RouterView />
</template>

<style scoped>
.header {
  display: block;
  margin: auto;
  width: 20%;
}
</style>
