<template>

    <v-app>
        <div class="navbar-wrapper">
            <v-app-bar class="navbar" :elevation="0" color="white">

                <v-container class="d-flex justify-center">
                    <div class="d-flex button-group button-container">
                        <v-btn :ripple="false" class="home-btn" icon variant="plain" to="/home">
                            <img src="@/assets/logos/home_button.svg" alt="Home" class="home-logo">
                        </v-btn>
                        <v-btn :ripple="false" variant="plain" to="/atmen"
                            :class="{ 'active-route': $route.path === '/atmen' }">
                            <div class="btn-underline">Atmen</div>
                            <img src="@/assets/logos/navbar_logo_atmen.svg" width="24" height="24">
                        </v-btn>
                        <v-btn :ripple="false" variant="plain" to="/sprechen"
                            :class="{ 'active-route': $route.path === '/sprechen' }">
                            <div class="btn-underline">Sprechen</div>
                            <img src="@/assets/logos/navbar_logo_sprechen.svg" width="24" height="24">
                        </v-btn>
                        <v-btn :ripple="false" variant="plain" to="/singen"
                            :class="{ 'active-route': $route.path === '/singen' }">
                            <div class="btn-underline">Singen</div>
                            <img src="@/assets/logos/navbar_logo_singen.svg" width="24" height="24">
                        </v-btn>
                        <v-btn :ripple="false" variant="plain" to="/klavier"
                            :class="{ 'active-route': $route.path === '/klavier' }">
                            <div class="btn-underline">Klavier</div>
                            <img src="@/assets/logos/navbar_logo_klavier.svg" width="24" height="24">
                        </v-btn>


                        <v-btn :ripple="false" variant="plain">
                            <div class="btn-underline">Kontakt</div>
                            <v-icon :class="{ 'rotate-180': menu }"
                                class="ml-1 transition-all">mdi-chevron-down</v-icon>

                            <v-menu v-model="menu" activator="parent" open-on-click>

                                <v-list >
                                    <v-list-item v-for="(item, index) in items" :key="index" :value="index"
                                        variant="plain" @click="handleMenuItemClick(item)" :ripple="false"
                                        style="cursor: pointer;">
                                        <v-list-item-title>
                                            <div class="btn-underline">{{ item.title }}</div>
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>

                            </v-menu>

                        </v-btn>
                        <!--
                        <v-app-bar-nav-icon variant="plain" :ripple="false"
                            @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                           -->
                    </div>

                </v-container>

            </v-app-bar>
        </div>

        <!--
        <v-navigation-drawer v-model="drawer" location="right">
            <v-list variant="plain">
                <v-list-item v-for="item in items" :key="item.value" :ripple="false" style="cursor: pointer;">
                    <div class="btn-underline">{{ item.title }}</div>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
         -->

    </v-app>


</template>

<script>
export default {
    data: () => ({
        menu: false,
        items: [
            { title: 'Termin' },
            { title: 'Über Mich' },
            { title: 'Youtube' },
        ],
    }),

    methods: {
        handleMenuItemClick(item) {
            this.menu = false
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
</style>