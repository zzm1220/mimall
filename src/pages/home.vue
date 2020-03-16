<!-- 组件说明 -->
<template>
    <div class="home">
        <NavHeader />
        <router-view></router-view>
        <NavFooter />
    </div>
</template>

<script>
    import NavHeader from '../components/NavHeader';
    import NavFooter from '../components/NavFooter';
    export default {
        components: {
            NavHeader,
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