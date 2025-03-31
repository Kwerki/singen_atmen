<template>
    <v-card class="tutor-card" elevation="2">
        <v-card-text>
            <!-- Header Section -->
            <div class="d-flex align-center mb-4">
                <h2 class="h2-style mr-2">{{ currentPageTitle }}</h2>
            </div>

            <!-- Stats Section -->
            <v-list density="compact" class="mb-4">
                <v-list-item>
                    <template v-slot:prepend>
                        <v-icon icon="mdi-cash" class="mr-2"></v-icon>
                    </template>
                    <v-list-item-title>65€/Stunde</v-list-item-title>
                    <v-list-item-subtitle>Tarif</v-list-item-subtitle>
                </v-list-item>

                <v-list-item v-if="showInsuranceHint">
                    <template v-slot:prepend>
                        <v-icon icon="mdi-hospital-box" class="mr-2"></v-icon>
                    </template>
                    <v-list-item-title>Kostenübernahme Krankenkasse</v-list-item-title>
                    <v-list-item-subtitle>gemäß Heilmittelrichtlinien</v-list-item-subtitle>
                </v-list-item>

                <v-list-item>
                    <template v-slot:prepend>
                        <v-icon icon="mdi-clock-outline" class="mr-2"></v-icon>
                    </template>
                    <v-list-item-title>18h</v-list-item-title>
                    <v-list-item-subtitle>Antwortzeit</v-list-item-subtitle>
                </v-list-item>

                <v-list-item>
                    <template v-slot:prepend>
                        <v-icon icon="mdi-account-group" class="mr-2"></v-icon>
                    </template>
                    <v-list-item-title>50+</v-list-item-title>
                    <v-list-item-subtitle>Schüler:innen</v-list-item-subtitle>
                </v-list-item>
            </v-list>

            <!-- Action Section -->
            <div class="action-section">
                <v-btn variant="outlined" block class="mb-2 request-btn" @click="handleRequest">
                    <v-icon class="mr-2"></v-icon>
                    Unterricht anfragen
                </v-btn>

                <div class="free-lesson text-center">
                    <v-icon icon="mdi-gift-outline" small class="mr-1"></v-icon>
                    1. Stunde gratis
                </div>
            </div>
        </v-card-text>
    </v-card>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const pageTitles = {
    '/atmen': 'Atemtechnik',
    '/klavier': 'Klavierunterricht',
    '/singen': 'Gesangskunst',
    '/sprechen': 'Sprechen'
}

const currentPageTitle = computed(() => {
    return pageTitles[route.path] || 'Seite'
})

const showInsuranceHint = computed(() => {
  return ['/atmen', '/sprechen'].includes(route.path)
})

const handleRequest = () => {
    // Handle booking logic
    console.log('Lesson request initiated')
}
</script>

<style scoped>
.tutor-card {
    max-width: 300px;
    border-radius: 12px !important;
}

.rating {
    color: #FFC107;
    font-size: 1.2rem;
}

.request-btn {
    border-color: #F2D394 !important;
    color: #333 !important;
    letter-spacing: normal;
}

.free-lesson {
    font-size: 0.9rem;
    color: #4CAF50;
    margin-top: 8px;
}

.h2-style {
    font-family: 'Inter';
    font-size: 1.5rem;
    font-weight: 600;
}

.v-list-item {
    padding-left: 0 !important;
}
</style>