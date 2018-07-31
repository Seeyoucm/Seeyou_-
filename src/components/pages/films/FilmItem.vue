<template>
    <router-link 
    tag="li" 
    class="film-item-li" 
    :to="{name:'detail' ,params:{id :film.id}}">
        <div class="film-item">     
            <div class="film-item-img">
                <img :src="film.cover.origin" :alt="film.name">
            </div>
            <div class="film-desc">
                <div class="film-next-arrow">
                    <i class="fa fa-angle-right"></i>
                </div>
                <div class="film-grade">{{film.grade}}</div>
                <div class="film-name">{{film.name}}</div>
                <div class="film-intro">{{film.intro}}</div>
                <div class="film-counts">
                    <span class="film-count-color1">{{film.cinemaCount}}</span>
                    <span>家影院上映</span>
                    <span class="film-count-color1">{{film.watchCount}}</span>
                    <span>人购票</span>
                </div>
            </div>
        </div>
    </router-link>

    
</template>

<script>
import Detail from "../detail/Detail.vue";
    export default{
        name:"FilmItem",
        props:["film"],
        components:{
            Detail
        },
    }

</script>

<style scoped lang="scss">
.film-item-li{
    margin: 0;
    padding: 0;
    list-style: none;
    .film-item{
        width: 100%;
        padding: .2rem 0;
        border-bottom: dashed 1px #c9c9c9;
        cursor: pointer;
        box-sizing: border-box;
        .film-item-img{
            width: .6rem;
            height: .8rem;
            float: left;
            overflow: hidden;
            box-sizing: border-box;
           img{
               width: 100%;
               height: 100%;
           }
        }
        .film-desc{
            padding-left: 15px;
            display: inline-block;
            width: 75%;
            .film-next-arrow{
                float: right;
                line-height: 29px;
                color: #c6c6c6;
                i{
                    font-size: 10px !important;
                }
            }
            .film-grade{
                float: right;
                font-size: 16px;
                line-height: 32px;
                color: #fc7103;
            }
            .film-name {
                font-size: 16px;
                line-height: 32px;
                color: #000;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .film-intro {
                height: 24px;
                line-height: 24px;
                color: #8e8e8e;
                font-size: 12px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 100%;
                display: inline-block;
            }
            .film-counts {
                line-height: 24px;
                color: #8e8e8e;
                font-size: 12px;
                .film-count-color1 {
                    color: #8aa2bf;
                }
            }


        }
        
    
    }
}

</style>
