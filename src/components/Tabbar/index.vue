<template>
    <div class="tabbar">
        <Item txt = "电影" mark="home" :sel = "selected" @changeSelected="changeSlected">
            <img slot = "normalImg" src="../../assets/ic_tab_home_normal.png" alt="">
            <img slot = "activeImg" src="../../assets/ic_tab_home_active.png" alt="">
        </Item>
        <Item txt = "影院" mark="cinema" :sel = "selected" @changeSelected="changeSlected">
            <img slot = "normalImg" src="../../assets/ic_tab_cinema_normal.png" alt="">
            <img slot = "activeImg" src="../../assets/ic_tab_cinema_active.png" alt="">
        </Item>
        <Item txt = "特惠" mark="sale" :sel = "selected" @changeSelected="changeSlected">
            <img slot = "normalImg" src="../../assets/ic_tab_sale_normal.png" alt="">
            <img slot = "activeImg" src="" alt="">
        </Item>
        <Item txt ="我的" mark="mine" :sel = "selected" @changeSelected="changeSlected">
            <img slot = "normalImg" src="../../assets/ic_tab_mine_normal.png" alt="">
            <img slot = "activeImg" src="../../assets/ic_tab_mine_active.png" alt="">
        </Item>
    </div>
</template>

<script>
import Item from './Item'
export default {
    data(){
        return {
            selected:this.$route.name
            
        }
    },
    components:{
        Item
    },
    methods:{
        changeSlected(val){
            this.selected = val;
        }
    }
}
</script>

<style lang="scss" scoped>
    .tabbar{
        position: fixed;
        bottom:0;
        left:0;
        height:0.5rem;
        display: flex;
        width:100%;
        border-top:1px solid #ccc;
        background: #fff;
    }

</style>
