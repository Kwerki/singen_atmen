<template>
    <div class="navbar-wrapper">
        <v-app-bar class="navbar" :elevation="0" color="white" density="compact">

            <v-btn :ripple="false" class="home-btn" icon variant="plain">
                <img src="@/assets/home_button.svg" alt="Home" class="home-logo">
            </v-btn>


            <v-container class="d-flex justify-center">
                <div class="d-flex button-group">
                    <v-btn :ripple="false" variant="plain">Atmen</v-btn>
                    <v-btn :ripple="false" variant="plain">Sprechen</v-btn>
                    <v-btn :ripple="false" variant="plain">Singen</v-btn>
                    <v-btn :ripple="false" variant="plain">Klavier</v-btn>
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