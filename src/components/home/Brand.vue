<template>
  <div class="brand">
    <div class="brand-title">品牌制造商直供</div>
    <ul>
      <li v-for="(item,index) in brandList" :key=item.index @click="changeBrand(index)">
        <h4>{{item.name}}</h4>
        <p>￥ {{item.floor_price}} 元</p>
        <img class="brand-pic" :src="item.pic_url">
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default{
    name:'brandlist',
    props:['brandList'],
    data(){
      return {}
    },
    methods:{
      ...mapMutations({
        isShowtb:'home/changeTabBar'
      }),
      changeBrand(idx){
        var list = this._props.brandList
        var obj = list[idx]
        this.isShowtb(false)
        this.$router.push({name:'branddetail',params:{id:obj.id}})

      }
    }
  }
</script>

<style lang="scss" scoped>
  .brand{
    margin-bottom: 10px;
    background: #FFFFFF;
    .brand-title{
      height: 50px;
      text-align: center;
      line-height: 50px;
      // color: #000000;
      font-size: 16px;
    }
    ul{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li{
        width: 49%;
        height: 126px;
        position: relative;
        margin-bottom: 5px;
      }
      h4,p{
        position: absolute;
        left:5%;
      }
      h4{
        top: 10px;
        font-weight: 400px;
      }
      p{
        top: 30px;
      }
      .brand-pic{
        height: 100%;
        width: 100%;
      }
    }
  }
</style>
