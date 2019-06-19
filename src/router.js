import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Admin from "./views/Admin.vue";
import Overview from "./views/Overview.vue";
import Product from "./views/Product.vue";
import Order from "./views/Order.vue";
import Profile from "./views/Profile.vue";
import Checkout from "./views/Checkout.vue";
import {fb} from "./firebase";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      meta: {requiresAuth: true},
      children: [
        {
        path: "overview",
        name: "overview",
        component: Overview
        },
        {
          path: "product",
          name: "product",
          component: Product
          },
          {
            path: "profile",
            name: "profile",
            component: Profile
            },
          {
            path: "order",
            name: "order",
            component: Order
            }
      ]
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout
    }
  ]
});

router.beforeEach((to, from, next) => {
 
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser

  if(requiresAuth && !currentUser){
    next('/')
  } else if (requiresAuth && currentUser){
    next()
  } else {
    next()
  }
});

export default router;