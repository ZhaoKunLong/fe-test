import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/second',
      name: 'second',
      component: () => import('../views/SecondView.vue')
    },
    {
      path: '/third',
      name: 'third',
      component: () => import('../views/ThirdView.vue')
    },
    {
      path: '/four',
      name: 'four',
      component: () => import('../views/FourView.vue')
    }
  ]
})

export default router
