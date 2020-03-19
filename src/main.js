import Vue from 'vue'
import axios from "axios"
import VueAxios from "vue-axios"
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueAxios, axios);

axios.defaults.baseURL = "/api";
axios.defaults.timeout = 8000;

axios.interceptors.response.use(function(response) {
  let res = response.data;
  if (res.status === 0) {
    return res.data;
  } else if (res.status === 10) {
    router.push('/login');
    // window.location.href = "/login";
  } else {
    alert(res.msg);
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
