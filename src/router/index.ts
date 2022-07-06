import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
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
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: () => import('@/components/ToDoList.vue'),
  },
  {
    path: '/shortnote',
    name: 'shortnote',
    component: () => import('@/components/Shortnote.vue'),
  },
  {
    path: '/planner',
    name: 'planner',
    component: () => import('@/components/Planner.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
