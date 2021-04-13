import Vue from 'vue'
import VueRouter from 'vue-router'
import { store } from '../store'
import Home from '../views/Home.vue'
import config from '@/config/config.js'

Vue.use(VueRouter)

const routes = [
  {
    path: config.BASE_VIEW_URL,
    name: 'home',
    meta: {layout: 'main'},
    component: Home
  },

  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
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
    path: config.BASE_VIEW_URL + '/main',
    name: 'main',
    meta: {layout: 'main', requiresAuth: true},
    component: () => import('@/views/Main.vue')
  },

  {
    path: config.BASE_VIEW_URL + '/dashboard',
    name: 'dashboard',
    meta: {layout: 'main'},
    component: () => import('@/views/Dashboard.vue')
  },
  {
    path: config.BASE_VIEW_URL + '/printact/:id',
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

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(store.getters['user/isLoggedIn']){
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
