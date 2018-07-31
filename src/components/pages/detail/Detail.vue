<template>
    <div class="detail page"> 
        <div class="loading" v-if="!flag">
             <!-- 如果数据还没有请求完成，则显示正在加载的图片 -->
            <img src="../../../../static/img/loading.gif" alt="" v-if="!flag">
        </div> 
        <div class="film-img-wrap" v-if="flag">
            <img :src="datail.cover.origin">
        </div>
        <div class="film-intro" v-if="flag">
            <div class="film-word1">影片简介</div>
            <div class="film-word2">导演:{{datail.director}}</div>
            <div class="film-word2 has-border" >
                <span>主演：</span>
                <span v-for="(actor,index) in datail.actors" 
                :key="index" 
                v-if="index < datail.actors.length - 1">
                {{actor.name}}<span class="border-right">|</span>
                </span>
                <span>{{datail.actors[datail.actors.length - 1].name}}</span>
            </div>
            <div class="film-word2">地区语言:{{datail.nation}}({{datail.language}})</div>
            <div class="film-word2">类型:{{datail.category}}</div>
            <div class="film-word2">上映日期:{{datail.premiereAt | time}}</div>
            <div class="film-word3">{{datail.synopsis}}</div>
        </div> 
    </div>
</template>


<script>
    // 引入axios进行异步加载，请求数据
    import axios from "axios";
    export default{
        name:"Detail",
        props:["id"],
        data(){
            return {
                detail: {},
                flag: false
            }
            
        },
        // 设置过滤器,将获取到的时间戳进行文本格式化输出
        filters:{
            // value是表示时间戳的毫秒值，通过这里动态的设置上映日期
            time(value){
                // 获取当前的时间
                let data = new Date(value);
                // 返回获取到的日期
                return data.getMonth() + 1 +"月" + data.getDate() + "日" ;

            }
        },
        methods:{
            // 请求数据
            getDetails(){
                axios.get("/mz/v4/api/film/" + this.id).then((res)=>{
                    // console.log(res.data.data.film)
                    this.datail = res.data.data.film;
                    // 如果为true，则渲染页面
                    this.flag = true;
                    //  console.log(this.datail.synopsis);
                }).catch((err)=>{
                    console.log(err);
                })
            },

        },
        created() {
            this.getDetails();
        },
    }

</script>

<style scoped lang="scss">
.detail{
    font: 12px/1.5 Tahoma, Helvetica, Arial, sans-serif;
    font-family: 'Microsoft YaHei', Tahoma, Helvetica, Arial, sans-serif;
    width: auto;
    padding: 0 !important;
    margin: 0 auto !important;
    .loading{
        width: 1.1rem;
        height: 1.1rem;
        img{
            width: 1.1rem;
            height: 1.1rem;
            margin: 1.7rem 0 0 .8rem ;
        }
    }
    .film-img-wrap {
        padding-top: .35rem;
        overflow: hidden;
        img{           
            width: 100%;
            transition: all 1.2s ease 0s;
            opacity: 1;
        }
    }
    .film-intro{
        user-select: text;
        .film-word1{
            margin: .16rem auto;
            border-left: .16rem solid RGB(228, 200, 156);
            font-size: .16rem;
            padding-left: .04rem;
        }
        .film-word2{
            height: .18rem;
            overflow: hidden;
            margin-bottom: .1rem;
            padding-left: .2rem;
        }

        .film-word3 {
            text-overflow: ellipsis;
            margin-bottom: .8rem;
            padding-left: .2rem;
            padding-right: .2rem;
        }
        .has-border{
            .border-right{
                padding:0 .03rem;
            }
        }
    }
}
</style>
