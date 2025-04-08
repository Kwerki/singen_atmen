<template>
  <div class="termin-container">
    <h2 class="h2-style">Terminvereinbarung</h2>
    
      <!-- Kontaktformular -->
      <div class="contact-form">
        <h3 class="h3-style">Oder schreiben Sie uns direkt</h3>
        <form @submit.prevent="sendEmail">
          <v-text-field
            v-model="formData.name"
            label="Ihr Name"
            required
            outlined
            class="mb-4"
          ></v-text-field>
  
          <v-text-field
            v-model="formData.email"
            label="Ihre E-Mail"
            type="email"
            required
            outlined
            class="mb-4"
          ></v-text-field>
  
          <v-text-field
            v-model="formData.phone"
            label="Telefonnummer"
            outlined
            class="mb-4"
          ></v-text-field>
  
          <v-textarea
            v-model="formData.message"
            label="Ihre Nachricht"
            outlined
            rows="4"
            class="mb-4"
          ></v-textarea>
  
          <v-btn
            type="submit"
            color="primary"
            :loading="loading"
          >
            Anfrage senden
          </v-btn>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TerminView',
    data() {
      return {
        formData: {
          name: '',
          email: '',
          phone: '',
          message: ''
        },
        loading: false
      }
    },
    methods: {
      async sendEmail() {
        this.loading = true
        try {
          // Hier EmailJS Integration einfügen
          console.log('Formular gesendet:', this.formData)
          // Erfolgsmeldung anzeigen
          alert('Vielen Dank! Ihre Anfrage wurde erfolgreich versendet.')
          this.formData = { name: '', email: '', phone: '', message: '' }
        } catch (error) {
          console.error('Fehler beim Senden:', error)
          alert('Leider ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.')
        } finally {
          this.loading = false
        }
      }
    },
    mounted() {
      // Google Calendar Script dynamisch laden
      const script = document.createElement('script')
      script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js'
      script.async = true
      document.head.appendChild(script)
  
      const link = document.createElement('link')
      link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css'
      link.rel = 'stylesheet'
      document.head.appendChild(link)
    }
  }
  </script>
  
  <style scoped>
  .termin-container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
  }
  
  .calendar-section {
    margin: 3rem 0;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .contact-form {
    margin-top: 4rem;
    padding: 2rem;
    background-color: #f8f9fa;
    border-radius: 12px;
  }
  
  /* Anpassungen für Mobile */
  @media (max-width: 768px) {
    .termin-container {
      padding: 1rem;
    }
    
    .contact-form {
      padding: 1rem;
    }
  }

  .calendar-frame {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
}

@media (max-width: 768px) {
  .calendar-frame iframe {
    height: 400px;
  }
}
  </style>