import { createRouter, createWebHistory } from 'vue-router'
import ShowPage from '@/pages/ShowPage.vue'
import YearsPage from '@/pages/YearsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/years/:year?',
      component: YearsPage,
      name: 'yearsPage',
    },
    {
      path: '/shows/:year/:slug',
      component: ShowPage,
      name: 'showPage',
    }
  ],
})

export default router
