<!-- 组件说明 -->
<template>
  <div class="product-prarams" :class="{'isFixed': isFixed}">
    <div class="container">
      <div class="pro-title">{{name}}</div>
      <div class="pro-params">
        <a href="javascript:;">概述</a>
        <a href="javascript:;">参数</a>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
//import x from ''
export default {
  name: "product-prarams",
  components: {},
  props: {
    height: {
      type: Number,
      default: 0
    },
    name: String
  },
  data() {
    return {
      isFixed: false
    };
  },
  computed: {},
  methods: {
    onScroll() {
      let scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      this.isFixed = scrollTop > this.height ? true : false;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll, false);
  },
  destroyed() {
      window.removeEventListener("scroll", this.onScroll, false);
  }
};
</script>

<style scoped lang="scss">
.product-prarams {
  width: 100%;
  height: 70px;
  line-height: 70px;
  border-top: 1px solid #e5e5e5;
  background: #ffffff;
  &.isFixed {
      position: fixed;
      top: 0;
  }
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .pro-title {
      font-size: 18px;
      font-weight: bold;
      color: #333333;
    }
    .pro-params {
      font-size: 14px;
      a {
        color: #666666;
        display: inline-block;
        padding: 0 8px;
        position: relative;
        &:after {
          content: "";
          display: inline-block;
          height: 12px;
          border: 1px solid #666666;
          position: absolute;
          top: 28px;
          right: 0px;
        }
        &:nth-last-child(2) {
          margin-right: 8px;
          &:after {
            border: none;
          }
        }
      }
    }
  }
}
</style>