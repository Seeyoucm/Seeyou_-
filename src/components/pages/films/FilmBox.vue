<template>
    <div class="film-box">
        <ul v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
            infinite-scroll-immediate-check="false">
            <li is="film-item" v-for="film in films" :key="film.key" :film = "film"></li>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue'   // es6
import FilmItem from "./FilmItem.vue";
import axios from "axios";
import { Toast } from 'mint-ui';
Vue.use(Toast);

    export default{
        name:"FilmBox",
        props:["type"],
        components:{
            FilmItem
        },
        data(){
            return {
                page:1,
                count:7,
                films:[],
                loading:false
            }
           
        },
        methods:{
            getFilms(){
               var toast = Toast({
                    position: 'middle',
                    iconClass: 'fa fa-spinner fa-spin',
                    duration: -1
                });
                let {page, count} = this;
                axios.get("/mz/v4/api/film/" + this.type,{
                    params : {
                        page ,
                        count 
                    }
                }).then((res)=>{
                    // console.log(res.data.data.films);
                    this.films =this.films.concat(res.data.data.films);

                    let {current,total} = res.data.data.page;
                    if(current === total){
                        toast.close();   
                        return;    
                        
                    }
                    this.loading = false;
                   //加载完毕之后，关闭loading
                    toast.close();   
                    this.page++;
                }).catch((err)=>{
                    console.log(err)
                })
            },
            loadMore() {
                this.loading = true;
                this.getFilms();
            }
        },
        // created() {
        //     this.getFilms();
        // },
        watch:{
            // 配置监听参数
            type:{
                immediate:true,
                 // 监听类型的改变，获取不同的数据进行渲染
                handler(val){                   
                    this.page = 1;
                    this.loading = false;
                    this.films = [];
                    this.getFilms();
                    // console.log(val);
                }
            }          
        }
        // watch:{
        //     type(val){
        //         this.page = 1;
        //         this.loading = false;
        //         this.films = [];
        //         this.getFilms();
        //     }
        // }
    }

</script>

<style scoped lang="scss>


</style>
