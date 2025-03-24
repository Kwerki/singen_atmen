<template>
  <div class="home-container">


    <v-row>
      <v-col v-for="(card, index) in cards" :key="index" cols="12" md="6">
        <v-hover v-slot="{ isHovering, props }">
          <v-card v-bind="props" :elevation="isHovering ? 12 : 2" :class="{ 'zoom-effect': isHovering }"
            class="custom-card">

            <div class="image-wrapper">
              <v-img :src="card.image" height="300px" cover class="zoom-image"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
              </v-img>
              <v-card-title class="text-white image-title">{{ card.title }}</v-card-title>
            </div>

            <v-card-text>
              <div class="text-subtitle-1">{{ card.subtitle }}</div>
            </v-card-text>

            

            <v-card-actions>
              <v-btn :ripple="false" variant="plain" :to="card.route">
                <div class="btn-underline">Mehr Erfahren</div>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const cards = ref([
  {
    title: 'Vokalexpression',
    subtitle: 'Ihre Stimme als einzigartiges Ausdrucksmittel',
    image: new URL('@/assets/home_logos/sprechen.jpg', import.meta.url).href,
    route: '/sprechen',
    isRevealed: false
  },
  {
    title: 'Atemtechnik',
    subtitle: 'Entdecken Sie die Kraft des bewussten Atems',
    image: new URL('@/assets/home_logos/atem.jpg', import.meta.url).href,
    route: '/atmen',
    isRevealed: false
  },
  {
    title: 'Klavierunterricht',
    subtitle: 'Meisterschaft zwischen Noten und Emotionen',
    image: new URL('@/assets/home_logos/klavier.jpg', import.meta.url).href,
    route: '/klavier',
    isRevealed: false
  },
  {
    title: 'Gesangskunst',
    subtitle: 'Wo Technik auf Herzschlag trifft',
    image: new URL('@/assets/home_logos/singen.jpg', import.meta.url).href,
    route: '/singen',
    isRevealed: false
  }
]);
</script>

<style scoped>

.custom-card {
  transition: all 0.3s ease;
  cursor: pointer;
  background-color: #e6cefd;
  overflow: hidden;
}

.image-wrapper {
  height: 300px;
  overflow: hidden;
  position: relative;
}

.zoom-image {
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform-origin: center center;
}

.v-card:hover .zoom-image {
  transform: scale(1.1);
}

.image-title {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  transform: translateZ(0);
  transition: none !important;
  pointer-events: none;
}


</style>