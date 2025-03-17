import { createRouter, createWebHistory } from 'vue-router'
import AtmenView from '@/views/AtmenView.vue'
import KlavierView from '@/views/KlavierView.vue'
import SingenView from '@/views/SingenView.vue'
import SprechenView from '@/views/SprechenView.vue'
import HomeView from '@/views/HomeView.vue'
import TerminView from '@/views/TerminView.vue'

const routes = [
  {
    path: '/',
    redirect: { name: 'home' },
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/atmen',
    name: 'atmen',
    component: AtmenView,
  },
  {
    path: '/klavier',
    name: 'klavier',
    component: KlavierView,
  },
  {
    path: '/singen',
    name: 'singen',
    component: SingenView,
  },
  {
    path: '/sprechen',
    name: 'sprechen',
    component: SprechenView,
  },
  {
    path: '/termin',
    name: 'termin',
    component: TerminView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
