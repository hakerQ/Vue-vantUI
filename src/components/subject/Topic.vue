<template>
  <div class="topic">
    <section v-for="item in topiclist" :key=item.index>
      <img :src="item.scene_pic_url" alt="">
      <h4>{{item.title}}</h4>
      <div class="sub">{{item.subtitle}}</div>
      <div class="price">￥ {{item.price_info}} 元起</div>
    </section>
  </div>
</template>

<script>
  export default{
    name:'topic',
    props:['topiclist'],
    data(){
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .topic{
    text-align: center;
    section{
      margin-bottom: 10px;
      background: #fff;
      img{
        width: 100%;
      }
      h4{
        height: 40px;
        line-height: 40px;
        font-weight: 400px;
      }
      .sub{
        color: #666;
        font-size: 12px;
        width: 80%;
        margin: auto;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .price{
        height: 40px;
        line-height: 40px;
        color:red
      }
    }
  }
</style>
