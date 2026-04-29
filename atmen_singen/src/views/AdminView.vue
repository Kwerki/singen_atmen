<template>
  <div class="main-container">
    <h1 class="h1-style text-center mb-8">News veröffentlichen</h1>
    <v-divider class="my-8">
      <v-icon color="secondary">mdi-publish</v-icon>
    </v-divider>
    
    <v-container>
      <v-card class="admin-card" elevation="2">
        <v-card-text>
          <v-form ref="form" v-model="valid">
            <v-text-field
              v-model="title"
              label="Titel"
              placeholder="z.B. Neue Stundensätze ab Mai"
              :rules="[rules.required]"
              class="mb-4"
            ></v-text-field>
            
            <v-textarea
              v-model="text"
              label="Nachricht"
              placeholder="Was möchten Sie mitteilen?"
              :rules="[rules.required]"
              rows="4"
              class="mb-4"
            ></v-textarea>
            
            <v-btn
              color="primary"
              size="large"
              :disabled="!valid"
              @click="submitNews"
              class="mt-4"
            >
              <v-icon start>mdi-send</v-icon>
              An Lave senden
            </v-btn>
          </v-form>
          
          <v-alert v-if="submitted" type="success" class="mt-6" closable @click="submitted = false">
            News wurde erfolgreich gesendet! Die Seite wird in Kürze aktualisiert.
          </v-alert>
        </v-card-text>
      </v-card>
      
      <!-- Preview Section -->
      <v-card v-if="title || text" class="admin-preview mt-6" elevation="1">
        <v-card-text>
          <h3 class="h3-style mb-3">Vorschau</h3>
          <div class="preview-date">{{ formatDate(new Date().toISOString().split('T')[0]) }}</div>
          <h4 class="h4-style mb-2">{{ title || 'Titel...' }}</h4>
          <p class="body-text">{{ text || 'Text...' }}</p>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('');
const text = ref('');
const valid = ref(false);
const submitted = ref(false);

const rules = {
  required: v => !!v || 'Pflichtfeld'
};

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' });
};

const submitNews = async () => {
  try {
    const response = await fetch('http://localhost:3456/news', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: title.value, text: text.value })
    });
    const result = await response.json();
    if (result.success) {
      submitted.value = true;
      setTimeout(() => {
        title.value = '';
        text.value = '';
        submitted.value = false;
      }, 3000);
    }
  } catch (err) {
    alert('Fehler beim Senden: ' + err.message);
  }
};
</script>

<style scoped>
.admin-card {
  border-radius: 16px;
  max-width: 700px;
  margin: 0 auto;
}

.admin-preview {
  border-radius: 16px;
  max-width: 700px;
  margin: 0 auto;
  background: #f8f9fb;
}

.preview-date {
  font-size: 0.85rem;
  color: #9a8c7a;
  margin-bottom: 0.5rem;
  font-weight: 500;
}
</style>
