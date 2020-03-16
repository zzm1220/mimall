<!-- 组件说明 -->
<template>
    <div class='cart'>
        <OrderHeader />
        cart
        <NavFooter />
    </div>
</template>

<script>
    import OrderHeader from './../components/OrderHeader';
    import NavFooter from './../components/NavFooter';
    export default {
        name: "cart",
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