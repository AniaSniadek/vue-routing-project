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
    component: () => import('../views/Home.vue')
  },
  {
    path: '/mustang',
    name: 'mustang',
    component: () => import('../views/Mustang.vue')
  },
  {
    path: '/ferrari',
    name: 'ferrari',
    component: () => import('@/views/Ferrari.vue')
  },
  {
    path: '/lamborghini',
    name: 'lamborghini',
    component: () => import('@/views/Lamborghini.vue')
  },
  {
    path: '/porsche',
    name: 'porsche',
    component: () => import('@/views/Porsche.vue')
  },
  {
    path: '/car/:id',
    name: 'car.view',
    component: () => import('@/views/CarView.vue')
  }
]

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
