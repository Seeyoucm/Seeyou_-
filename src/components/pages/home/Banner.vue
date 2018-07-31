<template>
    <!-- 轮播图 -->
    <div class="swiper-container banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="banner in banners" :key="banner.id">
                <img :src="banner.imageUrl" :alt="banner.name">
            </div>

        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import Swiper from "swiper";
    import "swiper/dist/css/swiper.min.css";

    export default{
        name : "Banner" ,
        data (){
            return {
                banners:[],
            }
        },
        methods:{
            getBanner(){
                axios.get("/static/mock/banner.json").then((success)=>{
                    // console.log(success.data)
                    this.banners = success.data;
                }).catch((err)=>{
                    console.log(err)
                })
            }
        },
        created() {
            this.getBanner();
        },
        updated() {
            new Swiper(".swiper-container",{
                loop: true, 
                autoplay:true
            })
        },
    };
</script>

<style scoped lang="scss">
.banner{
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
    width: 3.2rem;
    img{
        width: 100%;
        height: 1.8rem;
    }
}
</style>

