<!-- 组件说明 -->
<template>
    <div class='order'>
        <OrderHeader />
        <router-view></router-view>
        <NavFooter />
    </div>
</template>

<script>
    import OrderHeader from './../components/OrderHeader';
    import NavFooter from './../components/NavFooter';
    export default {
        components: {
            OrderHeader,
            NavFooter
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

<style scoped>

</style>