<template>
    <div class="klavier-container">
      <h1 class="h1-style text-center mb-8">Klavierunterricht</h1>
  
      <v-row justify="center">
        <v-col cols="12" md="8">
          <div class="text-center mb-10">
            <p class="font-inter-regular text-h5 mb-4">
              Entdecke die Freude am Musizieren - wo Technik auf Emotion trifft
            </p>
            
            <v-btn 
              :ripple="false" 
              variant="plain" 
              to="/termin"
              class="my-4"
            >
              <div class="btn-underline h2-style">Termin vereinbaren</div>
            </v-btn>
          </div>
  
          <v-expansion-panels variant="accordion" class="mb-8">
            <v-expansion-panel>
              <v-expansion-panel-title class="h2-style">
                Unterrichtsdetails
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-list class="font-inter-regular">
                  <v-list-item>
                    <v-list-item-title>Einzelunterricht</v-list-item-title>
                    <v-list-item-subtitle>45 Minuten wöchentlich</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Preismodell</v-list-item-title>
                    <v-list-item-subtitle>99€ monatlich oder 40€/Stunde</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
  
          <div class="mb-8">
            <h2 class="h2-style mb-4">Dein Weg zum Klavierspiel</h2>
            <div class="font-inter-regular">
              <p class="mb-4">• Intuitiver Einstieg ohne Notenkenntnisse</p>
              <p class="mb-4">• Effektive Übetechniken für jede Lebenssituation</p>
              <p class="mb-4">• Persönliche Entwicklung durch Musikalität</p>
            </div>
          </div>
  
          <v-divider class="my-8" />
  
          <div class="pa-6 rounded-lg" style="background-color: #f5e9d8;">
            <h2 class="h2-style mb-4">Warum Klavier?</h2>
            <p class="font-inter-regular">
              Das Klavier ist Tor zur Musikwelt - es verbindet rhythmische Präzision 
              mit emotionalem Ausdruck. Bei mir lernst du beides in Harmonie zu bringen.
            </p>
          </div>
  
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script setup>
  // Script kann leer bleiben wenn keine Logik benötigt wird
  </script>
  
  <style scoped>
  .klavier-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }
  
  .btn-underline {
    position: relative;
    padding-bottom: 2px;
  }
  
  .btn-underline::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: currentColor;
    transition: width 0.3s ease;
  }
  
  .btn-underline:hover::after {
    width: 100%;
  }
  
  .v-list-item-title {
    font-weight: 500 !important;
    letter-spacing: 0.5px;
  }
  </style>