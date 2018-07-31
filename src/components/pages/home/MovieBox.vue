<template>
    <div class="movie-box">
        <ul>
            <!-- 正在热映 -->
            <li is="movie-ftem" 
            v-for="playing in playings" 
            :key="playing.id" 
            :src="playing.cover.origin" 
            :name="playing.name"  
            :alt="playing.intro"
            :cinemaCount="playing.cinemaCount"
            :watchCount="playing.watchCount"
            :grade="playing.grade">
            </li>
            <div class="more-button">更多热映电影</div>
            <!-- 分割线 -->
            <div class="daviding-line">
                <div class="up-coming">即将上映</div>
            </div>
            <!-- 即将上映 -->
            <li is="movie-ttem" 
            v-for="coming in comings" 
            :key="coming.id" 
            :src="coming.cover.origin" 
            :name="coming.name"  
            :alt="coming.intro"
            :cinemaCount="coming.cinemaCount"
            :watchCount="coming.watchCount"
            :grade="coming.grade">
            </li>
            <div class="more-button">更多即将上映电影</div>
        </ul>
    </div>
</template>


<script>
    import MovieFtem from "./MovieFtem.vue";
    import MovieTtem from "./MovieTtem.vue";
    import axios from "axios";

    export default{
        name : "MovieBox" ,
        components:{
            MovieFtem,
            MovieTtem
        },
        data(){
            return{
                playings:[],
                comings:[]
            }
        },
        methods:{
            getPlaying(){
                axios.get("/static/mock/playing.json").then((res)=>{
                    // console.log(res.data.data.films)
                    this.playings = res.data.data.films;
                }).catch((err)=>{
                    console.log(err)
                })
            },
            getComing(){
                axios.get("/static/mock/coming.json").then((suc)=>{
                    // console.log(suc.data.data.films);
                    this.comings = suc.data.data.films;
                }).catch((err)=>{
                    console.log(err)
                })
            }
        },
        created() {
            this.getPlaying();
            this.getComing();
        },
    }
</script>

<style scope lang="scss">
.movie-box{
    .more-button{
    width: 1.6rem;
    height: .3rem;
    border: 1px solid #aaa;
    border-radius: .15rem;
    margin: .1rem auto .3rem;
    text-align: center;
    line-height: .3rem;
    font-size: .12rem;
    color: #616161;
    cursor: pointer;
    }
    .daviding-line{
    position: relative;
    margin-top: .3rem;
    margin-bottom: .3rem;
    border-bottom: 1px solid #a8a8a8;
        .up-coming{
        width: 65px;
        height: 20px;
        margin: 0 auto;
        margin-bottom: -10px;
        border-radius: 5px;
        font-size: 10px;
        line-height: 20px;
        text-align: center;
        color: #eee;
        background-color: #a7a7a7;
        }
    }
}

</style>
