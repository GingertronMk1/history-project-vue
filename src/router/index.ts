import { createRouter, createWebHistory } from 'vue-router'
import ShowPage from '@/pages/ShowPage.vue'
import SingleYearPage from '@/pages/SingleYearPage.vue'
import AllYearsPage from '@/pages/AllYearsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/years',
      component: AllYearsPage,
      name: 'allYearsPage',
    },
    {
      path: '/years/:year',
      component: SingleYearPage,
      name: 'singleYearPage',
    },
    {
      path: '/shows/:year/:slug',
      component: ShowPage,
      name: 'showPage',
    },
  ],
})

export default router
