<!-- 组件说明 -->
<template>
  <div class="product">
    <ProductParams :height="154" :name="product.name">
      <template v-slot:buy>
        <button class="btn" @click="buy">立即购买</button>
      </template>
    </ProductParams>
    <div class="item-video">
      <h2>
        60帧超慢动作摄影
        <br />慢慢回味每一瞬间的精彩
      </h2>
      <p>
        后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！
        <br />更能AI 精准分析视频内容，15个场景智能匹配背景音效。
      </p>
      <div class="video-bg" @click="isShow=true;"></div>
      <div class="video-box">
        <div class="overlay" v-if="isShow"></div>
        <div class="video" :class="{'slide': isShow}">
          <span class="icon-close" @click="closeVideo"></span>
          <video src="/imgs/product/video.mp4" muted autoplay controls="controls"></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductParams from "../components/ProductParams";
export default {
  name: "product",
  components: {
    ProductParams
  },
  data() {
    return {
        isShow: false,
        product: {}
    };
  },
  computed: {},
  methods: {
      closeVideo() {
          this.isShow = false;
      },
      getProductInfo() {
          let id = this.$route.params.id;
          this.axios.get(`/products/${id}`).then(res => {
              this.product = res;
          })
      },
      buy() {
          let id = this.$route.params.id;
          this.$router.push(`/detail/${id}`);
      }
  },
  mounted() {
      this.getProductInfo();
  }
};
</script>

<style scoped lang="scss">
.product {
  div.item-video {
    height: 1044px;
    background-color: #000000;
    color: #ffffff;
    padding-top: 82px;
    margin-bottom: 76px;
    text-align: center;
    h2 {
      font-size: 60px;
      margin-bottom: 47px;
    }
    p {
      font-size: 24px;
      margin-bottom: 58px;
    }
    .video-bg {
      background: url("/imgs/product/gallery-1.png") no-repeat center;
      background-size: cover;
      width: 1226px;
      height: 540px;
      margin: 0 auto 120px;
      cursor: pointer;
    }
    .video-box {
      .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #333333;
        opacity: 0.4;
        z-index: 10;
      }
      .video {
        position: fixed;
        top: -50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        width: 1000px;
        height: 536px;
        opacity: 0;
        transition: all .6s;
        &.slide {
            top: 50%;
            opacity: 1;
        }
        video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          outline: none;
        }
        .icon-close {
            display: inline-block;
            width: 20px;
            height: 20px; 
            background: url("/imgs/icon-close.png") no-repeat center;
            background-size: contain;
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
            z-index: 10;
        }
      }
    }
  }
}
</style>