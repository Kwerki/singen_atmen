<template>

    <v-app>
        <v-app-bar :elevation="0" color="white">
            <v-container class="d-flex justify-center">


                <div class="d-none d-md-flex button-group button-container">
                    <v-btn :ripple="false" class="home-btn" icon variant="plain" to="/home">
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
                                    <v-list-item-title>
                                        <div class="btn-underline">{{ item.title }}</div>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-btn>
                </div>

                <v-btn :ripple="false" class="home-btn d-md-none" icon variant="plain" to="/home">
                    <img src="@/assets/logos/home_button.svg" alt="Home" class="home-logo">
                </v-btn>
                <v-divider class="d-md-none"></v-divider>
                <v-app-bar-nav-icon class="d-md-none" :ripple="false" @click.stop="drawer = !drawer" />

            </v-container>
        </v-app-bar>


        <!-- Mobile Navigation Drawer -->
        <v-navigation-drawer v-model="drawer" location="right">
            <v-list variant="plain">
                <!-- Main Navigation Items -->
                <v-list-item v-for="(item, index) in navItems" :key="index" :to="item.route"
                    :class="{ 'active-route': $route.path === item.route }">
                    <div class="btn-underline">{{ item.title }}</div>
                    <img :src="item.icon" width="18" height="18" class="ml-2">
                </v-list-item>

                <!-- Contact Sub-items -->
                <v-list-item v-for="(item, index) in items" :key="'kontakt-' + index"
                    @click="handleMenuItemClick(item)">
                    <div class="btn-underline">{{ item.title }}</div>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-app>


</template>

<script>
import { useDisplay} from 'vuetify'
import atmenIcon from '@/assets/logos/navbar_logo_atmen.svg';
import sprechenIcon from '@/assets/logos/navbar_logo_sprechen.svg';
import singenIcon from '@/assets/logos/navbar_logo_singen.svg';
import klavierIcon from '@/assets/logos/navbar_logo_klavier.svg';


export default {
    setup() {
        const display = useDisplay()
        return { display }
    },
    
    mounted() {
        window.addEventListener('resize', this.handleResize)
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize)
    },

    data: () => ({
        drawer: false,
        menu: false,
        items: [
            { title: 'Termin' },
            { title: 'Über Mich' },
            { title: 'Youtube' },
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
            }
        ]
    }),
    methods: {
        handleMenuItemClick(item) {
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

.button-group {
    gap: 6vw;
    justify-content: center;
    align-items: center;
}

.v-list-item {
    min-height: 48px;
    display: flex;
    align-items: center;
    padding: 0 24px;
}

.active-route .btn-underline {
    font-weight: 600;
}
</style>