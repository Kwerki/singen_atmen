<template>
    <div class="klavier-container">
      <div class="header-wrapper">
        <h1 class="h1-style text-center mb-4">Klavierunterricht</h1>
        <p class="header-subtitle font-inter-regular">
          Entdecke die Sprache der Musik durch deine Finger
        </p>
      </div>
  
      <v-row justify="center" class="mt-8">
        <v-col cols="12" md="10">
          <v-card class="cta-card mb-8" elevation="2">
            <div class="text-center pa-6">
              <p class="font-inter-regular text-h5 mb-4">
                "Das Klavier ist ein Spiegel der Seele - lass uns gemeinsam deinen Klang finden"
              </p>
              <v-btn 
                variant="text" 
                to="/termin"
                class="cta-button"
              >
                <span class="btn-content">
                  Termin vereinbaren
                  <v-icon icon="mdi-chevron-right" class="ml-2"></v-icon>
                </span>
              </v-btn>
            </div>
          </v-card>
  
          <v-row class="mb-8">
            <v-col cols="12" md="6">
              <div class="info-card pa-6">
                <h2 class="h2-style mb-4">
                  <v-icon icon="mdi-music-clef-treble" class="mr-2"></v-icon>
                  Für wen?
                </h2>
                <v-chip-group column class="mb-4">
                  <v-chip variant="outlined" v-for="age in ageGroups" :key="age">
                    {{ age }}
                  </v-chip>
                </v-chip-group>
                <p class="font-inter-regular">
                  Individueller Unterricht für jede Altersgruppe - 
                  vom ersten Kinderlied bis zur klassischen Sonate
                </p>
              </div>
            </v-col>
  
            <v-col cols="12" md="6">
              <div class="info-card pa-6">
                <h2 class="h2-style mb-4">
                  <v-icon icon="mdi-clock-outline" class="mr-2"></v-icon>
                  Flexible Ansätze
                </h2>
                <div class="font-inter-regular">
                  <div class="d-flex align-center mb-2">
                    <v-icon icon="mdi-ear-hearing" small class="mr-2"></v-icon>
                    Spiel nach Gehör
                  </div>
                  <div class="d-flex align-center mb-2">
                    <v-icon icon="mdi-book-music" small class="mr-2"></v-icon>
                    Notenlehre
                  </div>
                  <div class="d-flex align-center">
                    <v-icon icon="mdi-brain" small class="mr-2"></v-icon>
                    Mentales Training
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
  
          <v-expansion-panels variant="popout" class="mb-8">
            <v-expansion-panel>
              <v-expansion-panel-title class="h2-style">
                <v-icon icon="mdi-currency-eur" class="mr-2"></v-icon>
                Preismodelle
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-table density="compact">
                  <thead>
                    <tr>
                      <th>Modell</th>
                      <th>Umfang</th>
                      <th>Preis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in pricing" :key="item.model">
                      <td>{{ item.model }}</td>
                      <td>{{ item.duration }}</td>
                      <td>{{ item.price }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
  
          <v-row class="mb-8">
            <v-col cols="12" md="8">
              <div class="pa-6 gradient-card">
                <h2 class="h2-style mb-4">Deine Vorteile</h2>
                <div class="font-inter-regular">
                  <div v-for="(benefit, index) in benefits" :key="index" class="mb-3">
                    <v-icon icon="mdi-check-circle" class="mr-2"></v-icon>
                    {{ benefit }}
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div class="pa-6 tip-card">
                <h3 class="h2-style mb-3">
                  <v-icon icon="mdi-lightbulb-on" class="mr-2"></v-icon>
                  Tipp
                </h3>
                <p class="font-inter-regular">
                  Gute Übungspianos findest du oft kostenlos bei Kleinanzeigen - 
                  gerne berate ich bei Auswahl und Transport!
                </p>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script setup>
  const ageGroups = [
    '6-12 Jahre',
    '13-19 Jahre',
    '20-39 Jahre',
    '40+ Jahre'
  ];
  
  const pricing = [
    { model: 'Jahresabo', duration: '4x monatlich', price: '99€/Monat' },
    { model: 'Einzelstunde', duration: '45 Minuten', price: '40€' },
    { model: 'Probestunde', duration: '30 Minuten', price: 'kostenlos' }
  ];
  
  const benefits = [
    'Steigerung der Konzentrationsfähigkeit',
    'Entwicklung kreativer Ausdrucksformen',
    'Stressabbau durch musikalische Entspannung',
    'Verbesserte motorische Fähigkeiten',
    'Individueller Lernfortschritt'
  ];
  </script>
  
  <style scoped>
  .klavier-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }
  
  .header-wrapper {
    background: linear-gradient(rgba(242, 211, 148, 0.2), rgba(242, 211, 148, 0.1));
    padding: 3rem 1rem;
    border-radius: 16px;
    margin-bottom: 2rem;
  }
  
  .header-subtitle {
    font-size: 1.4rem;
    text-align: center;
    color: #666;
  }
  
  .cta-card {
    background-color: #F2D394;
    border-radius: 12px;
    transition: transform 0.3s ease;
  }
  
  .cta-card:hover {
    transform: translateY(-5px);
  }
  
  .cta-button {
    font-size: 1.1rem;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
  }
  
  .cta-button:hover .btn-content {
    padding-right: 1.2rem;
  }
  
  .btn-content {
    display: inline-flex;
    align-items: center;
    transition: padding 0.3s ease;
  }
  
  .info-card {
    background: white;
    border-radius: 12px;
    height: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: box-shadow 0.3s ease;
  }
  
  .info-card:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  }
  
  .gradient-card {
    background: linear-gradient(45deg, #F2D394 0%, #f5e9d8 100%);
    border-radius: 12px;
  }
  
  .tip-card {
    background: #fff;
    border-left: 4px solid #F2D394;
    border-radius: 8px;
    height: 100%;
  }
  
  .v-chip {
    border-color: #F2D394 !important;
    color: #333 !important;
  }
  
  .v-expansion-panel {
    border-radius: 8px !important;
  }
  </style>