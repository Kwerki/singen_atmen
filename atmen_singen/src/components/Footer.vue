<template>
    <v-footer class="footer">
        <v-container >
            <v-row class="align-center  justify-space-between">
                <v-col cols="12" md="4" class="d-flex align-center mobile-center">
                    <div class="footer-content font-inter-regular">
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
                <v-spacer></v-spacer>
                <v-col cols="12" md="4" class="d-flex align-end justify-end mobile-center">
                    <div class="footer-content font-inter-regular text-center">
                    © 2025 AtemWelt Praxis<br>
                    Alle Rechte vorbehalten
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<style scoped>
.footer {
    margin-top: 200px;
    background: #f8f9fa;
    border-top: 1px solid #e0e0e0;
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
  .mobile-center {
    justify-content: center !important;
    text-align: center !important;
    flex-direction: column !important;
  }
  .text-center {
    width: 100%;
  }
}
</style>