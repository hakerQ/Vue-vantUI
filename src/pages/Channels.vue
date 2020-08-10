<template>
  <div class="channels">
     <topbar :broCategory="broCategory" :goods = "goods" @getId="getId"></topbar>
  </div>
</template>

<script>
  import { GetCategory, GetGoods } from '@/request/api.js'
  import topbar from '@/components/channels/TopBar.vue'
  export default {
    name:'channels',
    data(){
      return {
        broCategory:'',
        goods:'',
        id:''
      }
    },
    components:{
      topbar
    },
    watch:{
      id(newId,oldId){
        if(oldId!=''){
          this.$router.push({path:'/channels/'+newId})
        }
      }
    },
    mounted() {
      var {id} = this.$route.params
      var is_id= this.$route.params.id
      var params= {
        categoryId:is_id,
      }
      GetCategory({id}).then(res =>{
        // console.log(res)
        var data = res.data
        this.broCategory = data.brotherCategory
        this.curcategory = data.currentCategory
      })
      this.getGoodsData(params)
    },

    onScroll(){

    },
    methods:{
      getId(id){
        this.id = id
        var params = {
          categoryId:id
        }
        this.getGoodsData(params)

      },
      getGoodsData(params){
        GetGoods(params).then(res => {
          // console.log(res)
          var data = res.data
          this.goods = data.goodsList
          // console.log(this.goods)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .channels{
    width: 100%;
    height: 100%;
  }
</style>
