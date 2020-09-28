import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../views/User.vue'
import Settle from '../views/Settle.vue'
import Orders from '../views/Orders.vue'
import Bill from '../views/Bill.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/settle',
    component: Settle
  },
  {
    path: '/orders',
    component: Orders
  },
  {
    path: '/bill',
    component: Bill
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/server',
    name: 'Server',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
     component: () => import(/* webpackChunkName: "about" */ '../views/Server.vue')
   
  }
]

const router = new VueRouter({
  routes
})

export default router
