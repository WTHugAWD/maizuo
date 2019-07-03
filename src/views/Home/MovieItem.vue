<template>
    <router-link tag:div :to="{name:'moviedetail',params:{id:movie.id}}" class="movieitem">
        <div class="img-box">
            <img :src="movie.img" alt="">
        </div>
        <div class="textbox">
            <div class="title">
                {{movie.tCn}} 
                <span>{{movie.is3D?"3D":"2D"}}</span>
            </div>
            <div class="sc">
                观众评分：<span>{{movie.r<=0?"未评分":movie.r}}</span>
            </div>
            <div class="act">
                主演：<span>{{movie.actors}}</span>
            </div>
            <div class="cont">
                {{movie.movieType}}&ensp;|&ensp;<span>{{movie.d}}</span>分钟

            </div>
        </div>
        <div class="buttonbox">
            <button>购票</button>
        </div>
    </router-link>
</template>

<script>
export default {
    props:["movie"]
}
</script>

<style lang="scss" scoped >
    .movieitem{
        height:1.24rem;
        padding:0.15rem;
        width:100%;
        background: white;
        position: relative;
        display: flex;
        justify-content: space-between;
        border-top:1px solid #f2ebeb;
        .img-box{
            left:0.15rem;
            top:0.16rem;
            img{
                width:0.66rem;
                height: 0.91rem;
            }
        }
        .textbox{
            height:100%;
            margin-left:5px;
            width:50%;
            .title{
                color: #191a1b;
                font-size: 16px;
                height: 0.22rem;
                width:2rem;
                span{
                       font-size: 9px;
                        color: #fff;
                        background-color: #d2d6dc;
                        height: 14px;
                        line-height: 14px;
                        padding: 0 2px;
                        border-radius: 2px;
                }
            }
            .sc{
                font-size: 13px;
                margin-top: 4px;
                color: #797d82;
                span{
                    color: #ffb232;
                    font-size: 14px;
                }
            }
            .act{
                font-size: 13px;
                margin-top: 4px;
                width:2rem;
                color: #797d82;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                
            }
            .cont{
                font-size: 13px;
                margin-top: 4px;
                color: #797d82;
            }
        }
        .buttonbox{
            width:10%;
            flex:1;
            display:flex;
            align-items:center;
            position: relative;
            height:100%;
            button{
                position: absolute;
                right:0;
                border:0;
                border: 1px solid #ff5f16;
                border-radius: 4px;
                height:0.25rem;
                width:0.5rem;
                background: white;
                color:#ff5f16;
            }
        }
    }
</style>
