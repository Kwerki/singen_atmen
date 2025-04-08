<template>
    <v-card class="tutor-card" elevation="2">
      <v-card-text>
        <div class="d-flex align-center mb-4">
          <h2 class="h2-style mr-2">{{ currentPageTitle }}</h2>
        </div>
  
        <v-list density="compact" class="mb-4">
          <template v-for="(price, index) in currentPricing" :key="index">
            <v-list-item>
              <template v-slot:prepend>
                <v-icon :icon="price.icon" :color="price.iconColor || 'primary'" class="mr-2" ></v-icon>
              </template>
              <v-list-item-title>{{ price.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ price.subtitle }}</v-list-item-subtitle>
            </v-list-item>
          </template>
  
          <v-list-item v-if="showInsuranceHint">
            <template v-slot:prepend>
              <v-icon icon="mdi-hospital-box" class="mr-2" color="green"></v-icon>
            </template>
            <v-list-item-title>Kostenübernahme<br>Krankenkasse</v-list-item-title>
  
          </v-list-item>
  
          <v-list-item>
            <template v-slot:prepend>
              <v-icon icon="mdi-clock-outline" class="mr-2" color="blue"></v-icon>
            </template>
            <v-list-item-title>12h</v-list-item-title>
            <v-list-item-subtitle>Antwortzeit</v-list-item-subtitle>
          </v-list-item>
  
          <v-list-item>
            <template v-slot:prepend>
              <v-icon icon="mdi-account-group" class="mr-2" color="purple"></v-icon>
            </template>
            <v-list-item-title>50+</v-list-item-title>
            <v-list-item-subtitle>Schüler:innen</v-list-item-subtitle>
          </v-list-item>
  
          <v-list-item>
            <template v-slot:prepend>
              <v-icon icon="mdi-package" class="mr-2" color="orange"></v-icon>
            </template>
            <v-list-item-title>10er Karte 500€</v-list-item-title>
            <v-list-item-subtitle>Pakete</v-list-item-subtitle>
          </v-list-item>
        </v-list>
  
        <div class="action-section">
          <v-btn :ripple="false" variant="outlined" plain block class="mb-2 request-btn" @click="handleRequest">
            <div class="btn-underline">Unterricht anfragen</div>
          </v-btn>
        </div>

      </v-card-text>
    </v-card>
  </template>
  
  <script setup>
  import { useRoute, useRouter } from 'vue-router'
  import { computed } from 'vue'
  
  const route = useRoute()
  const router = useRouter();

  
  const pricingStructure = {
    '/klavier': [
      { icon: 'mdi-cash', title: '40€/Stunde', subtitle: 'Einzelstunde', iconColor: 'green' }
    ],
    '/singen': [
      { icon: 'mdi-cash', title: '40€/Stunde', subtitle: 'Einzelstunde', iconColor: 'green' }
    ],
    '/sprechen': [
      { icon: 'mdi-cash', title: 'ab 40€', subtitle: 'Individuelles Angebot', iconColor: 'green' }
    ],
    '/atmen': [
      { icon: 'mdi-cash', title: '60€/Sitzung', subtitle: 'Einzelbuchung', iconColor: 'green' }
    ]
  }
  
  const pageTitles = {
    '/atmen': 'Atemtechnik',
    '/klavier': 'Klavierunterricht',
    '/singen': 'Gesangskunst',
    '/sprechen': 'Sprechen'
  }
  
  // Computed Properties
  const currentPageTitle = computed(() => pageTitles[route.path] || 'Seite')
  const currentPricing = computed(() => pricingStructure[route.path] || [])
  const showInsuranceHint = computed(() => ['/atmen', '/sprechen'].includes(route.path))
  
  const handleRequest = () => {
    router.push('/termin')
  }
  </script>
  
  <style scoped>
  .tutor-card {
    max-width: 300px;
    border-radius: 12px !important;
  }
  
  @media (max-width: 1024px) {
    .tutor-card {
      max-width: 100%; /* Volle Breite bei kleinen Bildschirmen */
    }
  }
  
  .rating {
    color: #FFC107;
    font-size: 1.2rem;
  }
  
  .request-btn {
    border-color: #F2D394 !important;
  }
  
  .h2-style {
    font-family: 'Inter';
    font-size: 1.5rem;
    font-weight: 600;
  }
  
  .v-list-item {
    padding-left: 0 !important;
  }
  
  .v-list-item__title {
    font-weight: 500 !important;
  }
  
  .v-list-item__subtitle {
    opacity: 0.8;
    font-size: 0.85rem;
  }
  </style>
  