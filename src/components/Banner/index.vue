<template>
    <div class="banner swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"
            v-for="banner in banners"
            :key = "banner.bannerId">
                <img width="100%" :src="banner.imgUrl" alt="">
            </div>
        </div>
        <div class="swiper-pagination">

        </div>
    </div>
</template>

<script>
import axios from "axios"
import Swiper from "swiper"
export default {
    data(){
        return {
            banners:[]
        }
    },
    created (){
        this.$http.get("/api/mz/banner",{
            params :{
            }
        }).then(res=>{
            console.log(res.data.data)
            this.banners = res.data.data.object_list
            this.$nextTick(()=>{
                new Swiper(".banner",{
                  loop:true,
                  pagination:{
                     el:".swiper-pagination" 
                  },
                   autoplay:true,
                   delay: 800
            })
            })

        })
    },
    methods:{
        getImages(_url){
                if( _url !== undefined ){
                    let _u = _url.substring( 7 );
                    return 'https://images.weserv.nl/?url=' + _u;
        }
        }
    }
}
</script>

<style lang = "scss" scoped>
    .banner{
        height:2.1rem;
        width:100%;
        .swiper-pagination{
            text-align: right
        }
    }
</style>
