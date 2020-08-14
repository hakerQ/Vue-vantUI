<template>
    <van-tabbar v-model="active" @change='onChange'>
      <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="subject" icon="label-o">专题</van-tabbar-item>
      <van-tabbar-item name="classify" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item name="shoppingcar" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item name="me" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
  export default{
    name:'tabbar',
    data(){
      return {
        active:'home',
     }
    },
    
    mounted() {
        var route = window.location.pathname
        var reg = /^[^\/]*\/[^\/]*$/
        var regPath = reg.test(route)
        if(regPath){
          var url = route.slice(1)
          this.active = url
        }
    },
    methods:{
      onChange(index){
        this.$router.push({path:'/'+index})
      }
    }
  }
</script>

<style>
</style>
