<template>

    <v-app>
        <div class="navbar-wrapper">
            <v-app-bar class="navbar" :elevation="0" color="white">

                <v-btn :ripple="false" class="home-btn" icon variant="plain" to="/home">
                    <img src="@/assets/home_button.svg" alt="Home" class="home-logo">
                </v-btn>

                <v-spacer></v-spacer>

                <v-container class="d-flex justify-center">
                    <div class="d-flex button-group">
                        <v-btn :ripple="false" variant="plain" to="/atmen"
                            :class="{ 'active-route': $route.path === '/atmen' }">
                            <img src="@/assets/navbar_logo_atmen.svg" width="24" height="24">
                            <div class="btn-text">Atmen</div>
                        </v-btn>
                        <v-btn :ripple="false" variant="plain" to="/sprechen"
                            :class="{ 'active-route': $route.path === '/sprechen' }">
                            <img src="@/assets/navbar_logo_sprechen.svg" width="24" height="24">
                            <div class="btn-text">Sprechen</div>
                        </v-btn>
                        <v-btn :ripple="false" variant="plain" to="/singen"
                            :class="{ 'active-route': $route.path === '/singen' }">
                            <img src="@/assets/navbar_logo_singen.svg" width="24" height="24">
                            <div class="btn-text">Singen</div>
                        </v-btn>
                        <v-btn :ripple="false" variant="plain" to="/klavier"
                            :class="{ 'active-route': $route.path === '/klavier' }">
                            <img src="@/assets/navbar_logo_klavier.svg" width="24" height="24">
                            <div class="btn-text">Klavier</div>
                        </v-btn>
                    </div>
                </v-container>

                <v-spacer></v-spacer>

                <v-app-bar-nav-icon variant="plain" :ripple="false" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            </v-app-bar>
        </div>
        <v-navigation-drawer v-model="drawer" location="right">
            <v-list variant="plain">
                <v-list-item v-for="item in items" :key="item.value" :ripple="false" style="cursor: pointer;">
                    <div class="btn-text">{{ item.title }}</div>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-app>


</template>

<script>
export default {
    data: () => ({
        drawer: false,
        group: null,
        items: [
            {
                title: 'Über Mich',
                value: 'foo',
            },
            {
                title: 'Termine & Kontakt',
                value: 'bar',
            },
            {
                title: 'Youtube',
                value: 'fizz',
            },
        ],
    }),

    watch: {
        group() {
            this.drawer = false
        },
    },
}
</script>

<style scoped>
@font-face {
    font-family: 'Delius Swash Caps';
    src: url('@/fonts/deliusswashcaps.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}

.custom-font {
    font-family: 'Delius Swash Caps';
}

.home-logo {
    width: 55px;
    height: 55px;
}

.navbar-wrapper {
    width: 80%;
    margin: 0 auto;
    position: relative;
}

.navbar {
    border-bottom: 1px solid #787272;
    width: 100% !important;
    position: static !important;
}

.home-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.button-group {
    gap: 6vw;
}

/* Unterstrich Hover-Effekt */
.btn-text {
    position: relative;
    padding-bottom: 2px;
    overflow: hidden;
}

.btn-text::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    transition: left 0.3s ease-in-out;
}


.v-btn:hover .btn-text::after,
.v-list-item:hover .btn-text::after {
    left: 0;
}

/* Unterstrich für aktive Route */
.v-btn.active-route .btn-text::after {
    left: 0 !important;
}

.v-list-item {
    position: relative;
    /* Damit der Hover-Bereich korrekt ist */
    padding: 12px 16px;
    /* Angemessener Klickbereich */
}

/* Optional: Hover-Überlappung vermeiden
.v-btn.active-route:hover .btn-text::after {
    left: 0 !important;
} */
</style>