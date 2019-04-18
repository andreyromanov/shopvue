import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Admin from "./views/Admin.vue";
import Overview from "./views/Overview.vue";
import Product from "./views/Product.vue";
import Order from "./views/Order.vue";


Vue.use(Router);

export default new Router({
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
    }
  ]
});