<!-- 组件说明 -->
<template>
  <div class="service">
    <div class="container">
      <ul>
        <li v-for="(item, index) in serviceList" :key="index">
          <span :class="`icon-${index}`"></span>
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//import x from ''
export default {
  components: {},
  data() {
    return {
      serviceList: [
        {
          icon: "/imgs/icon-setting.png",
          title: "预约维修服务"
        },
        {
          icon: "/imgs/icon-7day.png",
          title: "7天无理由退货"
        },
        {
          icon: "/imgs/icon-15day.png",
          title: "15天免费换货"
        },
        {
          icon: "/imgs/icon-post.png",
          title: "满150元包邮"
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>

<style scoped lang="scss">
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.service {
  color: $colorC;
  font-size: $fontI;
  padding: 30px 0;
  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    li {
        width: 24.5%; 
        position: relative;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        span {
            width: 20px;
            height: 20px;
            display: inline-block;
            margin-right: 8px;
        }
        .icon-0 {
            @include bgImg(20px, 20px, "/imgs/icon-setting.png")
        }
        .icon-1 {
            @include bgImg(20px, 20px, "/imgs/icon-7day.png")
        }
        .icon-2 {
            @include bgImg(20px, 20px, "/imgs/icon-15day.png")
        }
        .icon-3 {
            @include bgImg(20px, 20px, "/imgs/icon-post.png")
        }
        &:after {
            content: "";
            display: inline-block;
            height: 16px;
            width: 1px;
            border-right: 1px solid #e5e5e5;
            position:absolute;
            right: 0;
            top: 2px;
        }
    }
  }
}
</style>
