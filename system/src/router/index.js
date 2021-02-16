import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profilmurid",
    name: "ProfilMurid",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/user/ProfilMurid.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/student",
    name: "Student",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/user/Jadwal.vue"),
  },
  {
    path: "/kelas",
    name: "Kelas",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/user/Kelas.vue"),
  },
  {
    path: "/lupapassword",
    name: "LupaPassword",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/LupaPassword.vue"),
  },
  {
    path: "/guru",
    name: "ProfilGuru",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/guru/ProfilGuru.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/jadwalguru",
    name: "JadwalGuru",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/guru/JadwalGuru.vue"),
  },
  {
    path: "/kelasguru",
    name: "KelasGuru",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/guru/KelasGuru.vue"),
  },
  {
    path: "/materi",
    name: "Materi",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/guru/Materi.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/admin/jadwal.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profiladmin",
    name: "ProfilAdmin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/admin/ProfilAdmin.vue"),
  },
  {
    path: "/daftarmurid",
    name: "DaftarMurid",
    component: () =>
      import( /* webpackChunkName: "Murid" */ "../views/admin/Murid.vue"),
  },

  {
    path: "/daftarguru",
    name: "DaftarGuru",
    component: () =>
      import( /* webpackChunkName: "Guru" */ "../views/admin/Guru.vue"),
  },
  {
    path: "/daftarkelas",
    name: "DaftarKelas",
    component: () =>
      import( /* webpackChunkName: "kelas" */ "../views/admin/Kelas.vue"),
  },
  {
    path: "/matapelajaran",
    name: "MataPelajaran",
    component: () =>
      import(
        /* webpackChunkName: "Mata pelajaran" */
        "../views/admin/MataPelajaran.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    const isAuth = localStorage.getItem('token');
    if (!isAuth) {
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router;