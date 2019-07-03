<template>
    <div class="home">
        <City :isFixed="isFixed"></City>
        <Banner></Banner>
        <div class="movietitle" :class="{titlefixed:isFixed}">
            电影
        </div>
        <div class="navbar" :class="{fixedTop:isFixed}">
            <span
            v-for="nav in navs"
            :key="nav.id"
            :class="{active:type===nav.type}"
            @click="type=nav.type"
            >
                {{nav.title}}
            </span>
        </div>
        
         <MovieBox :type = type></MovieBox>
        
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Tabbar from "@/components/Tabbar"
import City from "@/components/Header"
import Banner from "@/components/Banner"
import MovieBox from "./MovieBox"
export default {
    name:"home",
    data(){
        return {
            type:"hot",
            isFixed:false,
            navs:[
                {id:1,title:"正在热映",type:"hot"},
                {id:2,title:"即将上映",type:"coming"}
            ]
        }
    },
    components:{
        Tabbar,City,Banner,MovieBox
    },
    created(){
         window.addEventListener("scroll",e=>{
            let sTop = document.documentElement.scrollTop || document.body.scrollTop;
                if(sTop >= 210){
                    this.isFixed=true;
                    console.log(this.isFixed)
                }else{
                    this.isFixed=false;
                }
        })
    }
}
</script>

<style lang = "scss">
    .home{
    }
    .swiper-pagination-bullet-active{
        background:white!important
    }
    .swiper-pagination-bullet{
        background: !important;
        border: 1px solid white;
        height:6px;
        width: 6px;
    }
    .movietitle{
        height:0.44rem;
        width:100%;
        display: block;
        position: fixed;
        top:0;
        left:0;
        background: white;
        line-height:0.44rem;
        text-align: center;
        color: #191a1b;
        font-size: 17px;
        &.titlefixed{
            display: block;
            z-index:20;
        }
    }
    .navbar{
        position: relative;
        width:100%;
        height:0.5rem;
        background: #fff;
        display: flex;
        justify-content: space-around;
        align-items: center;
        &.fixedTop{
            position: fixed;
            top:0.44rem;
            left:0;
            width:100%;
            z-index:12;
        }
        span{
            color: #191a1b;
            text-align: center;
            height: 16px;
            line-height: 16px;
            font-size: 14px;
            cursor: pointer;
            transition: all 1s;
            position: relative;
            &::after{
                content: "";
                height:0.03rem;
                width:40px;
                position: absolute;
                left:50%;
                margin-left:-0.2rem;
                bottom:-0.1rem;
                background: transparent;
                transition: all 1s;
            }
        }
        .active{
            color:#ff5f16;
            &::after{
                 background:#ff5f16;
            }
        }
    }
</style>
