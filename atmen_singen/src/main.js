import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import '@/assets/main.css'

const vuetify = createVuetify()

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.mount('#app')
