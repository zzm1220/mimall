<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { SAVE_USERNAME, SAVE_CARTNUM } from "./store/types";

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
    }
  },
  mounted() {
    this.getUser();
    this.getCartNum();
  },
  methods: {
    ...mapActions({
      saveUser: SAVE_USERNAME,
      saveCartNum: SAVE_CARTNUM
    }),
    getUser() {
      this.axios.get("/user").then((res) => {
        // 保存在vuex中
        this.saveUser(res.username);
      })
    },
    getCartNum() {
      this.axios.get("/carts/products/sum").then((res)=>{
        // 保存在vuex中
        this.saveCartNum(res);
      })
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/base.scss";
@import "./assets/scss/button.scss";
</style>
