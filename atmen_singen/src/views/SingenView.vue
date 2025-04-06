<template>
    <div class="main-container">
        <h1 class="h1-style text-center mb-8">
            Die Kunst des Gesangs - Entfalten Sie Ihre Stimme
        </h1>
        <v-divider class="my-8">
            <v-icon color="secondary">mdi-music-clef-treble</v-icon>
        </v-divider>
        <div class="content-wrapper">
            <div class="singen-container">
                <v-container>

                    <div class="content-section">
                        <h2 class="h2-style mb-6">
                            Willkommen in der Welt der Stimmentfaltung
                        </h2>
                        <p class="body-text">
                            Entdecken Sie die transformierende Kraft des Gesangs, wo Atem und Emotion zu Klang werden.
                            Entwickeln Sie Ihre Stimme als natürliches Instrument - von der ersten Tonbildung bis zur
                            ausdrucksstarken Interpretation.
                        </p>
                        <div class="content-section image-content-section">
                            <img :src="singenImage" alt="Stimmbildung und Gesangstechnik" class="singen-bild" />
                        </div>
                    </div>

                    <div class="content-section">
                        <h2 class="h2-style mb-6">
                            Häufige Fragen
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
                            Ihr stimmlicher Entwicklungsweg
                        </h2>
                        <v-list lines="two" class="rounded-lg benefit-list">
                            <v-list-item v-for="(benefit, i) in benefits" :key="i" :prepend-icon="benefit.icon">
                                <template v-slot:prepend>
                                    <div class="icon-wrapper">
                                    <v-icon :color="benefit.color">{{ benefit.icon }}</v-icon>
                                    </div>
                                </template>
                                <v-list-item-title class="font-weight-bold list-item-title">{{ benefit.title
                                }}</v-list-item-title>
                                <v-list-item-subtitle class="list-item-subtitle">{{ benefit.subtitle
                                }}</v-list-item-subtitle>
                            </v-list-item>
                        </v-list>
                    </div>

                    <div class="content-section">
                        <h2 class="h2-style mb-6">
                            Einblicke in die Stimmkunst
                        </h2>
                        <div class="video-container">
                            <iframe width="100%" height="360" src="https://www.youtube.com/embed/3i05ngoBnRk"
                                title="Einführung in die Stimmbildung" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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

const faqs = ref([
    {
        question: 'Brauche ich musikalische Vorkenntnisse?',
        answer: 'Ihre Stimme ist das natürlichste Instrument. Wir arbeiten mit Ihren individuellen Voraussetzungen und entwickeln Schritt für Schritt Ihr volles Potenzial.',
        icon: 'mdi-account-voice',
    },
    {
        question: 'Wie verbessert Gesang die Körperwahrnehmung?',
        answer: 'Durch gezielte Atemtechniken und Körperarbeit entwickeln Sie ein neues Bewusstsein für Resonanzräume und natürliche Klangentfaltung.',
        icon: 'mdi-yoga',
    },
    {
        question: 'Kann ich meine Stimme gesund erhalten?',
        answer: 'Wir erarbeiten nachhaltige Stimmtechniken, die Ihre Stimme schonen und gleichzeitig ihre volle Ausdruckskraft entfalten.',
        icon: 'mdi-heart-plus',
    },
]);

const benefits = ref([
    {
        title: 'Atem als Fundament',
        subtitle: 'Entwicklung einer natürlichen Atemstütze für tragfähigen Klang',
        icon: 'mdi-lungs',
        color: 'deep-purple',
    },
    {
        title: 'Körperbewusstsein',
        subtitle: 'Nutzung natürlicher Resonanzräume für voluminösen Klang',
        icon: 'mdi-human-handsup',
        color: 'cyan',
    },
    {
        title: 'Vokalausgleich',
        subtitle: 'Ausgewogene Klangbildung in allen Registerlagen',
        icon: 'mdi-music-note',
        color: 'pink',
    },
    {
        title: 'Emotionaler Ausdruck',
        subtitle: 'Authentische Verbindung von Technik und Interpretation',
        icon: 'mdi-emoticon-happy',
        color: 'amber',
    },
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
    .singen-container {
        max-width: 100%;
    }
}

.singen-bild {
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