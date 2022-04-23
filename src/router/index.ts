import {
  createRouter,
  createWebHistory,
  type Router,
  type RouteRecordRaw
} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/car/:id/:name',
    name: 'car.view',
    component: () => import('@/views/CarView.vue')
  }
]

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
