<template>
  <div class="main-container">
    <div class="page-hero fade-in">
      <p class="eyebrow">Musikunterricht</p>
      <h1 class="h1-style text-center">
        Klavierunterricht — Klavier spielen macht Spaß
      </h1>
    </div>
    <div class="content-wrapper">
      <div class="klavier-container">
        <v-container>
          <div class="content-section">
            <h2 class="h2-style mb-6">
              Erleben Sie das erhabene Gefühl, Klavier zu spielen
            </h2>
            <p class="body-text">
              Seit 2005 unterrichte ich Kinder und Erwachsene im Klavierspiel —
              im Salon in Homberg Efze, in entspannter Atmosphäre und individuell
              abgestimmt. Vom ersten Ton bis zur freien Interpretation: wir
              entdecken gemeinsam Rhythmus, Harmonie und musikalisches Gefühl.
              Vereinbaren Sie gerne eine Schnupperstunde.
            </p>
            <div class="content-section image-content-section">
              <img :src="klavierImage" alt="Klavierunterricht im Salon" class="hero-image" />
            </div>
          </div>

          <div class="content-section">
            <h2 class="h2-style mb-6">Für jedes Alter</h2>
            <v-row>
              <v-col v-for="(group, i) in audiences" :key="i" cols="12" sm="6">
                <div class="audience-card">
                  <h3 class="audience-title">{{ group.title }}</h3>
                  <p class="audience-text">{{ group.text }}</p>
                </div>
              </v-col>
            </v-row>
          </div>

          <div class="content-section">
            <h2 class="h2-style mb-6">Häufig gestellte Fragen</h2>
            <div v-for="(item, i) in faqs" :key="i" class="faq-item">
              <h3 class="faq-question">{{ item.question }}</h3>
              <p class="body-text">{{ item.answer }}</p>
            </div>
          </div>

          <div class="content-section">
            <h2 class="h2-style mb-6">Ihr individueller Lernweg</h2>
            <ul class="benefit-list">
              <li v-for="(benefit, i) in benefits" :key="i" class="benefit-item">
                <div class="benefit-title">{{ benefit.title }}</div>
                <div class="benefit-subtitle">{{ benefit.subtitle }}</div>
              </li>
            </ul>
          </div>

          <div class="content-section">
            <h2 class="h2-style mb-6">Einblicke in den Unterricht</h2>
            <div class="video-container">
              <iframe width="100%" height="360" src="https://www.youtube-nocookie.com/embed/G5qktkFhSF4"
                title="Musik für eine gesellige Runde" frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen style="border: none;"></iframe>
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

const audiences = ref([
  { title: 'Kinder · 6–12 Jahre', text: 'Spielerischer Zugang über Rhythmus, Gehör und kleine Stücke.' },
  { title: 'Jugendliche · 13–19 Jahre', text: 'Vom Lieblingssong bis zum Vorspiel — Technik mit Anspruch.' },
  { title: 'Erwachsene · ab 20', text: 'Wiedereinstieg oder erste Schritte, in eigenem Tempo.' },
  { title: 'Späteinsteiger · ab 40', text: 'Es ist nie zu spät: erfüllte Stunden am Instrument.' },
]);

const faqs = ref([
  {
    question: 'Muss ich Noten lesen können?',
    answer: 'Anfänger:innen brauchen das anfangs nicht. Wir entwickeln zunächst Gehör und Vertrautheit mit den Tasten. Auch intuitives Spielen ohne Noten ist möglich — Notenkenntnis kommt mit der Zeit.',
  },
  {
    question: 'Lohnt es sich bei wenig Übezeit?',
    answer: 'Ja — Freude entsteht, wenn Stücke wirklich „sitzen". Mit effektiven Übetechniken und mentalem Vorhören kommt man auch in kurzen Einheiten weit.',
  },
  {
    question: 'Warum überhaupt Klavier spielen?',
    answer: 'Ihre musikalische Veranlagung ist ein Lebenshunger, der gestillt werden möchte. Regelmäßiges Spielen schult Konzentration, Feinmotorik und ist ein wunderbarer Ausgleich zum Alltag.',
  },
  {
    question: 'Wie komme ich an ein Klavier?',
    answer: 'Schauen Sie in Kleinanzeigen — gute Instrumente werden oft günstig oder verschenkt angeboten. Klaviere lassen sich mit Trageriemen sicher transportieren. Ich berate Sie gerne.',
  },
]);

const benefits = ref([
  { title: 'Maßgeschneiderter Unterricht', subtitle: 'Individuell abgestimmt auf Alter, Lerntempo und musikalische Ziele' },
  { title: 'Fundierte Technik', subtitle: 'Rhythmik, Harmonielehre und musikalischer Ausdruck' },
  { title: 'Noten und Intuition', subtitle: 'Klassische Notenlehre kombiniert mit intuitivem Spiel' },
  { title: 'Im Salon in Homberg Efze', subtitle: 'Ruhige, persönliche Atmosphäre statt anonymer Schulräume' },
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

.page-hero {
  margin: 1.5rem 0 3.5rem;
}
</style>
