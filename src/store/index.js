import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

const state = {
  username: "", // 用户名
  cartCount: 0 // 购物车商品数量
};

const store = new Vuex.Store({
  state,
  mutations,
  actions
});

export default store;
