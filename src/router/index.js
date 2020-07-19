import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login"
import Home from "../views/Home"
Vue.use(VueRouter)

const routes = [
  {
  path:"/",
  redirect:"/login"
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  }
  // {

  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ )
  // }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.path === "/login") return next();
  let token = sessionStorage.getItem("token");
  token ? next() : next("/login");
})
export default router