import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "../components/views/Home.vue";
import CollectionDetails from "../components/views/CollectionDetails.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // default path
      name: 'home',
      component: Home
    },
    // {
    //   path: '/collection', // list of consoles
    //   name: 'collection',
    //   component: CollectionList
    // },
    {
      path: "/collection/:id", // console detail
      name: "collection-detail",
      component: CollectionDetails
    }
  ]
})

export default router
