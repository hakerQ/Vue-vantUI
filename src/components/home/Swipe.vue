<template>
  <van-swipe style="height: 200px;" :autoplay="3000" indicator-color="#0000ff" >
    <van-swipe-item v-for="item in swipe" :key=item.index>
      <img v-lazy="item.image_url" :src="item.image_url">
    </van-swipe-item>
  </van-swipe>
</template>

<script>
  export default{
    name:'myswipe',
    props:['swipe'],
    data(){
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  /deep/ .van-swipe__indicator {
    opacity: 1;
    background-color: #008000;
  }
</style>
