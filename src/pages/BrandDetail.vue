<template>
  <div class="brandtetail">
    <div class="top">
      <img :src="brandInfo.app_list_pic_url" alt="">
      <div>{{brandInfo.name}}</div>
    </div>
    <div class="footer">
      <p>{{brandInfo.simple_desc}}</p>
    </div>
  </div>
</template>

<script>
  import {GetBrand} from '@/request/api.js'
  export default{
    name:'brandtetail',
    data(){
      return {
        brandInfo:{}
      }
    },
    mounted() {
      var {id} = this.$route.params
      GetBrand({id}).then(res=>{
        this.brandInfo = res.data.brand
      })

    }
  }
</script>

<style lang="scss" scoped>
.brandtetail{
  width: 100%;
  height: 100%;
  position: absolute;
  background: #efefef;
  z-index: 2;
  .top{
    position: relative;
    img{
      width: 100%;
      height: 150px;
    }
    div{
      position: absolute;
      top:50%;
      left: 50%;
      transform: translate(-50%,-50%);
      color: #fff;
      font-size: 20px;
      text-decoration: underline;
    }
  }
  .footer{
    padding: 20px 10px;
    background: #fff;
    p{
      font-size: 18px;
      text-align: center;
      color: #666;
    }
  }
}
</style>
