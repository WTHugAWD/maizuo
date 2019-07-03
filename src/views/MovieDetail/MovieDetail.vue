<template>
    <div>
       <div class = "nothing" v-if="!this.movies">
           暂无详情
           <h4 @click=goback> 点击返回主页</h4>
           </div>     
        <div class="moviedetail" v-else>
        <!-- {{$route.params.id}} -->
        <div class="header">
            <img width=100% :src="this.movies.data.film.img" alt="">
            <div class="return" @click="goback">
                <i class="fa fa-angle-left"></i>
            </div>
        </div>
        <div class="filmdetail">
            <h2>
                <p class="name">{{this.movies.data.film.t}}
                    <span>{{this.movies.data.film.filmType.name}}</span>
                </p>
                <p class= "sc">{{this.movies.data.film.r}} <span>分</span>  </p>
            </h2>
            <h3>{{this.movies.data.film.movieType}}</h3>
            <h5>
        {{this.movies.data.film.nation}} | {{this.movies.data.film.d}}分钟
    </h5>
    <h6>
        {{this.movies.data.film.synopsis}}
    </h6>
        </div>
        <div class="actors">
            <div class="ac-title">
                演职人员
            </div>
        <Bannertop :actors = actors></Bannertop>
        </div>
        <div class="photos">
            <div class="photostitle">
                <h2>剧照</h2>
                <h3>全部（{{this.photos.length}}）<i class="fa fa-angle-right"></i> </h3>
            </div>
            <Bannerbottom :photos = photos></Bannerbottom>
        </div>
         
<!--         <div class="space">

        </div -->>
        <div class="nav">
            选座购票
        </div>
    </div>
    </div>
</template>

<script>
import Bannertop from "@/components/DetailBanner/DetailBanner_top"
import Bannerbottom from "@/components/DetailBanner/DetailBanner_bottom"
export default {
    methods:{
        goback(){
             this.$router.replace("/home")
        }
        
    },
    data(){
        return {
            moviedetails:[],
            movies:null,
            actors:[],
            photos:[],
        }
    },
    created(){
        this.$http.get("/api/mz/movielist").then(res=>{
            //console.log(res.data.data.object_list)
            var id=this.$route.params.id;
            
            let arr = res.data.data.object_list;
            this.moviedetails = arr.filter(item =>{
                if(item.data.film.id == id){
                    return true    
                }
                return false
            })
            this.movies = this.moviedetails[0]
            this.actors = this.movies.data.film.actors
            this.photos = this.movies.data.film.photos
            
        })
        
    },
    components:{
        Bannertop,Bannerbottom
    }
}
</script>

<style lang="scss" scoped>
.nothing{
    color:gray;
    font-size: 20px;
    width:100%;
    text-align: center;
    margin-top:1rem;
    h4{
        font-size: 16px;
        margin-top: 20px;
        color:orange;
        cursor:pointer;
    }
}
.moviedetail{
    width:100%;
}
.header{
    height:2.11rem;
    width:100%;
    .return{
        background:white;
        border-radius: 50%;
        z-index:30;
        height:0.3rem;
        width:0.3rem;
        position: absolute;
        top:0;
        left:0;
        line-height:0.3rem;
        text-align: center;
        opacity: 0.5;
        margin:0.06rem 0 0 0.06rem;
        i{
            font-size: 0.3rem;
        }
    }
}
.filmdetail{
    background: white;
    padding:0.15rem;
    h2{
        display: flex;
        justify-content: space-between;
        align-items:center;
        .name{
            color: #191a1b;
            font-size: 18px;
            height: 24px;
            line-height: 24px;
            margin-right: 7px;
            span{
                font-size: 9px;
                color: #fff;
                background-color: #d2d6dc;
                height: 14px;
                line-height: 14px;
                padding: 0 2px;
                border-radius: 2px;
                display: inline-block;
                margin-left:0.06rem;
            }
        }
        .sc{
            font-size: 18px;
            font-style: italic;
            color: #ffb232;
            span{
                font-size: 10px;
            }
        }
    }
    h3{
        font-size: 13px;
        color: #797d82;
        margin-top: 4px;
    }
    h4{
        font-size: 13px;
        color: #797d82;
        margin-top: 4px;
    }
    h5{
        font-size: 13px;
        color: #797d82;
        margin-top: 4px;

    }
    h6{
        margin-top: 12px;
        font-size: 13px;
        color: #797d82;
    }
}
.actors{
    margin-top:0.1rem;
    width:100%;
    background: white;
    .ac-title{
        padding:0.15rem;
        font-size: 16px;
        text-align: left;
        color: #191a1b;
    }
    .ac-scroll{
        width:100%;
        padding:0.12rem;
        padding-top:0;
        background: pink;
        height:1.3rem;
        .ac-scoll-item{
            float: left;
            margin-right:0.11rem;
            img{
                height:0.85rem;
                width:0.85rem;
            }
            p{
                padding-top: 10px;
                font-size: 12px;
                color: #191a1b;
                width: 85px;
                height: 18px;
                text-align: center;
            }
            span{
                display: block;
                width:0.85rem;
                font-size: 10px;
                color: #797d82;
                text-align: center;
                margin-top:0.1rem;
            }
        }
    }
}
.photos{
    width:100%;
    height:2rem;
    margin-top:0.1rem;
    .photostitle{
        padding:0.15rem;
        width:100%;
        display: flex;
        justify-content: space-between;
        background:white;
        h2{
            font-size: 16px;
            text-align: left;
            color: #191a1b;
        }
        h3{
            font-size: 13px;
            color: #797d82;
            float: right;
            i{
                font-size: 0.16rem;
            }
        }
    }
    .photosbox{
        background: white;
        width:100%;
        padding:0.15rem;
        height:1.1rem;
        
        img{
            width:1.5rem;
            float: left;
            margin-right:0.1rem;
        }
    }
}
.nav{
    height:0.5rem;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    background-color: #ff5f16;
    color: #fff;
    font-size: 16px;
    line-height: 49px;
    z-index: 50;
}
.space{
    background: white;
    height:0.1rem;
    width:100%;
    background: transparent;
}
</style>
