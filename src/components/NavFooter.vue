<!-- 组件说明 -->
<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="logo">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="javascript:;">河畔一角主页</a>
            <a href="javascript:;">Vue全栈课程</a>
            <a href="javascript:;">React全家桶课程</a>
            <a href="javascript:;">微信支付专项课程（H5+小程序+Node+Mongo）</a>
        </div>
        <div class="footer-copyright">
            Copyright ©2019 mi.futurefe.com All Rights Reserved.
        </div>
    </div>
</template>

<script>
    //import x from ''
    export default {
        name: "nav-footer",
        components: {

        },
        data () {
            return {

            };
        },
        computed: {

        },
        methods: {

        },
    }
</script>

<style scoped lang="scss">
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.footer {
    height: 234px;
    width: 100%;
    background-color: $colorB;
    color: $colorD;
    font-size: $fontI;
    text-align: center;
    border-top: 4px solid $colorA;
    .footer-logo {
        margin-top: 46px;
        margin-bottom: 31px;
        img {
            width: 53px;
            height: 36px;
            margin-bottom: 13px;
        }
    }
    .footer-link {
        margin-bottom: 13px;
        a {
            display: inline-block;
            color: $colorD;
            position: relative;
            &:after {
                content: "";
                width: 1px;
                height: 16px;
                margin: 0 10px;
                border-right: 1px solid $colorD;
            }
            &:last-child:after {
                border-right: none;
            }
        }
    }
}
</style>