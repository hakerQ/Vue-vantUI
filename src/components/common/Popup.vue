<template>
  <transition name="fade">
    <div class="popup-wrap">
      <van-search
      v-model="value"
      show-action
      placeholder="520元礼包抢先领"
      @search="onSearch"
      @input="onInput">
        <template #action>
          <div @click="cancel">取消</div>
        </template>
      </van-search>

      <div class="history-hot" v-if="showHishot">
        <div class="history" v-if="hisHidden">
          <div class="title">
            <h2>历史记录</h2>
            <van-icon name="delete" size="28px" @click="onDelete"/>
          </div>
          <div class="content">
            <van-tag plain
            v-for="item in historyList"
            :key="item.index"
            @click="onChange(item)"
            >{{item}}</van-tag>
          </div>
        </div>

        <div class="hot">
          <div class="title">
            <h2>热门搜索</h2>
          </div>
          <div class="content">
            <van-tag
            plain
            v-for="item in hotList"
            :key="item.index"
            :class="item.is_hot == 1 ? 'activeHot':''"
            @click="onChange(item.keyword)"
            >
            {{item.keyword}}
            </van-tag>
          </div>
        </div>
      </div>

      <div class="main">
        <!-- 下拉菜单 -->
        <dropdown v-if="isDropdown"></dropdown>
        <!-- 商品展示 -->
        <ul class="list" v-if="isGoods">
        	<li v-for="item in goodsList" :key="item.index">
            <img :src="item.list_pic_url" alt="">
            <div>{{item.name}}</div>
            <p>￥ {{item.retail_price}} 元</p>
          </li>
        </ul>
        <!-- 空状态 -->
        <van-empty image="search" description="您搜索的产品不存在" v-if="isEmpty"/>
        <!-- list列表 -->
        <van-list
          v-if="isList"
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load = "onLoad"
        >
          <van-cell
          v-for="item in list"
          :key="item.index"
          :title="item.keyword"
          @click="onCell(item.keyword)"/>
        </van-list>
      </div>
    </div>
  </transition>
</template>

<script>
  import {GetSearch,GetClearHis,GetSearchHelper,GetGoods} from '@/request/api.js'
  import {Toast} from 'vant'
  import dropdown from './Dropdown.vue'
  export default{
    name:'popup',
    data(){
      return {
        value:'',
        showHishot:true,
				hisHidden:true,
        isDropdown:false,
        isEmpty:false,
        isList:false,
        isGoods:false,
				loading:false,
				finished:false,
        historyList:[],
        hotList:[],
        goodsList:[],
        list:[]
      }
    },
    components:{
      dropdown
    },
    mounted() {
      GetSearch().then((res)=>{
        console.log(res)
        var data = res.data
        this.historyList = data.historyKeywordList
        this.hotList = data.hotKeywordList
      })

    },
    methods:{
      getGoodslist(data){
        this.isDropdown = true
        GetGoods(data).then((res) => {
          var data = res.data
          console.log(data)
          this.goodsList = data.goodsList
          if(this.goodsList.length<1){
            this.isEmpty = true
            this.isGoods = false
          }

        })
      },

      onSearch(){
        console.log('search------')
        this.showHishot = false
        this.isDropdown = true
        var params = {
          keyword:this.value,
        }
        this.getGoodslist(params)
        this.isGoods = true
        this.isList = false
      },

      onChange(keyword){
        this.value = keyword
        this.showHishot = false
        this.isDropdown = true
        this.getGoodslist({keyword})
        this.isGoods = true
      },

      onInput(){
        this.showHishot = false
        this.isDropdown = false
        var val = this.value
        var hList = this.hotList
        var arr = []
        var regex= /^./
        for(var i = 0; i<hList.length;i++){
          var listArr = hList[i].keyword
          arr.push(listArr)
        }
        var subVal = val.substr(0,1)
        var items =arr.filter((item)=>{
          var subItem = item.substr(0,1)
          if(subVal == subItem){
            return item
          }else if(val !== item){
            this.isGoods = false
            this.isEmpty = false
          }
        })
        if(!val){
          this.finished = false
        }else{
          this.finished= true
        }
        var addKey = items.map((item)=> ({keyword:item}))
        this.list = addKey
        this.isList= true
      },
      onCell(keyword){
        console.log(keyword)
        this.value = keyword

        this.getGoodslist({keyword})
        this.isGoods = true
        this.isList = false
      },
      //取消，返回上一层
      cancel(){
        this.$router.back()
        this.$store.commit('changeShade',false)
        this.$store.commit('changeContent', true)
        this.$store.commit('changeTabBar', true)
      },
      onDelete(){
        GetClearHis().then((res) => {
           console.log(res.errno)
           if(res.errno == 0){
             console.log('del')
             this.hisHidden = false;
             Toast({
               message:'删除成功',
               icon:'success',
               duration:600
             })
           }
        })
      },
      onLoad(){
        this.showHishot = false
        this.isDropdown = false
        GetSearch().then((res)=>{
          var data = res.data
          this.list = data.hotKeywordList
        })
        this.loading = false;
        this.finished = true;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.3s linear;
    transform: translateX(0);

  }

  .fade-enter,
  .fade-leave {
    transform: translateX(-100%);
  }

  .fade-leave-to {
    transform: translateX(-100%);
  }

  .popup-wrap{
    width: 100%;
    height:100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #efefef;
    z-index: 1000;
    .history-hot{
      .history,.hot{
        padding: 0 10px;
        margin-bottom: 20px;
        background: #fff;
        .title{
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 40px;
          line-height: 40px;
          h2{
            font-size: 21px;
            font-weight: 400;
          }
        }
        .content{
          .van-tag{
            margin: 0 10px 10px 0;
            padding: 2px 5px;
          }
          .activeHot{
             color: red;
          }
        }
      }
    }
    .main{
      .list{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 0 10px;
        padding-top: 10px;
        li{
          width: 49%;
          background: #fff;
          margin-bottom: 10px;
          text-align: center;
          div{
            height: 30px;
            line-height: 30px;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          p{
            color: darkred;
          }
        }
      }
    }

  }

</style>
