<template>
  <div class="main-container">
    <h1 class="h1-style text-center mb-8">
      Klavierkunst entdecken - Ihr persönlicher Weg zur Musikalität
    </h1>
    <v-divider class="my-8">
      <v-icon color="secondary">mdi-music-clef-treble</v-icon>
    </v-divider>
    <div class="content-wrapper">
      <div class="klavier-container">
        <v-container>
          <div class="content-section">
            <h2 class="h2-style  mb-6">
              Willkommen in der Welt der Tasten
            </h2>
            <p class="body-text">
              Begeben Sie sich auf eine klangvolle Reise, die von den ersten einfachen Melodien bis zur meisterhaften
              Interpretation führt.
              Entfalten Sie Ihr musikalisches Potenzial in einer inspirierenden Atmosphäre, die Freude am Lernen mit
              professionellem Anspruch vereint.
            </p>
            <div class="content-section image-content-section">
              <img :src="klavierImage" alt="Professioneller Klavierunterricht" class="klavier-bild" />
            </div>
          </div>
          <div class="content-section">
            <h2 class="h2-style mb-6">
              Häufig gestellte Fragen
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
              Ihr individueller Lernweg
            </h2>
            <v-list lines="two" class="rounded-lg benefit-list" elevation="2">
              <v-list-item v-for="(benefit, i) in benefits" :key="i" :prepend-icon="benefit.icon">
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
              Einblicke in die Klavierkunst
            </h2>
            <div class="video-container">
              <iframe width="100%" height="360" src="https://www.youtube.com/embed/G5qktkFhSF4" title="YouTube-Video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen sandbox="allow-scripts allow-same-origin" style="border: none;"></iframe>
              <p v-if="false" class="mt-2 text-center text-muted">
                Das Video ist zurzeit nicht verfügbar. Bitte versuchen Sie es später noch einmal.
              </p>
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
import klavierImage from '@/assets/home_logos/klavier.jpg';

const faqs = ref([
  {
    question: 'Benötige ich Vorkenntnisse?',
    answer:
      'Ihr musikalischer Weg beginnt genau dort, wo Sie stehen. Wir entwickeln gemeinsam eine fundierte Basis – ganz gleich, ob Sie erste Erfahrungen sammeln oder vorhandenes Wissen vertiefen möchten.',
    icon: 'mdi-music-clef-treble',
  },
  {
    question: 'Wie wichtig ist regelmäßiges Üben?',
    answer:
      'Durch effiziente Übetechniken und fokussierte Lerneinheiten maximieren wir Ihren Fortschritt. Qualität vor Quantität steht dabei im Mittelpunkt unserer Methodik.',
    icon: 'mdi-clock-time-three',
  },
  {
    question: 'Instrumentenbeschaffung?',
    answer:
      'Gerne beraten wir Sie bei der Auswahl und Organisation – von Mietoptionen bis zur professionellen Instrumentenpflege.',
    icon: 'mdi-truck-delivery',
  },
]);

const benefits = ref([
  {
    title: 'Maßgeschneiderter Unterricht',
    subtitle: 'Individuell abgestimmt auf Alter, Lerntempo und musikalische Ziele',
    icon: 'mdi-account-music',
    color: 'indigo',
  },
  {
    title: 'Fundamentale Techniken',
    subtitle: 'Rhythmik, Harmonielehre und musikalischer Ausdruck',
    icon: 'mdi-music-box-multiple',
    color: 'teal',
  },
  {
    title: 'Flexible Methodik',
    subtitle: 'Kombination aus traditioneller Notenlehre und modernem Intuitionstraining',
    icon: 'mdi-brain',
    color: 'orange',
  },
  {
    title: 'Altersgerechte Konzepte',
    subtitle: 'Von spielerischer Frühförderung bis zum anspruchsvollen Repertoiretraining',
    icon: 'mdi-human-male-female-child',
    color: 'pink',
  },
]);
</script>

<style scoped>
.klavier-container {
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

  .klavier-container {
    margin-right: 0;
    max-width: 100%;
  }
}

.klavier-bild {
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
  align-items: center;
}

.v-list-item:last-child {
  border-bottom: none;
}

.icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    width: 24px;
    height: 24px;
    
}

</style>
