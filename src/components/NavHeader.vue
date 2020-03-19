<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-else>登录</a>
          <a href="javascript:;">我的订单</a>
          <a href="javascript:;" class="my-cart" @click="goToCart">
            <span class="icon-cart"></span>购物车
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="item in phoneList" :key="item.id">
                  <a :href="`/product/${item.id}`" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="pro-name">
                      <span>{{ item.name }}</span>
                    </div>
                    <div class="pro-price">
                      <span>{{ item.price | currency}}</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>Redmi</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电脑</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
  data() {
    return {
      username: 'zhimin',
      phoneList: []
    }
  },
  filters: {
    currency(val) {
      if (!val) return '0.00';
      return `¥ ${val.toFixed(2)} 元`
    }
  },
  mounted() {
    this.getPhoneList()
  },
  methods: {
    getPhoneList() {
      this.axios.get('/products', {
        params: {
          categoryId: "100012",
          pageSize: 5
        } 
      }).then(res => {
        let result;
        if (res.list.length > 6) {
          result = res.list.slice(0, 6);
        } else {
          result = res.list;
        }
        this.phoneList = result;
      })
    },
    goToCart() {
      this.$router.push('/cart')
    }, 
    login() {
      this.$router.push('/login')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        color: #ffffff;
        background-color: #ff6600;
        text-align: center;
        margin-right: 0px;
        .icon-cart {
          @include bgImg(16px, 12px, "/imgs/icon-cart.png");
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      position: relative;
      height: 112px;
      @include flex();
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #FF6600;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before {
            content: "";
            @include bgImg(55px, 55px, "/imgs/mi-logo.png");
            transition: margin .2s;
          }
          &:after {
            content: "";
            @include bgImg(55px, 55px, "/imgs/mi-home.png");
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin .2s;
          }
        }
      }
      .header-menu {
        display: flex;
        align-items: center;
        width: 643px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-size: 16px;
          font-weight: bold;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0px;
            width: 1226px;
            height: 0px;
            opacity: 0;
            border-top: 1px solid $colorH;
            overflow:hidden;
            box-shadow: 0 7px 6px 0 rgba(0,0,0,.11);
            z-index: 10;
            background: #ffffff;
            transition: all .5s;
            .product {
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              text-align: center;
              position: relative;
              a {
                display: inline-block;
              }
              img {
                height: 111px;
                width: auto;
                margin-top: 26px;
              }
              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price {
                color: $colorA;
              }
              &:after {
                content: "";
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              } 
              &:last-child:after {
                border: none;
              }
            }
          }

        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          @include flex(space-around, center);
          // display: flex;
          // justify-content: space-around;
          // align-items: center;
          input {
            border: none;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
          }
          a {
            @include bgImg(18px, 18px, "/imgs/icon-search.png");
          }
        }
      }
    }
  }
}
</style>
