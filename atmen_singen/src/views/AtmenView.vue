<template>
    <div class="main-container">
      <div class="page-hero fade-in">
        <p class="eyebrow">Atemarbeit</p>
        <h1 class="h1-style text-center">
          Atemtraining — richtig atmen, wieder spüren
        </h1>
      </div>
      <div class="content-wrapper">
        <div class="atem-container">
          <v-container>

            <div class="content-section">
              <h2 class="h2-style mb-6">Wohlsein beginnt mit dem Atem</h2>
              <p class="body-text">
                Wohlbefinden hat eine körperliche und eine seelisch-geistige
                Seite — Atem verbindet beide. Flacher oder einseitiger Atem
                erschöpft auf Dauer; eine ökonomische, unwillkürliche Atmung
                bringt das System zurück ins Gleichgewicht. Wir entwickeln
                <strong>körperliche Durchlässigkeit</strong>, einen freien
                Atemfluss und nutzen die Stimme, um die Atemräume zu kräftigen.
              </p>
              <div class="content-section image-content-section">
                <img :src="atemImage" alt="Atemtraining im Salon" class="hero-image" />
              </div>
            </div>

            <div class="content-section">
              <h2 class="h2-style mb-6">Drei Wege in den Atem</h2>
              <v-row>
                <v-col v-for="(offer, i) in offerings" :key="i" cols="12" md="4">
                  <div class="offer-card">
                    <h3 class="offer-title">{{ offer.title }}</h3>
                    <p class="offer-text">{{ offer.text }}</p>
                    <p class="offer-meta">{{ offer.meta }}</p>
                  </div>
                </v-col>
              </v-row>
            </div>

            <div class="content-section">
              <h2 class="h2-style mb-6">Häufige Fragen</h2>
              <div v-for="(item, i) in faqs" :key="i" class="faq-item">
                <h3 class="faq-question">{{ item.question }}</h3>
                <p class="body-text">{{ item.answer }}</p>
              </div>
            </div>

            <div class="content-section">
              <h2 class="h2-style mb-6">Für wen geeignet?</h2>
              <ul class="benefit-list">
                <li v-for="(benefit, i) in benefits" :key="i" class="benefit-item">
                  <div class="benefit-title">{{ benefit.title }}</div>
                  <div class="benefit-subtitle">{{ benefit.subtitle }}</div>
                </li>
              </ul>
            </div>

            <div class="content-section">
              <h2 class="h2-style mb-6">Einblicke in die Atemarbeit</h2>
              <div class="video-container">
                <iframe
                  width="100%"
                  height="360"
                  src="https://www.youtube-nocookie.com/embed/0QK-zQwYCvw?start=204"
                  title="Bühnenreif"
                  frameborder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  style="border: none;">
                </iframe>
              </div>
            </div>

          </v-container>
        </div>

        <div class="pricing-wrapper">
          <TutorPricing />
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import TutorPricing from '@/components/TutorPricing.vue';
import atemImage from '@/assets/home_logos/atem.jpg';

const offerings = ref([
  {
    title: 'Atemmassage',
    text: 'Einzelarbeit am Körper: Atemrhythmus, Tonus und Stimmgefühl in einer geführten Sitzung.',
    meta: '50 min · 60 € · 10er Karte 580 €',
  },
  {
    title: 'Vom Tönen zum Singen',
    text: 'Stimme als natürliche Atembewegung erleben — vom freien Ton bis zum klingenden Lied.',
    meta: 'Einzelstunden auf Anfrage',
  },
  {
    title: 'Atmen in der Gruppe',
    text: 'Gemeinsames Tönen und Atmen in entspannter Runde — auch für Vereine oder Teams.',
    meta: 'Auf Anfrage · ab 10 Personen',
  },
]);

const faqs = ref([
  {
    question: 'Was charakterisiert eine gesunde Atmung?',
    answer: 'Atemzüge entstehen unwillkürlich — sichtbar in Bauch und Brustkorb, hörbar still. Kein Pressen, kein Festhalten, keine forcierten Bewegungen.',
  },
  {
    question: 'Wie wirkt Atmung auf das Wohlbefinden?',
    answer: 'Bewusste Atemlenkung beeinflusst das vegetative Nervensystem und damit Anspannung, Stimmung und Energiehaushalt — direkt spürbar.',
  },
  {
    question: 'Muss ich vorher etwas können?',
    answer: 'Nichts. Sie kommen, wie Sie sind. Wir starten mit Wahrnehmung — ohne Ziel, ohne Druck.',
  },
]);

const benefits = ref([
  { title: 'Erschöpfung', subtitle: 'Wenn der Akku leer ist und Atem flach wird' },
  { title: 'Niedergedrückte Stimmung', subtitle: 'Wieder Verbindung zur eigenen Lebensenergie aufnehmen' },
  { title: 'Atemnot und Druck', subtitle: 'Spannungen lösen, Atemraum öffnen' },
  { title: 'Wieder bei sich ankommen', subtitle: 'Für Erwachsene ab ca. 25, in jeder Lebensphase' },
]);
</script>

<style scoped>
.atem-container {
  flex: 1;
  margin-right: 0;
  max-width: 800px;
  margin-left: auto;
}

@media (max-width: 1024px) {
  .pricing-wrapper {
      order: -1;
      margin-bottom: 2rem;
      position: relative;
      width: 100%;
      margin-left: 0;
      margin-right: 0;
      top: auto;
  }

  .atem-container {
    max-width: 100%;
  }
}

.page-hero {
  margin: 1.5rem 0 3.5rem;
}
</style>
