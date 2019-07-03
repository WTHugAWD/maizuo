<template>
    <div class="moviebox"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
    
    >
        <MovieItem
            v-for="movie in movies"
            :key = "movie.id"
            :movie = "movie"
        ></MovieItem>
        <div class="dixian">
            不要触碰我的底线
        </div>
        <div class="space">

        </div>
    </div>
</template>

<script>
import MovieItem from "./MovieItem"
export default {
    name:"moviebox",
    watch:{
        type(){
            this.movies=[];
            this.page=1;
            this.hasMore=true;
            this.getMovies()//请求数据
           

        }
    },
    props:["type"],
    data(){
        return {
            movies:[],
            loading:false,
            limit:6,
            page:1,
            hasMore:true
           
        }
    },
    methods:{
        loadMore(){
            this.getMovies()
            if(!this.hasMore){
                this.loading = true;
                return false;
            }
        },
        getMovies(){
            let{limit,page} = this;
            this.loading=true;
             this.$http.get("/api/mz/"+this.type,{
                params:{
                    limit,
                    page
            }
            }).then(res=>{
                this.loading=false;
                this.movies = this.movies.concat(res.data.data.object_list)
                this.page++;
                if(this.limit * page >= res.data.data.total){
                    this.hasMore = false;
                    return false;
                }
               
            })
        }
    },
    created(){
       
       
    },
    components:{
        MovieItem
    }
}
</script>

<style lang="scss" scoped>
    .dixian{
        text-align: center;
        margin:0.1rem 0;
        font-size:13px;
        color: #a28888;
    }
    .space{
        height:0.5rem;
    }
</style>
