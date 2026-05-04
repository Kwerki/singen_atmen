<template>
    <div class="main-container">
        <div class="page-hero fade-in">
            <p class="eyebrow">Salon Musikant Je Wolf</p>
            <h1 class="h1-style text-center">YouTube</h1>
            <div class="text-center mt-4">
                <v-btn
                    class="cta-btn"
                    color="red"
                    href="https://www.youtube.com/@salonmusikantjewolf4177/videos"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <v-icon start>mdi-youtube</v-icon>
                    Zum Kanal
                </v-btn>
            </div>
        </div>

        <v-container class="video-grid-container">
            <v-row>
                <v-col v-for="video in videos" :key="video.id" cols="12" md="6" lg="4">
                    <v-card class="video-card" elevation="2">
                        <div class="video-wrapper">
                            <iframe
                                :src="`https://www.youtube-nocookie.com/embed/${video.id}`"
                                :title="video.title"
                                frameborder="0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                loading="lazy"
                            ></iframe>
                        </div>
                        <v-card-text class="video-meta">
                            <h3 class="h3-style video-title">{{ video.title }}</h3>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'YoutubeView',
    data: () => ({
        videos: [
            { id: 'xKPfpn_rIvU', title: 'Hebräisches Lied — Yavo eleinu' },
            { id: '_tY-cezBKys', title: 'Or Zarua' },
            { id: '0QK-zQwYCvw', title: 'Bühnenreif' },
            { id: '3i05ngoBnRk', title: 'The Lord bless you and keep you' },
            { id: 'G5qktkFhSF4', title: 'Musik für eine gesellige Runde' },
        ],
    }),
}
</script>

<style scoped>
.page-hero {
    margin: 1.5rem 0 3rem;
}

.video-grid-container {
    max-width: 1280px;
}

.video-card {
    border-radius: 16px;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.video-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08) !important;
}

.video-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #000;
}

.video-wrapper iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
}

.video-meta {
    padding: 1rem 1.25rem 1.25rem;
}

.video-title {
    font-size: 1rem;
    line-height: 1.35;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
