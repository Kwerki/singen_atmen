<template>
    <div class="main-container about-container">
        <div class="page-hero fade-in">
            <p class="eyebrow">Antje Wolf-Hublitz</p>
            <h1 class="h1-style text-center">Über mich</h1>
        </div>

        <div class="portrait-wrapper mb-8">
            <img :src="portrait" alt="Antje Wolf-Hublitz" class="portrait" />
        </div>

        <div class="about-text">
            <h2 class="h2-style mb-4">Antje Wolf-Hublitz</h2>

            <p class="body-text mb-4">
                Mein Name ist Antje Wolf-Hublitz. Ich liebe es, Veranstaltungen
                zu organisieren, in denen Klavier gespielt, gesungen und erzählt
                wird. Über viele Jahre hinweg habe ich kleine Aufführungen und
                Feste gestaltet, bei denen die Musik in eine szenische
                Darstellung, eine Geschichte oder ein Märchen eingebunden war.
            </p>

            <p class="body-text mb-4">
                Klavierspielen ist meine Leidenschaft. Zehn Jahre lang habe ich
                an verschiedenen Standorten selbst Unterricht genommen. Seit 2005
                unterrichte ich Kinder und Erwachsene im Klavierspiel.
            </p>

            <p class="body-text mb-4">
                Hinzu kamen Ausbildungen in Schauspiel und Gesang — beides
                Bereiche, denen meine große Liebe gilt.
            </p>

            <p class="body-text mb-4">
                Im Rahmen zahlreicher Bühnenauftritte zu privaten und
                öffentlichen Anlässen habe ich mir zudem das Spielen auf dem
                Keyboard angeeignet. Außerdem beherrsche ich das folkloristische
                Akkordeon — eine besonders stimmungsvolle Variante des
                Tastenspiels.
            </p>

            <p class="body-text">
                Die Ausbildung zur staatlich geprüften Atem-, Sprech- und
                Stimmlehrerin versetzt mich in die glückliche Lage, Stimmarbeit
                auf ganzheitlicher Basis anbieten zu können.
            </p>
        </div>
    </div>
</template>

<script setup>
import portraitImg from '@/assets/home_logos/aboutme.jpg';

const portrait = portraitImg;
</script>

<style scoped>
.about-container {
    max-width: 900px;
}

.page-hero {
    margin: 1.5rem 0 3rem;
}

.portrait-wrapper {
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
    background: #000;
    max-height: 480px;
}

.portrait {
    display: block;
    width: 100%;
    height: 100%;
    max-height: 480px;
    object-fit: cover;
    object-position: center;
}

.about-text {
    max-width: 760px;
    margin: 0 auto;
}

.body-text {
    text-align: justify;
}

@media (max-width: 599px) {
    .body-text {
        text-align: left;
    }

    .portrait-wrapper {
        max-height: 320px;
    }

    .portrait {
        max-height: 320px;
    }
}
</style>
