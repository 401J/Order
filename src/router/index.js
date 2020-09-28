import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../views/User.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/customer',
    name: 'Customer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
     component: () => import(/* webpackChunkName: "about" */ '../views/Customer.vue')
   
  }
]

const router = new VueRouter({
  routes
})

export default router
