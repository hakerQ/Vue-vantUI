<template>
  <div class="sort">
    <van-sidebar v-model="activeKey"  @change="onChange">
        <van-sidebar-item
         v-for="item in sortlist"
         :key=item.id
         :title="item.name"

    />
    </van-sidebar>
    <div class="main">
       <div class="bannar">
         <div>{{newCur.front_name}}</div>
         <img :src="newCur.wap_banner_url" alt="">
       </div>
       <section>
         <span></span>
         <div>{{newCur.name}}分类</div>
       </section>
       <van-grid :column-num="3">
         <van-grid-item
         v-for="item in newCur.subCategoryList"
         :key="item.index"
         :icon="item.wap_banner_url"
         :text="item.name" />
       </van-grid>

    </div>
  </div>
</template>

<script>
  import tcontent from './SortContent'
  import { GetCurrentList } from '@/request/api.js'
  export default {
    name: 'sortselect',
    props: ['sortlist','curlist'],
    data() {
      return {
        activeKey:0,
        newCur:this.curlist
      }
    },
    watch: {
       curlist(newVal,oldVal){
         this.newCur = newVal
       }
    },
    methods: {
      onChange(index){
        let cursort = this._props.sortlist[index]
        var params = {
          id: cursort.id
        }
        GetCurrentList(params).then((res) => {
          console.log(res.data.currentCategory)
          this.newCur = res.data.currentCategory
        })
      }
    },
    components:{
      tcontent
    }
  }
</script>

<style lang="scss" scoped>
.sort{
  display: flex;
  background: #fff;
  .van-sidebar{
    width: 20%;
    height: calc(100vh - 104px);
    background: #f7f8fa;
  }
  .van-sidebar-item--select,
  .van-sidebar-item--select:active {
    background-color: #fff
  }
  .main{
    flex: 1;
    .bannar{
      width: 96%;
      margin: 10px auto;
      position: relative;
      div{
        width: 100%;
        height: 100%;
        color: #fff;
        position: absolute;
        text-align: center;
        line-height: 10rem;
      }
      img{
        width: 100%;
        box-shadow: 0 0 5px #000;
        border-radius: 5px;
        height: 140px;
        display: block;
      }
    }
    section{
      position: relative;
      height: 70px;
      line-height: 70px;
      // text-align: center;
      span,div{
        position: absolute;
        margin: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
      span{
        height: 2px;
        width: 50%;
        background: #666;
      }
      div{
        width: 30%;
        height: 42px;
        line-height: 42px;
        background: #fff;
        text-align: center;
      }
    }
    .van-grid{
      /deep/ .van-icon__image {
          width: 28px;
          height: 28px;
        }
    }
  }
}
</style>
