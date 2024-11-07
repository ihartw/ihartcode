import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PokemonView from '../views/Pokemon/PokemonView.vue'
import Planetarium from '../views/Planetarium/Planetarium.vue'
import HungryHippo from '../views/HungryHippo/HungryHippo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pokemon',
      name: 'pokemon',
      component: PokemonView
    },
    {
      path: '/planetarium',
      name: 'planetarium',
      component: Planetarium
    },
    {
      path: '/hungryhippo',
      name: 'hungryhippo',
      component: HungryHippo
    },
  ]
})

export default router