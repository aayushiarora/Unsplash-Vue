import Vue from 'vue'
import App from './App.vue'
import {createApi} from 'unsplash-js';
import axios from 'axios';
import router from './router'
import store from './store'
Vue.config.productionTip = false

const unsplash = new createApi({
  applicationId: "",
  secret: "",
  callbackUrl: "{CALLBACK_URL}"
});

Vue.prototype.$unsplash = unsplash;
Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
