import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import home from "./home"
import cinema from "./cinema"
import sale from "./sale"
import mine from "./mine"
import city from "./city"
import moviedetail from "./moviedetail"
import login from "./login"



export default new Router({
  routes: [
    {path:"/",redirect:"home"},
    home,cinema,sale,mine,city,moviedetail,login,
    {path:"/notfound",component:()=> import("@/views/NotFound/NotFound")},
    {path:"*",redirect:"notfound"}
  ]
})

