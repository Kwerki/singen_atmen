<template>
    <div>
        <v-footer class="main-footer">
            <v-container>
                <v-row class="align-center  justify-space-between">
                    <v-col cols="12" md="4" class="d-flex align-center mobile-center">
                        <div class="font-inter-regular">
                            <a href="https://g.co/kgs/DVwrE6R" target="_blank"
                                class="text-decoration-none d-flex align-center">
                                <div class="footer-link-underline h2-style">AtemWelt Praxis</div>
                            </a>
                            <div>Schwenken Weg 6</div>
                            <div>34576 Homberg Efze</div>
                        </div>
                        <v-btn icon href="https://g.co/kgs/DVwrE6R" target="_blank" class="ml-2">
                            <v-icon large color="primary">mdi-google-maps</v-icon>
                        </v-btn>
                    </v-col>

                    <v-col cols="12" md="4" class="d-flex justify-center order-first order-md-0">
                        <img src="@/assets/logos/home_button.svg" alt="Logo" style="width: 100px; height: 100px" />
                    </v-col>

                    <v-col cols="12" md="4" class="d-flex justify-end mobile-center">
                        <div class="font-inter-regular text-center">
                            © 2025 AtemWelt Praxis<br>
                            Alle Rechte vorbehalten
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-footer>

        <v-footer class="black-box">
            <v-container>
                <v-row class="align-center justify-center">
                    <v-col cols="auto">
                        <v-btn variant="plain" :ripple="false" class="text-white mx-2">
                            <div class="btn-underline">Impressum</div>
                        </v-btn>
                        <v-btn variant="plain" :ripple="false" class="text-white mx-2">
                            <div class="btn-underline">Datenschutz</div>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-footer>
    </div>
</template>

<script setup>
</script>

<style scoped>
.main-footer {
    margin-top: 200px;
    background: #F2D394;
    border-top: 1px solid #787272;
    min-height: 150px !important;
}

.black-box {
    background-color: #000;
}

.v-btn.text-white {
    color: white !important;
    font-size: 0.9rem;
}




.footer-link-underline {
    position: relative;
    display: inline-block;
    padding-bottom: 2px;
}

.footer-link-underline::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: currentColor;
    transition: width 0.3s ease;
}

a:hover .footer-link-underline::after {
    width: 100%;
}

a {
    color: inherit !important;
    transition: opacity 0.3s;
}

@media (max-width: 959px) {

    .main-footer {
        min-height: 400px;
        height: auto;
    }

    .v-row {
        flex-direction: column;
    }

    .v-col {
        width: 100%;
        justify-content: center !important;
        text-align: center !important;
        margin-bottom: 20px;
    }

    .v-img {
        position: relative;
        z-index: 11;
    }

    .mobile-center {
        flex-direction: column;
        align-items: center;
    }

    .justify-end {
        justify-content: center !important;
    }
}
</style>