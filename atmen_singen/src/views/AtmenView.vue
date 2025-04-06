<template>
    <div class="main-container">
      <h1 class="h1-style text-center mb-8">
        Atemkunst entdecken - Die Essenz vitaler Lebensenergie
      </h1>
      <v-divider class="my-8">
        <v-icon color="secondary">mdi-lungs</v-icon>
      </v-divider>
      <div class="content-wrapper">
        <div class="atem-container">
          <v-container>
  
            <div class="content-section">
              <h2 class="h2-style mb-6">
                Willkommen in der Welt des Atems
              </h2>
              <p class="body-text">
                Entdecken Sie die transformative Kraft bewusster Atmung, wo physiologische Prozesse und emotionale Balance
                in Einklang kommen. Entwickeln Sie eine natürliche Atemökonomie - von der basalen Körperwahrnehmung
                bis zur harmonischen Verbindung von Stimme und Atemfluss.
              </p>
              <div class="content-section image-content-section">
                <img :src="atemImage" alt="Atemtraining und Körperbewusstsein" class="atem-bild" />
              </div>
            </div>
  
            <div class="content-section">
              <h2 class="h2-style mb-6">
                Häufige Fragen
              </h2>
              <div v-for="(item, i) in faqs" :key="i" class="mb-6">
                <h3 class="h3-style">
                  <v-icon color="primary" class="mr-2">{{ item.icon }}</v-icon>
                  {{ item.question }}
                </h3>
                <p class="body-text">{{ item.answer }}</p>
              </div>
            </div>
  
            <div class="content-section">
              <h2 class="h2-style mb-6">
                Ihr Weg zur Atemharmonie
              </h2>
              <v-list lines="two" class="rounded-lg benefit-list">
                <v-list-item v-for="(benefit, i) in benefits" :key="i">
                  <template v-slot:prepend>
                    <div class="icon-wrapper">
                      <v-icon :color="benefit.color">{{ benefit.icon }}</v-icon>
                    </div>
                  </template>
                  <v-list-item-title class="font-weight-bold list-item-title">{{ benefit.title }}</v-list-item-title>
                  <v-list-item-subtitle class="list-item-subtitle">{{ benefit.subtitle }}</v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </div>
  
            <div class="content-section">
              <h2 class="h2-style mb-6">
                Einblicke in die Atemtechnik
              </h2>
              <div class="video-container">
                <iframe
                  width="100%"
                  height="360"
                  src="https://www.youtube.com/embed/0QK-zQwYCvw?start=204"
                  title="Atemtechnik Grundlagen"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
  
  const faqs = ref([
    {
      question: 'Was charakterisiert eine gesunde Atmung?',
      answer: 'Natürliche Atemzüge entstehen unwillkürlich mit spürbaren Bewegungen in Brustkorb und Zwerchfell, frei von Anspannung und Geräuschen.',
      icon: 'mdi-lungs',
    },
    {
      question: 'Wie beeinflusst Atmung das Wohlbefinden?',
      answer: 'Durch bewusste Atemregulation können wir das Zusammenspiel von vegetativem Nervensystem und emotionaler Balance optimieren.',
      icon: 'mdi-heart-pulse',
    },
    {
      question: 'Welche Rolle spielt die Körperhaltung?',
      answer: 'Eine aufrechte, entspannte Haltung ermöglicht den freien Fluss der Atembewegungen und unterstützt die Organfunktionen.',
      icon: 'mdi-human-handsdown',
    },
  ]);
  
  const benefits = ref([
    {
      title: 'Vitalitätssteigerung',
      subtitle: 'Aktivierung des gesamten Atemapparats für mehr Lebensenergie',
      icon: 'mdi-leaf',
      color: 'teal',
    },
    {
      title: 'Körperbewusstsein',
      subtitle: 'Schulung der Eigenwahrnehmung für ökonomische Atemmuster',
      icon: 'mdi-yoga',
      color: 'indigo',
    },
    {
      title: 'Vokalresonanz',
      subtitle: 'Nutzung der Stimme zur Atemaktivierung und Klangentfaltung',
      icon: 'mdi-account-voice',
      color: 'deep-orange',
    },
    {
      title: 'Emotionale Balance',
      subtitle: 'Regulation des Nervensystems durch bewusste Atemlenkung',
      icon: 'mdi-brain',
      color: 'purple',
    },
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
  
  .atem-bild {
    width: 100%;
    max-width: 750px;
    height: auto;
    border-radius: 12px;
  }
  
  .benefit-list {
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .list-item-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #2d3748;
  }
  
  .list-item-subtitle {
    font-size: 1rem;
    color: #4a5568;
  }
  
  .v-list-item {
    padding: 1.25rem 0;
    border-bottom: 1px solid #e2e8f0;
    align-items: center; /* Vertikale Zentrierung hinzufügen */
  }
  
  .v-list-item:last-child {
    border-bottom: none;
  }
  
  .icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem; /* Abstand zum Text */
    width: 24px; /* Breite des Icons */
    height: 24px; /* Höhe des Icons */
  }
  </style>
  