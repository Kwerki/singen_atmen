<template>
    <div class="main-container">
        <div class="page-hero fade-in">
            <p class="eyebrow">Stimmbildung</p>
            <h1 class="h1-style text-center">
                Singen lernen — die Stimme entfalten
            </h1>
        </div>
        <div class="content-wrapper">
            <div class="singen-container">
                <v-container>

                    <div class="content-section">
                        <h2 class="h2-style mb-6">Singen macht Mut, schön und Kinder schlau</h2>
                        <p class="body-text">
                            Die Stimme ist ein wunderbares Phänomen, getragen vom Atemfluss.
                            Mein Unterricht arbeitet mit Körperdurchlässigkeit, flexiblem Atem
                            und einer feinen Wahrnehmung von Spannung und Lösung. Grundlage
                            sind die <strong>italienische Gesangstechnik</strong> und die
                            <strong>Schlaffhorst-Andersen-Methode</strong>.
                        </p>
                        <div class="content-section image-content-section">
                            <img :src="singenImage" alt="Gesangsunterricht im Salon" class="hero-image" />
                        </div>
                    </div>

                    <div class="content-section">
                        <h2 class="h2-style mb-6">Drei Wege zum Singen</h2>
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
                        <h2 class="h2-style mb-6">Ihr stimmlicher Entwicklungsweg</h2>
                        <ul class="benefit-list">
                            <li v-for="(benefit, i) in benefits" :key="i" class="benefit-item">
                                <div class="benefit-title">{{ benefit.title }}</div>
                                <div class="benefit-subtitle">{{ benefit.subtitle }}</div>
                            </li>
                        </ul>
                    </div>

                    <div class="content-section">
                        <h2 class="h2-style mb-6">Einblicke in die Stimmkunst</h2>
                        <div class="video-container">
                            <iframe width="100%" height="360" src="https://www.youtube-nocookie.com/embed/3i05ngoBnRk"
                                title="The Lord bless you and keep you" frameborder="0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen style="border: none;">
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
import singenImage from '@/assets/home_logos/singen.jpg';

const offerings = ref([
    {
        title: 'Gesangsunterricht',
        text: 'Einzelunterricht, der zur Stimme passt — ab 14 Jahren bis ins Erwachsenenalter.',
        meta: '45 min wöchentlich oder 60 min einzeln',
    },
    {
        title: 'Singkreis',
        text: 'Einfache Lieder und Kanons in vertrauensvoller Runde — ohne Vorkenntnisse.',
        meta: 'Alle 14 Tage · 90 min · 15 € pro Termin',
    },
    {
        title: 'MitsingKonzerte',
        text: 'Gemeinschaftliches Singen mit einfachen Liedern und zweistimmigen Sätzen.',
        meta: 'Termine auf Anfrage',
    },
]);

const faqs = ref([
    {
        question: 'Brauche ich musikalische Vorkenntnisse?',
        answer: 'Nein. Ihre Stimme ist Ihr Instrument — wir starten dort, wo Sie stehen, und entwickeln Schritt für Schritt Ihre Möglichkeiten.',
    },
    {
        question: 'Wie hängt Atem mit Gesang zusammen?',
        answer: 'Singen lebt vom freien Atemfluss. Wir arbeiten mit Körperwahrnehmung und Atemspielraum, damit der Klang ohne Druck tragen kann.',
    },
    {
        question: 'Kann ich auch im Singkreis einsteigen?',
        answer: 'Ja, der Singkreis ist offen. Einfache Lieder, eine vertrauensvolle Atmosphäre — ideal, um die eigene Stimme zu entdecken.',
    },
]);

const benefits = ref([
    { title: 'Atem als Fundament', subtitle: 'Natürliche Atemstütze für tragfähigen Klang' },
    { title: 'Italienische Schule', subtitle: 'Klassische Klangideale und Resonanzführung' },
    { title: 'Schlaffhorst-Andersen', subtitle: 'Ganzheitliche Stimm- und Atemarbeit' },
    { title: 'Selbstannahme', subtitle: 'Singen mit Mut und kreativem Ausdruck' },
]);
</script>

<style scoped>
.singen-container {
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

    .singen-container {
        max-width: 100%;
    }
}

.page-hero {
    margin: 1.5rem 0 3.5rem;
}
</style>
