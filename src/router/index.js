import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const login = () => import("../views/login")
const regr=() => import("../views/regr")
const index=() => import("../views/index")
const menu=() => import("../views/menu")
const shopping=() => import("../views/shopping")
const me=() => import("../views/me")
const detail=()=>import("../views/detail")

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path:"/regr",
    name:"regr",
    component:regr
  },
  {
    path:"/index",
    name:"index",
    component:index
  },
  {
    path:"/menu",
    name:"menu",
    component:menu
  },
  {
    path:"/shopping",
    name:"shopping",
    component:shopping
  },
  {
    path:"/me",
    name:"me",
    component:me
  },
  {
    path:"/detail/:id",
    name:"detail",
    component:detail
  },
  {
    path:'*',
    redirect:'/login'
  }
]

const router = new VueRouter({
  routes
})

export default router
