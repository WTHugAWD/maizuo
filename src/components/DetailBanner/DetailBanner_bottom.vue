<template>
    <div class="bannerbottom swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"
                v-for="photo in photos"
            >
                <img width="100%" :src="photo" alt="">
                
            </div>
            
        </div>

    </div>
</template>

<script>
import Swiper from "swiper"
export default {
       props:["photos"],
       created(){
           this.$nextTick(()=>{
               new Swiper(".bannerbottom",{
                slidesPerView : 3,
            })
           })
       }
}

</script>

<style lang = "scss" scoped>
    
   .swiper-slide{
       height:1rem;
       width:1rem;
       border-right:10px solid white;
       background: white;
       display: flex;
       img{
           width:100%;
       }
   }
</style>
