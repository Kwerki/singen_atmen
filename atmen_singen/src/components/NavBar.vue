<template>
    <div class="navbar-wrapper">
        <v-app-bar class="navbar" :elevation="0" color="white" density="compact">

            <v-btn :ripple="false" class="home-btn" icon variant="plain" to="/home">
                <img src="@/assets/home_button.svg" alt="Home" class="home-logo">
            </v-btn>


            <v-container class="d-flex justify-center">
                <div class="d-flex button-group">
                    <v-btn :ripple="false" variant="plain" to="/atmen">
                        <img src="@/assets/navbar_logo_atmen.svg" width="24" height="24">
                        Atmen
                    </v-btn>
                    <v-btn :ripple="false" variant="plain" to="/sprechen">
                        <img src="@/assets/navbar_logo_sprechen.svg" width="24" height="24">
                        Sprechen
                    </v-btn>
                    <v-btn :ripple="false" variant="plain" to="/singen">
                        <img src="@/assets/navbar_logo_singen.svg" width="24" height="24">
                        Singen
                    </v-btn>
                    <v-btn :ripple="false" variant="plain" to="/klavier">
                        <img src="@/assets/navbar_logo_klavier.svg" width="24" height="24">Klavier
                    </v-btn>
                </div>
            </v-container>
        </v-app-bar>
    </div>
</template>

<script setup>

</script>

<style scoped>
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
    gap: 8vw;
}
</style>