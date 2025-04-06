<template>
    <div class="main-container">
        <h1 class="h1-style text-center mb-8">
            Sprachkunst meistern - Ihr Weg zur authentischen Kommunikation
        </h1>
        <v-divider class="my-8">
            <v-icon color="secondary">mdi-account-voice</v-icon>
        </v-divider>
        <div class="content-wrapper">
            <div class="sprechen-container">
                <v-container>

                    <div class="content-section">
                        <h2 class="h2-style mb-6">
                            Willkommen in der Welt der Sprache
                        </h2>
                        <p class="body-text">
                            Entdecken Sie die Kraft klarer Kommunikation, wo Atemtechnik und Ausdruck zu überzeugender
                            Präsenz werden.
                            Entwickeln Sie Ihre rhetorischen Fähigkeiten - von der bewussten Artikulation bis zur
                            professionellen Vortragstechnik.
                        </p>
                        <div class="content-section image-content-section">
                            <img :src="sprechenImage" alt="Professionelle Sprechtherapie" class="sprechen-bild" />
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
                            Ihr Weg zur verbalen Meisterschaft
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
                            Einblicke in die Sprechkunst
                        </h2>
                        <div class="video-container">
                            <iframe width="100%" height="360" src="https://www.youtube.com/embed/0QK-zQwYCvw?start=204"
                                title="Professionelle Sprechtechnik" frameborder="0"
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
import sprechenImage from '@/assets/home_logos/sprechen.jpg';

const faqs = ref([
    {
        question: 'Benötige ich ein ärztliches Rezept?',
        answer: 'Bei medizinischer Indikation erstellen wir gemeinsam mit Ihrem Arzt einen Therapieplan. In anderen Fällen arbeiten wir präventiv an Ihrer Sprachkompetenz.',
        icon: 'mdi-file-document-multiple',
    },
    {
        question: 'Kann ich meine Kommunikationsfähigkeit verbessern?',
        answer: 'Durch gezieltes Sprechtraining und Körperarbeit entwickeln Sie ein neues Bewusstsein für authentischen Ausdruck und rhetorische Präsenz.',
        icon: 'mdi-account-convert',
    },
    {
        question: 'Wie hilft Theaterspiel bei der Sprachförderung?',
        answer: 'Rollenspiele und Improvisationstechniken schulen spontane Reaktionsfähigkeit und emotionalen Ausdruck gleichermaßen.',
        icon: 'mdi-drama-masks',
    },
]);

const benefits = ref([
    {
        title: 'Resonanztechniken',
        subtitle: 'Entwicklung tragender Stimme für überzeugende Präsenz',
        icon: 'mdi-microphone-variant',
        color: 'deep-purple',
    },
    {
        title: 'Körpergebundene Sprache',
        subtitle: 'Nutzung natürlicher Gestik zur Unterstützung des Gesagten',
        icon: 'mdi-human-handsdown',
        color: 'teal',
    },
    {
        title: 'Interaktives Training',
        subtitle: 'Praxissimulationen für Alltags- und Berufssituationen',
        icon: 'mdi-forum',
        color: 'blue',
    },
    {
        title: 'Emotionsmanagement',
        subtitle: 'Techniken zur Kontrolle von Lampenfieber und Stress',
        icon: 'mdi-emoticon-cool',
        color: 'green',
    },
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

.sprechen-bild {
    width: 100%;
    max-width: 750px;
    height: auto;
    border-radius: 12px;
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