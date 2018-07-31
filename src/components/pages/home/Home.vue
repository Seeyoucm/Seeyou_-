<template>
    <div class="home page">
        <!-- banner轮播图 -->
        <banner></banner>
        <!-- 电影展示 -->
        <movie-box></movie-box>
    </div>
</template>


<script>
import Banner from "./Banner.vue";
import MovieBox from "./MovieBox.vue";

    export default{
        name : "Home",
        data(){
            return {

            }
        },
        components:{
            Banner,
            MovieBox
        }
    }
</script>

<style scoped>

</style>
