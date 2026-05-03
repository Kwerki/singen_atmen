<template>
  <v-app class="app-container">
    <header class="header d-none d-md-block">
      <router-link to="/home">
        <SvgLogo name="home" class="header-logo" />
      </router-link>
    </header>

    <NavBar />

    <v-main class="main-container">
      <router-view />
    </v-main>
    <Footer />
    <ScrollToTop />
  </v-app>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import SvgLogo from '@/components/SvgLogo.vue';
import ScrollToTop from '@/components/ScrollToTop.vue';
</script>

<style scoped>
.header {
  display: block;
  margin: auto;
  width: 15%;
}

.header-logo {
  width: 100%;
  height: auto;
}

.main-container {
  max-width: 1500px;
  margin: auto;
  width: 80%;
}

@media (max-width: 959px) {
  .main-container {
    width: 100%;
    padding: 5px;
  }
}

.app-container {
  background: linear-gradient(to bottom, #ffffff, #f0f4f8);
}
</style>