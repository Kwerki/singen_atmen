<template>
    <div class="main-container">
        <div class="page-hero fade-in">
            <p class="eyebrow">Therapeutische Praxis</p>
            <h1 class="h1-style text-center">
                Sprechcoaching — die eigene Stimme finden
            </h1>
        </div>
        <div class="content-wrapper">
            <div class="sprechen-container">
                <v-container>

                    <div class="content-section">
                        <h2 class="h2-style mb-6">Atem-, Sprech- und Stimmtherapie auf Rezept</h2>
                        <p class="body-text">
                            Wer den stimmlichen oder sprachlichen Anforderungen seines
                            Berufes oder Alltags nicht mehr gewachsen ist, kann sich von
                            Hausärztin oder HNO-Praxis ein Rezept ausstellen lassen. Als
                            staatlich geprüfte Atem-, Sprech- und Stimmlehrerin mit
                            Kassenzulassung biete ich logopädische Behandlung in der
                            <strong>Praxis AtemWelt Homberg Efze</strong> an.
                        </p>
                        <div class="content-section image-content-section">
                            <img :src="sprechenImage" alt="Sprechcoaching im Salon" class="hero-image" />
                        </div>
                    </div>

                    <div class="content-section">
                        <h2 class="h2-style mb-6">Sieben Schwerpunkte</h2>
                        <v-row>
                            <v-col v-for="(focus, i) in focuses" :key="i" cols="12" sm="6">
                                <div class="focus-card">
                                    <h3 class="focus-title">{{ focus.title }}</h3>
                                    <p class="focus-text">{{ focus.text }}</p>
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
                        <h2 class="h2-style mb-6">Für wen geeignet?</h2>
                        <ul class="benefit-list">
                            <li v-for="(benefit, i) in benefits" :key="i" class="benefit-item">
                                <div class="benefit-title">{{ benefit.title }}</div>
                                <div class="benefit-subtitle">{{ benefit.subtitle }}</div>
                            </li>
                        </ul>
                    </div>

                    <div class="content-section">
                        <h2 class="h2-style mb-6">Einblicke in die Sprechkunst</h2>
                        <div class="video-container">
                            <iframe width="100%" height="360" src="https://www.youtube-nocookie.com/embed/0QK-zQwYCvw?start=204"
                                title="Bühnenreif" frameborder="0"
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
import sprechenImage from '@/assets/home_logos/sprechen.jpg';

const focuses = ref([
    { title: 'Hören', text: 'Die Ohren sorgen für den blitzschnellen Abgleich, ob ich wirklich das sage, was ich meine.' },
    { title: 'Botschaft', text: 'Die Kraft der Sprache entdecken — durch bewusste Wortwahl und klare Kommunikation.' },
    { title: 'Auftritt vor Gruppen', text: 'Speziell für Lehrer:innen: Resonanz, Körperpräsenz, Klarheit und Lebendigkeit.' },
    { title: 'Sprachfehler', text: 'Übermäßige Spannung lösen, Sicherheit im verbalen Ausdruck aufbauen.' },
    { title: 'Beziehungen', text: 'Eigene Bedürfnisse formulieren und Beziehungen durch echten Dialog stärken.' },
    { title: 'Theater', text: 'Rollenarbeit mit Fokus auf wahrhaftiges, menschliches Verhalten auf der Bühne.' },
    { title: 'Rezitation & Vortrag', text: 'Inhalte erschließen für Reden, Gedichte und Präsentationen.' },
]);

const faqs = ref([
    {
        question: 'Brauche ich ein ärztliches Rezept?',
        answer: 'Nicht zwingend. Bei medizinischer Indikation erhalten Sie über Hausärztin oder HNO eine Verordnung — die Krankenkasse übernimmt dann die Kosten. Ohne Rezept arbeiten wir präventiv oder als Coaching.',
    },
    {
        question: 'Was ist Schauspielarbeit gut für?',
        answer: 'Rollenarbeit, Improvisation und Stückarbeit schulen spontane Reaktion, Körperpräsenz und emotionalen Ausdruck — auch für Auftritte und Beruf wertvoll.',
    },
    {
        question: 'Wie läuft eine erste Sitzung ab?',
        answer: 'Wir klären gemeinsam, worum es Ihnen geht — beruflich, privat oder gesundheitlich. Daraus entsteht ein passender Weg, in den eigenen Sprechrhythmus zu finden.',
    },
]);

const benefits = ref([
    { title: 'Lehrer:innen', subtitle: 'Tragfähige Stimme für lange Schultage' },
    { title: 'Stimmprobleme', subtitle: 'Heiserkeit, Druck oder eingeschränkter Stimmumfang' },
    { title: 'Kinder mit Sprachförderbedarf', subtitle: 'Sprachentwicklung spielerisch begleiten' },
    { title: 'Bühne und Vortrag', subtitle: 'Schauspieler:innen, Sprecher:innen, Vortragende' },
]);
</script>

<style scoped>
.sprechen-container {
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

    .sprechen-container {
        max-width: 100%;
    }
}

.page-hero {
    margin: 1.5rem 0 3.5rem;
}
</style>
