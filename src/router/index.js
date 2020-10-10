import Vue from "vue";
import VueRouter from "vue-router";
import User from "../views/User.vue";
import Settle from "../views/Settle.vue";
import Orders from "../views/Orders.vue";
import Bill from "../views/Bill.vue";
import UserInfo from "../views/UserInfo.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import waiterOrder from "../views/waiterOrder.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/userInfo",
    component: UserInfo,
    children: [
      {
        path: "/userInfo/login",
        component: Login,
      },
      {
        path: "/userInfo/register",
        component: Register,
      },
    ],
  },
  {
    path: "/settle",
    component: Settle,
  },
  {
    path: "/orders",
    component: Orders,
  },
  {
    path: "/bill",
    component: Bill,
  },
  {
    path: "/waiterOrder",
    component : waiterOrder
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },
  {
    path: "/server",
    name: "Server",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Server.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
