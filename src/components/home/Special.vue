<template>
  <div class="special">
    <div class="special-title">专题精选</div>
    <van-swipe :show-indicators="false" :loop="false" :width="300">
      <van-swipe-item v-for="item in special" :key=item.index>
        <img :src="item.item_pic_url" v-lazy="item.item_pic_url"/>
        <div class="special-info">
          {{item.title}}
          <span>￥{{item.price_info}}元起</span>
        </div>
        <section>{{item.subtitle}}</section>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  export default{
    name:'special',
    props:['special'],
    data(){
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .special{
    background: #fff;
    margin-bottom: 10px;
    .special-title{
      height: 50px;
      text-align: center;
      line-height: 50px;
      background: #fff;
      font-size: 16px;
    }
    .van-swipe-item{
      padding-left: 10px;
      box-sizing: border-box;
      img{
        height: 193px;
      }
      .special-info{
        padding-top: 10px;
        span{
          color: red;
        }
      }
      section{
        width: 100%;
        line-height: 30px;
        font-size: 12px;
        color: #666;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
</style>
