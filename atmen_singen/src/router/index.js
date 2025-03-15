import { createRouter, createWebHistory } from 'vue-router'
import AtmenView from '@/views/AtmenView.vue'
import KlavierView from '@/views/KlavierView.vue'
import SingenView from '@/views/SingenView.vue'
import SprechenView from '@/views/SprechenView.vue'
import HomeView from '@/views/HomeView.vue'

const routes = [
  { path: '/home', component: HomeView },
  { path: '/atmen', component: AtmenView },
  { path: '/klavier', component: KlavierView },
  { path: '/singen', component: SingenView },
  { path: '/sprechen', component: SprechenView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
