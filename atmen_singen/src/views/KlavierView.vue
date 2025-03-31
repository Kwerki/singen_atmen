<template>
  <div class="klavier-container">
    <!-- Hero Section -->
    <v-row class="hero-section mb-8" align="center">
      <v-col cols="12" md="6">
        <img
          src="@/assets/home_logos/klavier.jpg"
          
          class="teacher-portrait rounded-lg"
          style="width: 100%; height: auto; object-fit: cover;"
        ></img>
      </v-col>
      
      <v-col cols="12" md="6">
        <h1 class="h1-style mb-4">Individueller Klavierunterricht</h1>
        <div class="font-inter-regular mb-4">
          <v-chip variant="outlined" class="mr-2 mb-2" v-for="badge in badges" :key="badge">
            {{ badge }}
          </v-chip>
        </div>
        <div class="font-inter-regular text-h5 mb-6">
          "Lass uns gemeinsam deine musikalische Sprache entwickeln"
        </div>
        <v-btn 
          variant="text" 
          to="/termin"
          class="cta-button"
        >
          <span class="btn-content">
            Kostenlose Probestunde buchen
            <v-icon icon="mdi-arrow-right" class="ml-2"></v-icon>
          </span>
        </v-btn>
      </v-col>
    </v-row>

    <!-- Teaching Approach -->
    <v-row class="mb-8">
      <v-col cols="12" md="4" v-for="(method, index) in methods" :key="index">
        <v-card class="method-card pa-6">
          <v-icon :icon="method.icon" size="48" class="mb-4"></v-icon>
          <h2 class="h2-style mb-3">{{ method.title }}</h2>
          <p class="font-inter-regular">{{ method.description }}</p>
        </v-card>
      </v-col>
    </v-row>

    <!-- Lesson Content -->
    <v-row class="mb-8">
      <v-col cols="12" md="8">
        <div class="pa-6 content-card">
          <h2 class="h1-style mb-4">Dein Unterricht beinhaltet:</h2>
          <ul class="font-inter-regular">
            <li v-for="(item, index) in lessonContent" :key="index" class="mb-3">
              <v-icon icon="mdi-music" class="mr-2"></v-icon>
              {{ item }}
            </li>
          </ul>
        </div>
      </v-col>
      
      <v-col cols="12" md="4">
        <div class="sticky-card pa-6">
          <h3 class="h2-style mb-4">Preisübersicht</h3>
          <v-expansion-panels variant="accordion">
            <v-expansion-panel v-for="(price, index) in pricing" :key="index">
              <v-expansion-panel-title class="font-inter-regular">
                {{ price.title }}
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <td>Dauer</td>
                      <td>{{ price.duration }}</td>
                    </tr>
                    <tr>
                      <td>Preis</td>
                      <td>{{ price.amount }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </v-col>
    </v-row>

    <!-- Reviews -->
    <v-row class="mb-8">
      <v-col cols="12">
        <h2 class="h1-style text-center mb-6">Stimmen meiner Schüler</h2>
        <v-row>
          <v-col cols="12" md="4" v-for="(review, index) in reviews" :key="index">
            <v-card class="review-card pa-6">
              <div class="d-flex align-center mb-3">
                <v-avatar color="primary" size="48" class="mr-3">
                  <span class="text-white">{{ review.initials }}</span>
                </v-avatar>
                <div>
                  <div class="font-weight-bold">{{ review.name }}</div>
                  <div class="text-caption">{{ review.age }} Jahre</div>
                </div>
              </div>
              <p class="font-inter-regular">"{{ review.text }}"</p>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const badges = [
  'Royal College of Music London',
  '10+ Jahre Erfahrung',
  'Diplom-Musikpädagogin'
];

const methods = [
  {
    icon: 'mdi-hand-heart',
    title: 'Ganzheitlicher Ansatz',
    description: 'Verbinde Technik mit emotionalem Ausdruck für authentisches Spiel'
  },
  {
    icon: 'mdi-brain',
    title: 'Mental Coaching',
    description: 'Überwinde Leistungsdruck durch kreative Freiheit'
  },
  {
    icon: 'mdi-music-circle',
    title: 'Improvisation',
    description: 'Entdecke deinen persönlichen Stil jenseits der Noten'
  }
];

const lessonContent = [
  'Individueller Lernplan für deine Ziele',
  'Gehörbildung & Rhythmik',
  'Harmonielehre verständlich erklärt',
  'Körperbewusstsein am Instrument',
  'Repertoire-Aufbau nach deinen Vorlieben',
  'Vorbereitung auf Auftritte/Vorspiele'
];

const pricing = [
  { 
    title: 'Einzelstunde',
    duration: '45 Minuten',
    amount: '40€'
  },
  { 
    title: 'Jahresabo',
    duration: '4x monatlich',
    amount: '99€/Monat'
  },
  { 
    title: 'Intensivkurs',
    duration: '90 Minuten',
    amount: '70€'
  }
];

const reviews = [
  {
    initials: 'TS',
    name: 'Thomas Schmidt',
    age: 34,
    text: 'Antje versteht es perfekt, Technik mit Leidenschaft zu verbinden'
  },
  {
    initials: 'LM',
    name: 'Lena Müller',
    age: 28,
    text: 'Endlich verstehe ich Musiktheorie praktisch anzuwenden'
  },
  {
    initials: 'JK',
    name: 'Jana Köhler',
    age: 42,
    text: 'Der Unterricht hat mein Verhältnis zum Klavier komplett verändert'
  }
];
</script>

<style scoped>
.klavier-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
}

.hero-section {
  background: linear-gradient(to right, #F2D394 30%, #f5e9d8 100%);
  padding: 3rem;
  border-radius: 16px;
}

.teacher-portrait {
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}

.method-card {
  background: rgba(255,255,255,0.9);
  border-radius: 12px;
  transition: transform 0.3s ease;
  height: 100%;
}

.method-card:hover {
  transform: translateY(-5px);
}

.content-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.sticky-card {
  position: sticky;
  top: 2rem;
  background: #F2D394;
  border-radius: 12px;
}

.review-card {
  background: #fff;
  border-left: 4px solid #F2D394;
  transition: all 0.3s ease;
}

.review-card:hover {
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}

.cta-button {
  background: #fff !important;
  padding: 16px 32px !important;
  border-radius: 8px !important;
  font-size: 1.1rem !important;
  letter-spacing: 0.5px !important;
}

.v-chip {
  border-color: #fff !important;
  background: rgba(255,255,255,0.2) !important;
}

.v-table {
  --v-table-header-color: #333;
  --v-table-row-hover-color: #f5e9d8;
}
</style>