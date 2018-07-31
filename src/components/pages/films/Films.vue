<template>
    <div class="films page">
        <film-nav :type="type" @change="change"></film-nav>
        <film-box :type="type"></film-box>

    </div>
</template>

<script>
import FilmNav from "./FilmNav.vue"
import FilmBox from "./FilmBox.vue"



 export default{
    name:"Films",
    components:{
        FilmNav,
        FilmBox
    },
    data(){
        return{
            type: "now-playing"
        }
    },
    methods:{
        change(type){
            this.type = type;
        }
    }
 }   
</script>

<style scoped lang="scss">
.page{
    padding-left:.15rem;
    padding-right: .15rem;
    background-color: #f9f9f9;
    width: 100%;
    position: absolute;
    min-height: 100%;
    box-sizing: border-box;
    
    
}
</style>
