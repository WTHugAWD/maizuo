<template>
        
       <mt-index-list>
           <div class="header">
               <i class = "fa fa-angle-left icon" @click ="tiaozhuan"></i>
               <span class="title">当前城市-</span>
           </div>
           <div class="search">
               <div class="inputbox">
                   <i class="fa fa-search"></i>
                  <input type="text" placeholder="请输入城市名或拼音">
               </div>
           </div>
           <div class="dingweifalse">
               <h2>GPS定位你所在的城市</h2>
               <h3>定位失败</h3>
               <h4>热门城市</h4>
               <h5>
                   <h6>辽阳</h6>
                   <h6>潮州</h6>
                   <h6>淄博</h6>
                   <h6>济南</h6>
                   <h6>青岛</h6>

               </h5>
           </div>
            <mt-index-section 
            v-for="city in citys"
            :key="city._id"
            :index="city.initial">
            <div class="cityitem"
                v-for="CS in city.list"
                :key="CS.lable"
            >
            {{CS.name}}
            </div>

            </mt-index-section>

        </mt-index-list>
</template>

<script>
import {IndexList, IndexSection,IndexCell} from 'mint-ui';
export default {
    data(){
        return {
            citys:[]
        }
    },
    methods:{
        tiaozhuan(){
            this.$router.replace("/home")
        }
    },
     components:{
        IndexList, IndexSection
    },
    created(){
        this.$http.get("/api/mz/city"
        ).then(res=>{
            console.log(res.data.data.object_list)
           this.citys = res.data.data.object_list
        })
    }
}
</script>

<style lang="scss" scoped>
    .cityitem{
            padding:0 0.15rem ;
            background-color: #fff;
            height: 100%;
            line-height: 48px;
            font-size: 14px;
            border-bottom:1px solid #e5e0e0;
    }
    .search{
        height:0.5rem;
        width:100%;
        overflow: hidden;
        background: #f4f4f4;
        .inputbox{
            height:0.3rem;
            width:3rem;
            margin-left:0.15rem;
            margin-top:0.1rem;
            background: white;
            border-radius: 5px;
            i{
                height:0.2rem;
                width:0.2rem;
                background: white;
                line-height: 0.2rem;
                text-align: center;
                font-size:16px;
                margin-top:0.05rem;
                margin-left:0.05rem;
            }
            input{
                border:0;
                height:0.26rem;
                width:2.4rem;
                font-size:12px;
                margin-left:0.05rem;
                color: #2c3e50;
                
            }
        }
    }
    .header{
        height:0.44rem;
        width:100%;
        align-items:center;
        position: relative;
        margin:0 auto;
        background: white;
        .icon{
            font-size:0.3rem;
            display: block;
            height:0.44rem;
            width:0.53rem;
            float: left;
            line-height:0.44rem;
            text-align: center;

        }
        .title{
            width:2.7rem;
            height:0.44rem;
            line-height:0.44rem;
            align-items: center;
            float: left;
            margin:0 auto;
            text-align: center;

        }
    }
        .dingweifalse{
            padding:0.15rem;
        height:2.08rem;
        background: white;
        h2{
            font-size:13px;
        }
        h3{
            height:0.3rem;
            width:0.91rem;
            background-color: #f4f4f4;
            line-height: 0.3rem;
            text-align: center;
            margin:0.08rem;
            border-radius: 3px;
            font-size:14px;
        }
        h4{
            font-size: 13px;
            color: #797d82;
            margin-bottom: 10px;    
        }
        h5{
            
            h6{
                height:0.3rem;
                width:0.91rem;
                background-color: #f4f4f4;
                line-height: 0.3rem;
                text-align: center;
                margin:0.08rem;
                border-radius: 3px;
                font-size:14px;
                float:left;
            }
        }
    }
</style>
