import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DiaryView from '@/views/DiaryView.vue'
import { authGuard } from './auth-guard'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: DiaryView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/Login.vue'),
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/components/Main.vue'),
    beforeEnter: (to, from, next) => authGuard(to, from, next),
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: () => import('@/components/ToDoList.vue'),
    beforeEnter: (to, from, next) => authGuard(to, from, next),
  },
  {
    path: '/shortnote',
    name: 'shortnote',
    component: () => import('@/components/Shortnote.vue'),
    beforeEnter: (to, from, next) => authGuard(to, from, next),
  },
  {
    path: '/planner',
    name: 'planner',
    component: () => import('@/components/Planner.vue'),
    beforeEnter: (to, from, next) => authGuard(to, from, next),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
