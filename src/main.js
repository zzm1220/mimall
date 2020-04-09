import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueLazyLoad from "vue-lazyload";
import VueCookies from "vue-cookie";
import store from "./store";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(VueLazyLoad, {
  loading: "/imgs/loading-svg/loading-bars.svg"
});
Vue.use(VueCookies);

axios.defaults.baseURL = "/api";
axios.defaults.timeout = 8000;

axios.interceptors.response.use(function(response) {
  let res = response.data;
  console.log(location.pathname === "/index");
  const path = location.pathname;
  if (res.status === 0) {
    return res.data;
  } else if (res.status === 10) {
    if (path !== "/index") {
      router.push("/login");
      // window.location.href = "/login";
    }
  } else {
    alert(res.msg);
    return Promise.reject(res);
  }
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
