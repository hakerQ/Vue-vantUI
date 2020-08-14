<template>
  <div class="model">
    <div class="model-bg"></div>
    <div class="content">
      <van-icon name="cross" size="20" @click="onClose"/>
      <div class="goods-msg">
        <img :src="goodsInfo.list_pic_url" alt="">
        <div class="right">
          <section class="price">价格：￥ {{goodsInfo.retail_price}} 元</section>
          <section class="stock">库存：{{goodsInfo.goods_number}} {{goodsInfo.goods_unit}}</section>
        </div>
      </div>
      <div class="count">
        <h4>数量:</h4>
        <van-stepper v-model.number="$store.state.goodsdetail.goodsCount" integer @change = "onChange"/>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default{
    name:'model',
    props:['goodsInfo'],
    data(){
      return {}
    },
    methods:{
      ...mapMutations({
        isShowModel:'goodsdetail/changeModel'
      }),
      onClose(){
         this.isShowModel(false)
      },
      onChange(){
        // console.log('----------',this.$store.state.goodsCount)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .model{
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: calc(100vh - 50px);
    z-index: 9999;
    .model-bg{
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,.5);
    }
    .content{
      position: absolute;
      width: 100%;
      // height: 300px;
      left: 0;
      bottom: 0;
      background: #fff;
      padding: 20px 4%;
      .van-icon{
        position: absolute;
        right: 10px;
        top: 10px;
      }
      .goods-msg{
        display: flex;
        img{
          width: 100px;
          height: 100px;
        }
        .right{
          display: flex;
          flex-direction: column;
          flex: 1;
          padding-left: 10px;
          .price,.stock{
            flex: 1;
            line-height: 50px;
            color: #000;
          }
        }
      }
      .count{
        h4{
          height: 80px;
          line-height: 80px;
        }
      }
    }
  }
</style>
