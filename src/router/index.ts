import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import DiaryView from '@/views/DiaryView.vue'
import { authGuard } from './auth-guard'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: DiaryView,
    beforeEnter: (to, from, next) => authGuard(to, from, next),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/components/Signup.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/Login.vue'),
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/DiaryView.vue'),
    beforeEnter: (to, from, next) => authGuard(to, from, next),
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: () => import('@/views/ToDoListView.vue'),
    beforeEnter: (to, from, next) => authGuard(to, from, next),
  },
  {
    path: '/shortnote',
    name: 'shortnote',
    component: () => import('@/views/ShortnoteView.vue'),
    beforeEnter: (to, from, next) => authGuard(to, from, next),
  },
  {
    path: '/planner',
    name: 'planner',
    component: () => import('@/views/PlannerView.vue'),
    beforeEnter: (to, from, next) => authGuard(to, from, next),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
