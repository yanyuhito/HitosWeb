import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/my_family',
    name: 'my_family',
    component: () => import(/* webpackChunkName: "about" */ '../views/my_familyView.vue'),
  },
  {
    path:'/daily',
    name:'daily',
    component:() => import(/* webpackChunkName: "about" */'../views/DailyView.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
