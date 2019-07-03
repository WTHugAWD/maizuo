<template>
    <div>
        <div v-if="!this.actors"></div>
            <div class="bannertop swiper-container" v-else>
        <div class="swiper-wrapper">
            <div class="swiper-slide"
                v-for="actor in actors"
                :key = "actor.avatarAddress"
            >
                <img width="100%" :src="actor.avatarAddress" alt="">
                <h2>{{actor.name}}</h2>
                <h3>{{actor.role}}</h3>
                
            </div>
            
        </div>

    </div>
    </div>

</template>

<script>
import Swiper from "swiper"
export default {
       props:["actors"],
       created(){
           this.$nextTick(()=>{
               new Swiper(".bannertop",{
                slidesPerView : 4,
            })
           })
       }
}

</script>

<style lang = "scss" scoped>
    .swiper-wrapper{
        padding:0.15rem;
    }
   .swiper-slide{
       height:1.25rem;
       width:0.85rem;
       img{
           height: 0.85rem;
           width:0.85rem;
       }
       h2{
            padding-top: 10px;
            font-size: 12px;
            color: #191a1b;
            width: 85px;
            height: 18px;
            text-align: center;
       }
       h3{
           padding-top: 10px;
            font-size: 10px;
            color: #797d82;
            text-align: center;
            width:0.85rem;
       }
   }
</style>
