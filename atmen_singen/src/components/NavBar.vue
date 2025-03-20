<template>

    <v-app>
        <v-app-bar :elevation="0" color="white">
            <v-container class="d-flex justify-center">


                <div class="d-none d-md-flex button-group button-container">
                    <v-btn :ripple="false" icon variant="plain" to="/home">
                        <img src="@/assets/logos/home_button.svg" alt="Home" class="home-logo">
                    </v-btn>


                    <v-btn v-for="(item, index) in navItems" :key="index" :ripple="false" variant="plain"
                        :to="item.route" :class="{ 'active-route': $route.path === item.route }">
                        <div class="btn-underline">{{ item.title }}</div>
                        <img :src="item.icon" width="24" height="24">
                    </v-btn>


                    <v-btn :ripple="false" variant="plain">
                        <div class="btn-underline">Kontakt</div>
                        <v-icon :class="{ 'rotate-180': menu }" class="ml-1 transition-all">mdi-chevron-down</v-icon>
                        <v-menu v-model="menu" activator="parent" open-on-click>
                            <v-list>
                                <v-list-item v-for="(item, index) in items" :key="index" :value="index" variant="plain"
                                    @click="handleMenuItemClick(item)" :ripple="false" style="cursor: pointer;">
                                    <v-list-item-title class="icons-spacing-dropdown-menu-desktop">
                                        <div class="btn-underline">{{ item.title }}</div>
                                        <v-icon class="ml-2">{{ item.icon }}</v-icon>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-btn>
                </div>

                <v-btn :ripple="false" class=" d-md-none" icon variant="plain" to="/home">
                    <img :src="homeButtonLogo" alt="Home" class="home-logo-mobile">
                </v-btn>
                <v-spacer class="d-md-none"></v-spacer>
                <v-app-bar-nav-icon class="d-md-none" :ripple="false" @click.stop="drawer = !drawer">
                    <v-icon :class="{ 'active': drawer }">
                        {{ drawer ? 'mdi-close' : 'mdi-menu' }}
                    </v-icon>
                </v-app-bar-nav-icon>

            </v-container>
        </v-app-bar>


        <!-- Mobile Navigation Drawer -->
        <v-navigation-drawer v-model="drawer" location="right" temporary class="fullscreen-drawer" :style="drawerStyle">
            <v-list variant="plain">
                <v-list-item to="/home" class="d-md-none" :class="{ 'active-route': $route.path === '/home' }">
                    <v-list-item-title class="icons-spacing-dropdown-menu">
                        <div class="btn-underline v-list-item-mobile">Home</div>
                        <v-icon class="ml-2">mdi-home</v-icon>
                    </v-list-item-title>
                </v-list-item>


                <!-- Main Navigation Items -->
                <v-list-item v-for="(item, index) in navItems" :key="index" :to="item.route"
                    :class="{ 'active-route': $route.path === item.route }">
                    <v-list-item-title class="icons-spacing-dropdown-menu">
                        <div class="btn-underline v-list-item-mobile ">{{ item.title }}</div>
                        <v-icon class="ml-2"><img :src="item.icon" width="22" height="22"></v-icon>
                    </v-list-item-title>
                </v-list-item>

                <v-list-item v-for="(item, index) in items" :key="'kontakt-' + index" @click="handleMenuItemClick(item)"
                    style="cursor: pointer;"  :class="{ 'active-route': $route.path === item.route }" :to="item.route">
                    <v-list-item-title class="icons-spacing-dropdown-menu">
                        <div class="btn-underline v-list-item-mobile">{{ item.title }}</div>
                        <v-icon class="ml-2">{{ item.icon }}</v-icon>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-app>


</template>

<script>
import { useDisplay } from 'vuetify'
import { useRoute } from 'vue-router';
import atmenIcon from '@/assets/logos/navbar_logo_atmen.svg';
import sprechenIcon from '@/assets/logos/navbar_logo_sprechen.svg';
import singenIcon from '@/assets/logos/navbar_logo_singen.svg';
import klavierIcon from '@/assets/logos/navbar_logo_klavier.svg';

import defaultHome from '@/assets/logos/home_button_mobile.svg';
import buttonAtmen from '@/assets/logos/button_atmen.svg';
import buttonSprechen from '@/assets/logos/button_sprechen.svg';
import buttonSingen from '@/assets/logos/button_singen.svg';
import buttonKlavier from '@/assets/logos/button_klavier.svg';

export default {
    setup() {
        const display = useDisplay()
        const route = useRoute();
        return { display, route }
    },

    computed: {
        homeButtonLogo() {
            const route = this.$route.path;
            if (route === '/atmen') return buttonAtmen;
            if (route === '/sprechen') return buttonSprechen;
            if (route === '/singen') return buttonSingen;
            if (route === '/klavier') return buttonKlavier;
            return defaultHome;
        }
    },

    mounted() {
        window.addEventListener('resize', this.handleResize)
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize)
    },

    data: () => ({
        drawer: false,
        drawerStyle: {
            transform: 'translateX(100%)',
            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
        },
        menu: false,
        items: [
            {
                title: 'Termin',
                icon: 'mdi-calendar',
                route: '/termin'
            },
            {
                title: 'Über Mich',
                icon: 'mdi-account',
                route: '/aboutme'
            },
            {
                title: 'Youtube',
                icon: 'mdi-youtube',
                route: '/youtube'
            },
        ],
        navItems: [
            {
                title: 'Atmen',
                route: '/atmen',
                icon: atmenIcon
            },
            {
                title: 'Sprechen',
                route: '/sprechen',
                icon: sprechenIcon
            },
            {
                title: 'Singen',
                route: '/singen',
                icon: singenIcon
            },
            {
                title: 'Klavier',
                route: '/klavier',
                icon: klavierIcon
            },
        ]
    }),
    watch: {
        drawer(newVal) {
            this.drawerStyle.transform = newVal
                ? 'translateX(0)'
                : 'translateX(100%)';
        }
    },
    methods: {
        handleMenuItemClick(item) {
            this.$router.push(item.route)
            this.menu = false;
            this.drawer = false;
        },
        handleResize() {
            if (this.display.mdAndUp && this.drawer) {
                this.drawer = false
            }
        }
    }
}
</script>


<style scoped>
.icons-spacing-dropdown-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 15px;
}

.icons-spacing-dropdown-menu-desktop {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.v-app-bar {
    position: relative;
}

.v-app-bar::after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #787272;
    display: none;
}

@media (max-width: 959px) {
    .v-app-bar::after {
        display: block;
    }
}

.button-container {
    position: relative;
    height: 100%;

}

.button-container::after {
    content: '';
    position: absolute;
    bottom: -7px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #787272;
}

.rotate-180 {
    transform: rotate(180deg);
}

.transition-all {
    transition: all 0.3s ease-in-out;
}


.home-logo {
    width: 55px;
    height: 55px;
}

.home-logo-mobile {
    width: 60px;
    height: 60px;
}

.button-group {
    gap: 6vw;
    justify-content: center;
    align-items: center;
}

.v-list-item {
    position: relative;
}

.active-route .btn-underline {
    font-weight: 600;
}

.v-icon {
    transition: transform 0.3s ease-in-out;
}

.v-icon.active {
    transform: rotate(180deg);
}

.fullscreen-drawer {
    width: 100% !important;
    height: 100vh;
    transform: translateX(100%);
}

.v-navigation-drawer--active {
    transform: translateX(0) !important;
}
</style>