<template>
  <div id="app">
    <keep-alive include="home">
       <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style lang="scss">
   .mint-indexlist-nav{
            border-left:0!important
        }
    .mint-indexsection-index{
          background-color: #f4f4f4!important;
         color: #797d82!important;
    }
</style>
 