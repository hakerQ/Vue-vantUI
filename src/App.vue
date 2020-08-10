<template>
  <div id="app">
    <router-view v-if="isRouterAlive"/>

     <transition name="fade">
       <tab-bar v-if="$store.state.tabBar"></tab-bar>
     </transition>



  </div>
</template>

<script>
import tabBar from './components/tabbar/Tabbar'
export default {
  name: 'App',
  provide(){
    return {
      reload:this.reload
    }
  },
  data(){
    return {
      isRouterAlive:true
    }
  },
  components:{
    tabBar
  },
  methods:{
    reload(){
      this.isRouterAlive = false
      this.$nextTick(function(){
        this.isRouterAlive = true
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/reset.scss';
.fade-enter-active,.fade-leave-active{
   transition:.5s ease-out;
   transform: translateY(0);
}
.fade-enter, .fade-leave-to{
   transform: translateY(200%);
}
</style>
