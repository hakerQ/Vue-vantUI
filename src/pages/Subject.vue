<template>
  <div class="subject">
    <keep-alive>
      <topic :topiclist="topiclist"></topic>
    </keep-alive>
    <div class="change-page">
      <van-button 
      class="pre"
      :class="preDis ? '':'textColor'"
      @click="preNext"
      :disabled="preDis">上一页</van-button>
      <van-button
      class="next"
      :class="nextDis?'':'textColor'"
      @click= "cliNext"
      :disabled="nextDis">下一页</van-button>
    </div>
  </div>
</template>

<script>
  import { GetSub } from '@/request/api.js'
  import topic from '@/components/subject/Topic.vue'
  export default{
    name:'subject',
    data(){
      return {
         page:1,
         totalPages:'',
         topiclist:[],
         preDis:true,
         nextDis:false
      }
    },
    mounted() {
      var params = {
       page: this.page
      }
      this.initGetsub(params)
    },
    methods:{
      preNext(){
        this.page--
        var curPage = this.page
        if(curPage = 1){
          this.preDis = true
          this.nextDis = false
          var params = {
            page: curPage
          }
          this.initGetsub(params)
        }
      },
      cliNext(){
        this.page++
        var curPage = this.page
        var total = this.totalPages
        if(curPage <= total ){
          this.preDis = false
          this.nextDis = true
          var params ={
            page: curPage
          }
          this.initGetsub(params)
        }
      },
      initGetsub(params){
        GetSub(params).then((res)=>{
          this.topiclist = res.data.data
          this.totalPages = res.data.totalPages
        })
      }
    },
    components:{
      topic
    }
  }
</script>

<style lang="scss" scoped>
  .textColor{
    color: darkred;
  }
  .subject{
    .change-page{
      display: flex;
      justify-content: space-between;
      padding-bottom: 60px;
      .pre,.next{
        width: 50%;
      }
    }
  }
</style>
