import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '',    name: 'Main', component: () => import('../views/Main.vue') },
    { path: '/',    name: 'Main', component: () => import('../views/Main.vue') },
    { path: '/about', name: 'about',  component: () => import('../views/AboutView.vue')}
  ]
})



export default router
