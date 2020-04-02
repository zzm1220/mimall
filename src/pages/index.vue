<!-- 组件说明 -->
<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(menu, index) in menuList" :key="index">
                  <li v-for="(item, j) in menu" :key="j">
                    <a :href="`/product/${item.id}`">
                      <img :src="item? item.img:'/imgs/item-box-1.png'" />
                      {{item ? item.name : "小米手机"}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="slide in slideList" :key="slide.img">
            <a :href="`/product/${slide.id}`" target="_blank">
              <img :src="slide.img" />
            </a>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a :href="`/product/${ad.id}`" v-for="ad in adsList" :key="ad.id">
          <img v-lazy="ad.img" />
        </a>
      </div>
      <div class="banner">
        <a href="/product/30">
          <img v-lazy="'/imgs/banner-1.png'" alt="banner" />
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <div class="container-title">
          <h2>手机</h2>
        </div>
        <div class="container-content">
          <div class="content-banner">
            <a href="/product/35">
              <img v-lazy="'/imgs/mix-alpha.jpg'" alt="banner" />
            </a>
          </div>
          <div class="content-products">
            <div class="list" v-for="(productList,index) in productsList" :key="index">
              <div class="item" v-for="product in productList" :key="product.id">
                <h3>新品</h3>
                <div class="prdImg">
                  <img v-lazy="product.mainImage" :alt="product.name" />
                </div>
                <div class="prdIntro">
                  <p class="prd-name">{{product.name}}</p>
                  <p class="prd-subtitle">{{product.subtitle}}</p>
                  <div class="prd-price" @click="addCart">{{product.price}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ServiceBar />
    <Modal title="添加购物车成功" sureText="查看购物车" btnType="3" :showModal="showModal" @submit="goCart" @cancel="showModal=false">
      <template v-slot:body>已经添加到购物车啦</template>
    </Modal>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

import ServiceBar from "../components/ServiceBar";
import Modal from "../components/Modal";

export default {
  name: "index",
  components: {
    swiper,
    swiperSlide,
    ServiceBar,
    Modal
  },
  data() {
    return {
      showModal: false,
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        loop: true,
        effect: "cube",
        autoplay: true
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      },
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg"
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg"
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg"
        },
        {
          id: "",
          img: "/imgs/slider/slide-4.jpg"
        },
        {
          id: "",
          img: "/imgs/slider/slide-5.jpg"
        }
      ],
      menuList: [
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G专区"
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      adsList: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png"
        },
        {
          id: 48,
          img: "/imgs/ads/ads-2.jpg"
        },
        {
          id: 45,
          img: "/imgs/ads/ads-3.png"
        },
        {
          id: 47,
          img: "/imgs/ads/ads-4.jpg"
        }
      ],
      productsList: []
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    init() {
      this.axios
        .get("/products", {
          params: {
            categoryId: 100012,
            pageSize: 14
          }
        })
        .then(res => {
          res.list = res.list.slice(6, 14);
          this.productsList = [res.list.slice(0, 4), res.list.slice(4, 8)];
        });
    },
    addCart() {
         this.showModal = true;                    
    },
    goCart() {
      this.$router.push('/cart');
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.index {
  .swiper-box {
    .nav-menu {
      width: 264px;
      height: 451px;
      background-color: rgba(85, 88, 90, 0.48);
      box-sizing: border-box;
      padding: 26px 0;
      font-size: 16px;
      position: absolute;
      z-index: 9;
      .menu-wrap {
        .menu-item {
          width: 100%;
          height: 50px;
          line-height: 50px;
          position: relative;
          a {
            color: #ffffff;
            padding-left: 30px;
          }
          &:hover {
            background-color: $colorA;
            .children {
              width: 962px;
              display: block;
            }
          }
          &:after {
            content: "";
            width: 10px;
            height: 15px;
            @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
            position: absolute;
            right: 30px;
            top: 17.5px;
          }
          .children {
            display: none;
            position: absolute;
            top: -26px;
            left: 264px;
            width: 0px;
            height: 451px;
            transition: width 0.6s;
            background-color: #fff;
            border: 1px solid #e5e5e5;
            ul {
              width: 100%;
              height: 75px;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
                a {
                  color: $colorB;
                  font-size: 14px;
                  img {
                    width: 42px;
                    height: 35px;
                    vertical-align: middle;
                    margin-right: 15px;
                  }
                }
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      img {
        width: 100%;
      }
      .swiper-button-prev {
        left: 266px;
      }
    }
  }
  .ads-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 296px;
      height: 167px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .banner {
    margin-bottom: 50px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .product-box {
    width: 100%;
    background-color: $colorJ;
    padding: 30px 0 50px;
    div.container {
      .container-title {
        color: #333333;
        margin-bottom: 20px;
        h2 {
          font-size: 22px;
          height: 21px;
          line-height: 21px;
        }
      }
      .container-content {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .content-banner {
          a {
            display: inline-block;
            img {
              width: 224px;
              height: 619px;
            }
          }
        }
        .content-products {
          width: 986px;
          display: flex;
          flex-direction: column;
          .list {
            width: 986px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 14px;
            .item {
              width: 236px;
              height: 302px;
              background-color: #fff;
              text-align: center;
              h3 {
                background-color: #7ecf68;
                display: inline-block;
                width: 67px;
                height: 24px;
                font-size: 14px;
                line-height: 24px;
                color: #fff;
              }
              img {
                width: 100%;
                height: 195px;
              }
              .prdIntro {
                .prd-name {
                  font-size: 14px;
                  color: #333;
                  line-height: 14px;
                  font-weight: 700;
                }
                .prd-subtitle {
                  color: #999;
                  line-height: 13px;
                  margin: 6px auto 13px;
                }
                .prd-price {
                  color: #f20a0a;
                  font-size: 14px;
                  font-weight: 700;
                  cursor: pointer;
                  &:after {
                    content: "";
                    @include bgImg(22px, 22px, "/imgs/icon-cart-hover.png");
                    margin-left: 5px;
                    vertical-align: middle;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
