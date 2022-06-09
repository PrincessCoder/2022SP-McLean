import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Alpaca from '../views/Alpaca.vue'
import Llama from '../views/Llama.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/alpaca',
      name: 'alpaca',
      component: Alpaca
    },
    {
      path: '/llama',
      name: 'llama',
      component: Llama
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
