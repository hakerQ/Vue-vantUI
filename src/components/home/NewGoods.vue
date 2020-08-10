<template>
  <div class="newgoods">
    <div class="newgoods-title">周一周四·新品首发</div>
    <div class="newgoods-box">
      <div class="newgoods-list" v-for="(item,index) in newgoods" :key="item.index" @click="changeGood(index)">
         <img :src="item.list_pic_url" alt="">
         <p>{{item.name}}</p>
         <div class="newgoods-price">￥ {{item.retail_price}} 元</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'newgoods',
    props:['newgoods'],
    data(){
      return {}
    },
    methods:{
      changeGood(idx){
         var id = this._props.newgoods[idx].id
         this.$store.commit('changeTabBar',false)
         this.$router.push('/goodsdetail/'+ id)
      }
    }
  }
</script>

<style lang="scss" scoped>
.newgoods{
   margin-bottom: 20px;
   background: #FFFFFF;
  .newgoods-title{
     height: 50px;
     text-align: center;
     line-height: 50px;
     font-size: 16px;
  }
  .newgoods-box{
     display: flex;
     flex-wrap: wrap;
     justify-content: space-between;
     .newgoods-list{
       width: 49%;
       text-align: center;
       margin-bottom: 10px;
       .newgoods-price{
         height: 40px;
         line-height: 40px;
         color: red;
       }
     }
  }
}
</style>
