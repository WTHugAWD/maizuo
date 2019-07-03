<template>
    <div class="items" @click="changeflag">
        <span v-if="!flag"><slot name = "normalImg"></slot></span>
        <span v-else ><slot name = "activeImg"></slot></span>
        <span :class="{active:flag}">{{txt}}</span>
        
    </div>
</template>

<script>
export default {
    props:["txt","mark","sel",],
    computed:{
        flag(){
            if(this.mark === this.sel){
                return true
            }
            return false
        }
    },
    data() {
        return {
        }
    },
    methods:{
        changeflag(){
            //希望改变sel值
            //this.changeSelected(this.mark)
            this.$router.replace({path:this.mark})
            //this.$emit("changeSelected",this.mark)
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .items{
        flex:1;
        display: flex;
        flex-direction: column;
        align-items: center;
        span{
            font-size:10px;
            line-height: 0.2rem;
        }
        .active{
            color:#ff5f16;
        }
    }
    img{
    width: 21px;
    height: 21px;
    margin-top:0.08rem;;
    
    }
</style>
