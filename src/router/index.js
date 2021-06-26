import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
    {//creo un nuevo componente a partir de su ruta
      path: '/login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
      meta: {
        public: true
      },
    },
  {
    path: '/reporte',
    name: 'Reporte',
    component: () => import(/* webpackChunkName: "reporte" */ '../views/Reporte.vue')
  },
  {
    path: '/firma',
    name: 'Firma',
    component: () => import(/* webpackChunkName: "firma" */ '../views/Firma.vue')
  },
  {
    path: '/listarequiposgenerarorden',
    name: 'ListarEquiposGenerarOrden',
    component: () => import(/* webpackChunkName: "listarequiposgenerarorden" */ '../views/ListarEquiposGenerarOrden.vue')
  },
  {
    path: '/formulariogenerarorden',
    name: 'FormularioGenerarOrden',
    component: () => import(/* webpackChunkName: "formulariogenerarorden" */ '../views/FormularioGenerarOrden.vue')
  },
  {
    path: '/listarclientes',
    name: 'ListarClientes',
    component: () => import(/* webpackChunkName: "listarclientes" */ '../views/ListarClientes.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
