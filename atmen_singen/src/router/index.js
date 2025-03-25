import { createRouter, createWebHistory } from 'vue-router'
import AtmenView from '@/views/AtmenView.vue'
import KlavierView from '@/views/KlavierView.vue'
import SingenView from '@/views/SingenView.vue'
import SprechenView from '@/views/SprechenView.vue'
import HomeView from '@/views/HomeView.vue'
import TerminView from '@/views/TerminView.vue'
import AboutMeView from '@/views/AboutMeView.vue'
import YoutubeView from '@/views/YoutubeView.vue'

const routes = [
  {
    path: '/singen_atmen/',
    redirect: { name: 'home' },
  },
  {
    path: '/singen_atmen/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/singen_atmen/atmen',
    name: 'atmen',
    component: AtmenView,
  },
  {
    path: '/singen_atmen/klavier',
    name: 'klavier',
    component: KlavierView,
  },
  {
    path: '/singen_atmen/singen',
    name: 'singen',
    component: SingenView,
  },
  {
    path: '/singen_atmen/sprechen',
    name: 'sprechen',
    component: SprechenView,
  },
  {
    path: '/singen_atmen/termin',
    name: 'termin',
    component: TerminView,
  },
  {
    path: '/singen_atmen/aboutme',
    name: 'aboutme',
    component: AboutMeView,
  },
  {
    path: '/singen_atmen/youtube',
    name: 'youtube',
    component: YoutubeView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
