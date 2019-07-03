<template>
    <div class="city-box" :class="{cityboxfixed:isFixed}">
       <span class = "city" :class="{cityfixed:isFixed}" @click ="cityjump">
           青岛
       </span>
       <i class="fa fa-angle-down"></i>
    </div>
</template>

<script>
export default {
    props:["isFixed"],
    methods:{
        cityjump(){
            this.$router.replace("/city")
        }
    }
}
</script>

<style lang = "scss">
    .city-box{
        position: fixed;
        top: 18px;
        left: 7px;
        color: #fff;
        z-index: 10;
        font-size: 13px;
        background: rgba(0,0,0,.2);
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        padding: 0 5px;
        z-index:25;
        &.cityboxfixed{
                 background:transparent;
                 z-index:20;
                 color:black;
                 z-index:50;
            }
        .city{
            font-size:13px;
            color:#fff;
            &.cityfixed{
                color:black;
            }
        }
        i{
            margin-left:0.01rem;
        }
    }

</style>
