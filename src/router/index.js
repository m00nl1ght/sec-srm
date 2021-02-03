import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    meta: {layout: 'main'},
    component: Home
  },

  {
    path: '/login',
    name: 'login',
    meta: {layout: 'print'},
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    meta: {layout: 'empty'},
    component: () => import('@/views/Logout.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {layout: 'empty'},
    component: () => import('@/views/Register.vue')
  },

  {
    path: '/main',
    name: 'main',
    meta: {layout: 'main'},
    component: () => import('@/views/Main.vue')
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {layout: 'main'},
    component: () => import('@/views/Dashboard.vue')
  },
  {
    path: '/printact/:id',
    name: 'printact',
    meta: {layout: 'print'},
    props: true,
    component: () => import('@/views/Print.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
