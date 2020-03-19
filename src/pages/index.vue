<!-- 组件说明 -->
<template>
    <div class="index">
        index page
        <ServiceBar />
    </div>
</template>

<script>
    import ServiceBar from '../components/ServiceBar'
    export default {
        name: "index",
        components: {
           ServiceBar
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