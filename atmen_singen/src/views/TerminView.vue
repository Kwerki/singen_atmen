<template>
    <div class="main-container termin-container">
        <div class="page-hero fade-in">
            <p class="eyebrow">Kontakt</p>
            <h1 class="h1-style text-center">Termin vereinbaren</h1>
            <p class="body-text text-center subtitle mt-3">
                Buchen Sie direkt online einen Termin oder schreiben Sie mir eine
                persönliche Nachricht.
            </p>
        </div>

        <!-- ===== Direct Contact ===== -->
        <v-card class="section-card mb-8 contact-card" elevation="2">
            <v-card-text class="pa-6">
                <v-row>
                    <v-col cols="12" md="4">
                        <div class="contact-block">
                            <v-icon color="primary" class="mb-1">mdi-phone</v-icon>
                            <div class="contact-label">Klavier &amp; Gesang</div>
                            <a href="tel:+4956818189647" class="contact-link">05681 – 8 18 96 47</a>
                        </div>
                    </v-col>
                    <v-col cols="12" md="4">
                        <div class="contact-block">
                            <v-icon color="primary" class="mb-1">mdi-cellphone</v-icon>
                            <div class="contact-label">Sprechcoaching &amp; Logopädie</div>
                            <a href="tel:+4915204485100" class="contact-link">0152 – 044 85 100</a>
                        </div>
                    </v-col>
                    <v-col cols="12" md="4">
                        <div class="contact-block">
                            <v-icon color="primary" class="mb-1">mdi-email</v-icon>
                            <div class="contact-label">E-Mail</div>
                            <a href="mailto:antjes-klavierschule@outlook.com" class="contact-link">
                                antjes-klavierschule@outlook.com
                            </a>
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>

        <!-- ===== Google Calendar Booking ===== -->
        <v-card class="section-card mb-8" elevation="2">
            <v-card-title class="section-title">
                <v-icon start color="primary">mdi-calendar-clock</v-icon>
                Online-Buchung
            </v-card-title>
            <v-card-text>
                <p class="body-text mb-4">
                    Wählen Sie einen freien Termin direkt im Kalender aus.
                </p>

                <div v-if="bookingUrl" class="calendar-embed">
                    <iframe
                        :src="bookingUrl"
                        title="Online-Termin buchen"
                        loading="lazy"
                        frameborder="0"
                    ></iframe>
                </div>
                <div v-else class="calendar-placeholder">
                    <v-icon size="48" color="grey">mdi-calendar-blank-outline</v-icon>
                    <p class="body-text mt-3 mb-1">
                        Online-Buchung wird in Kürze aktiviert.
                    </p>
                    <p class="hint-text">
                        Bis dahin nutzen Sie gerne das Kontaktformular weiter unten.
                    </p>
                </div>
            </v-card-text>
        </v-card>

        <!-- ===== Contact Form ===== -->
        <v-card class="section-card" elevation="2">
            <v-card-title class="section-title">
                <v-icon start color="primary">mdi-email-outline</v-icon>
                Persönliche Nachricht
            </v-card-title>
            <v-card-text>
                <p class="body-text mb-6">
                    Sie haben eine spezielle Frage oder einen Sonderwunsch?
                    Schreiben Sie mir — ich melde mich innerhalb von 12 Stunden.
                </p>

                <v-form ref="formRef" v-model="valid" @submit.prevent="sendEmail">
                    <v-row>
                        <v-col cols="12" md="6">
                            <v-text-field
                                v-model="formData.name"
                                label="Name"
                                placeholder="Vor- und Nachname"
                                prepend-inner-icon="mdi-account-outline"
                                :rules="[rules.required]"
                                variant="outlined"
                                density="comfortable"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field
                                v-model="formData.email"
                                label="E-Mail"
                                placeholder="ihre@email.de"
                                type="email"
                                prepend-inner-icon="mdi-email-outline"
                                :rules="[rules.required, rules.email]"
                                variant="outlined"
                                density="comfortable"
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" md="6">
                            <v-text-field
                                v-model="formData.phone"
                                label="Telefon (optional)"
                                placeholder="z.B. 0123 4567890"
                                prepend-inner-icon="mdi-phone-outline"
                                variant="outlined"
                                density="comfortable"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-select
                                v-model="formData.topic"
                                :items="topics"
                                label="Anliegen"
                                prepend-inner-icon="mdi-tag-outline"
                                :rules="[rules.required]"
                                variant="outlined"
                                density="comfortable"
                            ></v-select>
                        </v-col>
                    </v-row>

                    <v-textarea
                        v-model="formData.message"
                        label="Ihre Nachricht"
                        placeholder="Erzählen Sie mir kurz von Ihrem Anliegen…"
                        prepend-inner-icon="mdi-message-text-outline"
                        :rules="[rules.required, rules.minLength]"
                        rows="5"
                        variant="outlined"
                        density="comfortable"
                        counter="500"
                        maxlength="500"
                    ></v-textarea>

                    <v-checkbox
                        v-model="formData.consent"
                        :rules="[rules.required]"
                        density="compact"
                        color="primary"
                    >
                        <template v-slot:label>
                            <span class="consent-text">
                                Ich bin mit der Verarbeitung meiner Angaben zur
                                Beantwortung meiner Anfrage einverstanden.
                            </span>
                        </template>
                    </v-checkbox>

                    <div class="d-flex justify-end mt-2">
                        <v-btn
                            type="submit"
                            color="primary"
                            class="cta-btn"
                            :loading="loading"
                            :disabled="!valid"
                        >
                            <v-icon start>mdi-send</v-icon>
                            Anfrage senden
                        </v-btn>
                    </div>
                </v-form>
            </v-card-text>
        </v-card>

        <v-snackbar v-model="snackbar.show" :color="snackbar.color" timeout="4500" location="top">
            {{ snackbar.message }}
            <template v-slot:actions>
                <v-btn variant="text" @click="snackbar.show = false">Schließen</v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script>
export default {
    name: 'TerminView',
    data() {
        return {
            // Google Calendar Booking-URL (Appointment Schedule).
            // Anlegen: Google Calendar → Termin "Erstellen" → Buchungsseite →
            // gemeinsame Buchungsseite kopieren (endet typischerweise auf
            // ".../appointments/.../embeddable?gv=true").
            // Solange leer, wird ein Platzhalter angezeigt.
            bookingUrl: '',

            valid: false,
            loading: false,
            formData: {
                name: '',
                email: '',
                phone: '',
                topic: null,
                message: '',
                consent: false,
            },
            topics: [
                'Klavierunterricht',
                'Gesangsunterricht',
                'Atemarbeit',
                'Sprech- und Stimmtraining',
                'Veranstaltung / Auftritt',
                'Sonstiges',
            ],
            rules: {
                required: (v) =>
                    (v !== null && v !== undefined && v !== '' && v !== false) ||
                    'Pflichtfeld',
                email: (v) =>
                    !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ||
                    'Bitte gültige E-Mail-Adresse eingeben',
                minLength: (v) =>
                    !v || v.length >= 10 ||
                    'Mindestens 10 Zeichen',
            },
            snackbar: {
                show: false,
                message: '',
                color: 'success',
            },
        }
    },
    methods: {
        async sendEmail() {
            const { valid } = await this.$refs.formRef.validate();
            if (!valid) return;

            this.loading = true;
            try {
                // TODO: EmailJS / Backend-Anbindung hier integrieren.
                // Beispiel: await emailjs.send(serviceId, templateId, this.formData);
                console.log('Formular gesendet:', this.formData);
                await new Promise((res) => setTimeout(res, 600));

                this.snackbar = {
                    show: true,
                    message: 'Vielen Dank! Ihre Anfrage wurde versendet.',
                    color: 'success',
                };
                this.resetForm();
            } catch (error) {
                console.error('Fehler beim Senden:', error);
                this.snackbar = {
                    show: true,
                    message: 'Leider ist ein Fehler aufgetreten. Bitte später erneut versuchen.',
                    color: 'error',
                };
            } finally {
                this.loading = false;
            }
        },
        resetForm() {
            this.formData = {
                name: '',
                email: '',
                phone: '',
                topic: null,
                message: '',
                consent: false,
            };
            this.$refs.formRef?.resetValidation();
        },
    },
}
</script>

<style scoped>
.termin-container {
    max-width: 920px;
}

.page-hero {
    margin: 1.5rem 0 3rem;
}

.subtitle {
    color: #6b7a90;
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
}

.section-card {
    border-radius: 16px;
    overflow: hidden;
}

.section-title {
    font-family: 'Kolage Light', sans-serif;
    font-size: 1.15rem;
    padding: 18px 22px;
    background: rgba(201, 123, 42, 0.04);
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    display: flex;
    align-items: center;
}

.calendar-embed {
    width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: 12px;
    overflow: hidden;
    background: #f5f5f5;
}

.calendar-embed iframe {
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
}

.calendar-placeholder {
    text-align: center;
    padding: 3rem 1rem;
    border: 2px dashed rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    background: rgba(0, 0, 0, 0.02);
}

.hint-text {
    font-size: 0.9rem;
    color: #9aa3b2;
    margin: 0;
}

.consent-text {
    font-size: 0.875rem;
    color: #4a5568;
    line-height: 1.4;
}

.contact-card {
    background: #fffdf7;
    border: 1px solid rgba(232, 201, 122, 0.4);
}

.contact-block {
    text-align: center;
    padding: 0.5rem 0;
}

.contact-label {
    font-family: 'Kolage Light', sans-serif;
    font-size: 0.85rem;
    color: #6b7a90;
    margin-bottom: 0.25rem;
    letter-spacing: 0.02em;
}

.contact-link {
    font-family: 'Inter';
    font-size: 1rem;
    font-weight: 600;
    color: #c97b2a;
    text-decoration: none;
    word-break: break-word;
}

.contact-link:hover {
    text-decoration: underline;
}

@media (max-width: 599px) {
    .calendar-embed {
        aspect-ratio: 3 / 4;
    }
}
</style>
