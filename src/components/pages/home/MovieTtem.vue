<template>
<div>
    <!-- 即将上映 -->
    <ul>
    <li class="item">
        <div class="item-img">
            <img :src="src" :alt="intro">
        </div>
        <div class="bom">
            <div class="left">
                <div class="cena">{{name}}</div>
                <div class="count">{{cinemaCount}}家影院上映{{watchCount}}人购票</div>
            </div>
            <div class="right">
                <div class="score">{{grade}}</div>
            </div>
        </div>
    </li>
    </ul>
</div>

    
</template>


<script>

    export default{
        name : "MovieTtem" ,
        props:["src","intro","name","cinemaCount","watchCount","grade"],
        data(){
            return{
            }
        },
        filters : {
            time(value){
                let data = new Date(value);
                return data.getMonth() + 1 + "月" + data.getDate() + "日";
            }
        }
    }
</script>

<style scoped lang="scss">
ul{
    padding-top:.18rem;
    margin-bottom: .1rem;
    li{
        margin: 0 17px 17px 17px;
        background-color: #f9f9f9;
        -webkit-box-shadow: 0.5px 0.5px 1px #a8a8a8;
        -moz-box-shadow: 0.5px 0.5px 1px #a8a8a8;
        box-shadow: 0.5px 0.5px 1px #a8a8a8;
        cursor: pointer;
        img{
        width: 100%;
        transition: all 1.2s ease;
        opacity: 1;
        }
        .bom{
        padding-top: .15rem;
        padding-left: .28rem;
        height:.5rem;
        margin-right: -.15rem;
        margin-left: -.15rem;
        .left{
                float: left;
                .cena{
                font-size: .12rem;
                line-height: .15rem;
                -webkit-user-select: text;
                user-select: text;
                }
                .count{
                    font-size: .08rem;
                    color: #9a9a9a;
                    line-height: .15rem;
                }
            }
        }
        .right{
            width: 16.66666667%;
            height: .5rem;
            line-height: .3rem;
            color: #f78360;
            display: inline-block;
            float: right;
            margin-right: .15rem;
            font-size: .18rem;
        }
    }
}

</style>
