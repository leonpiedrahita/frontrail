import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      public: true
    },
  },
  {
    path: '/imprimirhv',
    name: 'ImprimirHv',
    component: () => import(/* webpackChunkName: "imprimirhv" */ '../views/ImprimirHv.vue'),
    meta: {
      public: true
    },
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
    component: () => import(/* webpackChunkName: "segura" */ '../views/Login.vue'),
    meta: {
      public: true
    },
  },
  {//creo un nuevo componente a partir de su ruta
    path: '/segura',
    name: 'Segura',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Segura.vue'),
    meta: {
      auth: true
    },

    children: [
      {
        path: 'reporte',
        name: 'Reporte',
        component: () => import(/* webpackChunkName: "reporte" */ '../views/Reporte.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: 'firma',
        name: 'Firma',
        component: () => import(/* webpackChunkName: "firma" */ '../views/Firma.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: 'listarequipos',
        name: 'ListarEquipos',
        component: () => import(/* webpackChunkName: "listarequipos" */ '../views/ListarEquipos.vue'),
        meta: {
          auth: true
        }
      },

      {
        path: 'formulariogenerarorden',
        name: 'FormularioGenerarOrden',
        component: () => import(/* webpackChunkName: "formulariogenerarorden" */ '../views/FormularioGenerarOrden.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: 'formulariorefequipos',
        name: 'FormularioRefEquipos',
        component: () => import(/* webpackChunkName: "formulariogenerarorden" */ '../views/FormularioRefEquipos.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: 'listarclientes',
        name: 'ListarClientes',
        component: () => import(/* webpackChunkName: "listarclientes" */ '../views/ListarClientes.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: 'pasos',
        name: 'Pasos',
        component: () => import(/* webpackChunkName: "pasos" */ '../views/Pasos.vue'),
        meta: {
          public: true
        },
      },
      {
        path: 'listarordenes',
        name: 'ListarOrdenes',
        component: () => import(/* webpackChunkName: "listarordenes" */ '../views/ListarOrdenes.vue'),
        meta: {
          public: true
        },
      },
      {
        path: 'listarrefequipos',
        name: 'ListarRefEquipos',
        component: () => import(/* webpackChunkName: "listarrefequipos" */ '../views/ListarRefEquipos.vue'),
        meta: {
          public: true
        },
      },
      {
        path: 'refequipos',
        name: 'RefEquipos',
        component: () => import(/* webpackChunkName: "refequipos" */ '../views/RefEquipos.vue'),
        meta: {
          public: true
        },
      },
      {
        path: 'detallesequipo',
        name: 'DetallesEquipo',
        component: () => import(/* webpackChunkName: "detallesequipo" */ '../views/DetallesEquipo.vue'),
        meta: {
          public: true
        },
      },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {//acá se verifica si la ruta a la que estamos accediendo es publica o privada
  if (to.matched.some(record => record.meta.public)) {//si la ruta a la que voy a acceder tiene el meta public
    next();
  } else if (to.matched.some(record => record.meta.private)) {//si la ruta es privada/requiere autenticación
    // if (store.state.user && store.state.user.rol === Admministrador) {//esto e spor si quiero restringín las rutas a los roles
    //   next();
    // }else{

    // }

    if (store.state.user) {//esto e spor si quiero restringín las rutas a los roles
      next();
    } else {
      next({ name: 'Login' })
    }

  } else {
    next()//bien pueda siga
  }

})
export default router
