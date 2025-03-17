<template>

    <v-app>
        <div class="navbar-wrapper">
            <v-app-bar class="navbar" :elevation="0" color="white">

                <v-btn :ripple="false" class="home-btn" icon variant="plain" to="/home">
                    <img src="@/assets/logos/home_button.svg" alt="Home" class="home-logo">
                </v-btn>

                <v-spacer></v-spacer>

                <v-container class="d-flex justify-center">
                    <div class="d-flex button-group">
                        <v-btn :ripple="false" variant="plain" to="/atmen"
                            :class="{ 'active-route': $route.path === '/atmen' }">
                            <img src="@/assets/logos/navbar_logo_atmen.svg" width="24" height="24">
                            <div class="btn-underline">Atmen</div>
                        </v-btn>
                        <v-btn :ripple="false" variant="plain" to="/sprechen"
                            :class="{ 'active-route': $route.path === '/sprechen' }">
                            <img src="@/assets/logos/navbar_logo_sprechen.svg" width="24" height="24">
                            <div class="btn-underline">Sprechen</div>
                        </v-btn>
                        <v-btn :ripple="false" variant="plain" to="/singen"
                            :class="{ 'active-route': $route.path === '/singen' }">
                            <img src="@/assets/logos/navbar_logo_singen.svg" width="24" height="24">
                            <div class="btn-underline">Singen</div>
                        </v-btn>
                        <v-btn :ripple="false" variant="plain" to="/klavier"
                            :class="{ 'active-route': $route.path === '/klavier' }">
                            <img src="@/assets/logos/navbar_logo_klavier.svg" width="24" height="24">
                            <div class="btn-underline">Klavier</div>
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
                    <div class="btn-underline">{{ item.title }}</div>
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
.home-logo {
    width: 60px;
    height: 60px;
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
</style>