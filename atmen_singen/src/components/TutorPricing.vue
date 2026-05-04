<template>
    <v-card class="tutor-card" elevation="0">
      <v-card-text>
        <div class="d-flex align-center mb-4">
          <h2 class="h2-style mr-2">{{ currentPageTitle }}</h2>
        </div>

        <v-list density="compact" class="mb-4">
          <template v-for="(price, index) in currentPricing" :key="index">
            <v-list-item>
              <template v-slot:prepend>
                <v-icon :icon="price.icon" :color="ACCENT" class="mr-2"></v-icon>
              </template>
              <v-list-item-title>{{ price.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ price.subtitle }}</v-list-item-subtitle>
            </v-list-item>
          </template>
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

  const ACCENT = '#c97b2a';

  const pricingStructure = {
    '/klavier': [
      { icon: 'mdi-calendar-month', title: '99 €/Monat', subtitle: 'Jahresabo · 45 min wöchentlich' },
      { icon: 'mdi-cash', title: '40 €/Einzelstunde', subtitle: '45 min · ohne Bindung' },
      { icon: 'mdi-package-variant', title: '10er Karte 500 €', subtitle: 'Flexibel einlösbar' },
    ],
    '/singen': [
      { icon: 'mdi-calendar-month', title: '99 €/Monat', subtitle: 'Jahresabo · 45 min wöchentlich' },
      { icon: 'mdi-cash', title: '40 €/Einzelstunde', subtitle: '60 min · ohne Bindung' },
      { icon: 'mdi-account-group-outline', title: 'Singkreis 15 €', subtitle: '90 min · 10er Karte 135 €' },
    ],
    '/sprechen': [
      { icon: 'mdi-cash', title: 'ab 40 €/Sitzung', subtitle: 'Individuelles Angebot' },
      { icon: 'mdi-file-document-check', title: 'Auf Rezept', subtitle: 'Logopädie über die Krankenkasse' },
    ],
    '/atmen': [
      { icon: 'mdi-cash', title: '60 €/Sitzung', subtitle: 'Atemmassage · 50 min' },
      { icon: 'mdi-package-variant', title: '10er Karte 580 €', subtitle: '10 × 50 min Atemmassage' },
      { icon: 'mdi-account-multiple-outline', title: 'Gruppe', subtitle: 'Auf Anfrage · ab 10 Personen' },
    ]
  }

  const pageTitles = {
    '/atmen': 'Atemtraining',
    '/klavier': 'Klavierunterricht',
    '/singen': 'Singen lernen',
    '/sprechen': 'Sprechcoaching'
  }

  const currentPageTitle = computed(() => pageTitles[route.path] || 'Seite')
  const currentPricing = computed(() => pricingStructure[route.path] || [])

  const handleRequest = () => {
    router.push('/termin')
  }
  </script>

  <style scoped>
  .tutor-card {
    max-width: 320px;
    border-radius: 14px !important;
    border: 1px solid rgba(0, 0, 0, 0.06) !important;
    background: #ffffff !important;
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.04) !important;
  }

  @media (max-width: 1024px) {
    .tutor-card {
      max-width: 100%;
    }
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

  .v-list-item :deep(.v-list-item-title) {
    font-weight: 600 !important;
    white-space: normal;
    line-height: 1.3;
  }

  .v-list-item :deep(.v-list-item-subtitle) {
    opacity: 0.85;
    font-size: 0.85rem;
    -webkit-line-clamp: unset !important;
    white-space: normal !important;
    overflow: visible !important;
    text-overflow: clip !important;
    line-height: 1.4;
    margin-top: 2px;
  }
  </style>
