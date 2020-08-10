<template>
  <div class="classsify">
    <van-search v-model="value" placeholder="请输入搜索关键词" shape="round"/>
    <sort :sortlist = "sortlist" :curlist = "curlist"></sort>
  </div>
</template>

<script>
  import {GetClassify} from '@/request/api.js'
  import sort from '@/components/classify/SortSelect.vue'
  export default{
    name:'classify',
    data(){
      return {
        value:'',
        sortlist:[],
        curlist:[]
      }
    },
    mounted(){
      GetClassify().then((res) => {
        console.log(res)
        let data = res.data
        this.sortlist = data.categoryList
        this.curlist = data.currentCategory
      })

    },
    components:{
      sort
    }
  }
</script>

<style lang="scss" scoped>
</style>
