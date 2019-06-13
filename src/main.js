import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
import 'popper.js';
import './assets/app.scss'

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
import Vue2Filters from 'vue2-filters'
Vue.use(Vue2Filters)

Vue.use(VueFirestore, {
  key: 'id',
  enumerable: true
});

import Swal from 'sweetalert2'
window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});
window.Toast = Toast;


import {fb} from './firebase';
import VueFirestore from 'vue-firestore'

Vue.use(VueFirestore);

Vue.config.productionTip = false;

Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.component('products-list', require('./sections/ProductList.vue').default);

let app = '';

fb.auth().onAuthStateChanged(function(user){

  if(!app){
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
   }

});
