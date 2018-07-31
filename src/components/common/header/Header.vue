<template>
    <header>
        <nav class="tool-bar">
            <div class="left">
                <div class="title-icon">
                    <!-- 功能图标 -->
                    <i class="fa fa-navicon" @click="isNavShow=!isNavShow"></i>
                </div>
                <!-- 卖座电影 -->
                <div class="title"  @click="isNavShow=!isNavShow">{{卖座电影}}</div>
            </div>
            <div class="right" @click="chg">
                <!-- 定位 -->
                <div class="city" >
                    成都
                    <i class="fa fa-angle-down"></i>
                </div>
                <!-- 个人中心 -->
                <div class="user">
                    <i class="fa fa-user-o"></i>
                </div>
            </div>
        </nav>


        <!-- 侧边导航栏 -->
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
            <nav-list :isNavShow="isNavShow" @close="close"></nav-list>     
        </transition>
        
    </header>
</template>


<script>
    import NavList from "./Navlist.vue";
    import "animate.css";
    // import bus from "../../../javascripts/bus.js"
    import router from "../../../router/index.js";

    export default{
        name : "Header",
        data(){
            return {
                isNavShow:false,
            }
        },
        components:{
            NavList
        },
        methods:{
            close(){
                return this.isNavShow=!this.isNavShow; 
            },
            closeNavlist(){
                this.isNavShow = false;
            },
            chg(){
                return this.isNavShow=!this.isNavShow; 
            }
        },
        created() {
            router.beforeEach((to,from,next)=>{
                this.closeNavlist();
                next();
            })
            // bus.$on("closeNav",this.closeNavlist)
        },

    }
</script>

<style scoped lang="scss">
.tool-bar{
    background: #282828;
    position: fixed;
    z-index: 500;
    top: 0;
    right: 0;
    left: 0;
    width: auto;
    height: .5rem;
    line-height: .5rem;
    overflow: hidden;
    .left{
        color: #fff;
        font-size: .16rem;
        line-height: .5rem;
        text-align: left;
        text-shadow: 0 -1px 0 rgba(0,0,0,0.8);
        width: auto;
        height: .5rem;
        margin: 0 auto;
        float: left;

        .title-icon{
            float: left;
            width: .48rem;
            text-align: center;
            border-right: 1px solid #222;
            box-shadow: 1px 0 1px #363636;
            color: #999;

        }
        .title{
            padding: 0 1em;
            float: left;
            font-size: 14px;
            color: #efefef;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: inline-block;
            overflow: hidden;
        }
    }

    .right{
        float: right;
        color: #999;
        .city{
            float: left;
            font-size: 14px;
            padding: 0 6px;
        }
        .user{
            float: right;
            font-size: 16px;
            width: 48px;
            text-align: center;
        }
    }
}
</style>
