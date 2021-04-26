import Vue from 'vue'
import VueRouter from 'vue-router'
import { store } from '../store'
import Home from '../views/Home.vue'
import config from '@/config/config.js'

Vue.use(VueRouter)

const routes = [
  {
    path: config.BASE_VIEW_URL + '/index',
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
    path: config.BASE_VIEW_URL + '/act-new',
    name: 'act-new',
    meta: {layout: 'main', requiresAuth: true},
    component: () => import('@/views/act/ActNew.vue')
  },
  
  {
    path: config.BASE_VIEW_URL + '/act-edit/:id',
    name: 'act-edit',
    meta: {layout: 'main', requiresAuth: true},
    props: true,
    component: () => import('@/views/act/ActEdit.vue')
  },

  {
    path: config.BASE_VIEW_URL + '/dashboard',
    name: 'act-dashboard',
    meta: {layout: 'main'},
    component: () => import('@/views/act/Dashboard.vue')
  },
  {
    path: config.BASE_VIEW_URL + '/printact/:id',
    name: 'printact',
    meta: {layout: 'print'},
    props: true,
    component: () => import('@/views/act/Print.vue')
  },

  {
    path: config.BASE_VIEW_URL + '/instruct',
    name: 'worker-instruct',
    meta: {layout: 'main'},
    component: () => import('@/views/worker/Instruct.vue')
  },

  {
    path: config.BASE_VIEW_URL + '/worker-approved',
    name: 'worker-approved',
    meta: {layout: 'main'},
    component: () => import('@/views/worker/Approved.vue')
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
