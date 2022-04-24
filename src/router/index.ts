import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalized,
  type Router,
  type RouteRecordRaw
} from 'vue-router'
import carsData from '@/assets/data.json'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/protected',
    name: 'protected',
    component: () => import('@/views/Protected.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/car/:id/:name',
    name: 'car.view',
    component: () => import('@/views/CarView.vue'),
    beforeEnter(to: RouteLocationNormalized): { name: string } | undefined {
      const exist = carsData.cars.find(
        (car) => car.id === parseInt(to.params.id.toString())
      )

      if (!exist) return { name: 'notFound' }
    },
    children: [
      {
        path: ':model',
        name: 'model.view',
        component: () => import('@/views/ModelView.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/NotFound.vue')
  }
]

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(
  (to: RouteLocationNormalized): { name: string } | undefined => {
    if (to.meta.requiresAuth && !sessionStorage.getItem('user')) {
      return { name: 'login' }
    }
  }
)

export default router
