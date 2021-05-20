import Vue from "vue";
import App from "./App.vue";

import store from "./config/store";
import router from "./config/router";
//import Vuelidate from 'vuelidate';

Vue.config.productionTip = false;

//Vue.use(Vuelidate)

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
