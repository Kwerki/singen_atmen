<template>
  <div class="main-container">
    <v-row>
      <v-col v-for="(card, index) in cards" :key="index" cols="12" md="6">
        <v-hover v-slot="{ isHovering, props }">
          <div @click="navigateTo(card.route)" :style="{ cursor: 'pointer' }">
            <v-card v-bind="props" :elevation="isHovering ? 6 : 2"
              :class="{ 'zoom-effect': isHovering, 'custom-card': true }">
              <div class="image-wrapper">
                <v-img :src="card.image" height="300px" cover class="zoom-image"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"></v-img>
                <v-card-title class="text-white h image-title h2-style">
                  {{ card.title }}
                </v-card-title>
              </div>

              <v-card-text>
                <div class="font-inter-regular">{{ card.subtitle }}</div>
              </v-card-text>

              <v-card-text>
                <v-btn :ripple="false" variant="plain" :to="card.route" @click.stop>
                  <div class="btn-underline">Mehr Erfahren</div>
                </v-btn>
              </v-card-text>
            </v-card>
          </div>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Scrollt bei Navigation immer nach oben
router.options.scrollBehavior = (to, from, savedPosition) => {
  return { top: 0 };
};

const cards = ref([
  {
    title: 'Atemtechnik',
    subtitle: 'Entdecken Sie die Kraft des bewussten Atems',
    image: new URL('@/assets/home_logos/atem.jpg', import.meta.url).href,
    route: '/atmen',
  },
  {
    title: 'Sprechcoaching',
    subtitle: 'Ihre Stimme als einzigartiges Ausdrucksmittel',
    image: new URL('@/assets/home_logos/sprechen.jpg', import.meta.url).href,
    route: '/sprechen',
  },
  {
    title: 'Klavierunterricht',
    subtitle: 'Meisterschaft zwischen Noten und Emotionen',
    image: new URL('@/assets/home_logos/klavier.jpg', import.meta.url).href,
    route: '/klavier',
  },
  {
    title: 'Gesangskunst',
    subtitle: 'Wo Technik auf Herzschlag trifft',
    image: new URL('@/assets/home_logos/singen.jpg', import.meta.url).href,
    route: '/singen',
  },
  {
    title: 'Über Mich',
    subtitle: 'Ich bin Antje – Logopädin, Musikerin, Sängerin und Mutter',
    image: new URL('@/assets/home_logos/übermich.jpg', import.meta.url).href,
    route: '/aboutme',
  },
  {
    title: 'Youtube',
    subtitle: 'Beispiele einiger Stücke auf Youtube',
    image: new URL('@/assets/home_logos/youtube.jpg', import.meta.url).href,
    route: '/youtube',
  },
]);

const navigateTo = (route) => {
  router.push(route);
};
</script>

<style scoped>
.main-container {
  max-width: 1200px;
}

.custom-card {
  transition: all 0.3s ease;
  cursor: pointer;
  background-color: #f2d394;
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
  pointer-events: none;
  /* Verhindert, dass der Titel Klicks abfängt */
}

.zoom-effect {
  transform: translateY(-5px);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
