import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/Home.vue'
import about from '../views/About.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ]
})

export default router
