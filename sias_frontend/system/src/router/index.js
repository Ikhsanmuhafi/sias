import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/murid',
    name: 'ProfilMurid',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfilMurid.vue')
  },
  {
    path: '/jadwal',
    name: 'Jadwal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Jadwal.vue'),
    meta: {
      requiresAuth:true
    }

  },
  {
    path: '/kelas',
    name: 'Kelas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Kelas.vue')
  },
  {
    path: '/lupapassword',
    name: 'LupaPassword',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LupaPassword.vue')
  },
  {
    path: '/guru',
    name: 'ProfilGuru',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfilGuru.vue')
  },
  {
    path: '/jadwalguru',
    name: 'JadwalGuru',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/JadwalGuru.vue')
  },
  {
    path: '/kelasguru',
    name: 'KelasGuru',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/KelasGuru.vue')
  },
  {
    path: '/materi',
    name: 'Materi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Materi.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => { 
  if (to.matched.some(record => record.meta.requiresAuth)) { 
      // this route requires auth, check if logged in 
      // if not, redirect to login page. 
      const isAuth = localStorage.getItem('token');
      if (!isAuth) { 
          next({ 
              path: '/',
              query: { redirect: to.fullPath } 
          }) 
      } else { 
          next() 
      } 
  } else { 
      next() // make sure to always call next()! 
  } 
}) 

export default router
