<template>
  <div class="home">
    <div>
      <transition name="shade">
        <div class="popup-bg" v-if="$store.state.home.shade"></div>
      </transition>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>

    <div v-if="$store.state.home.content">
      <van-search v-model="value" disabled shape="round" placeholder="请输入搜索关键词" @click="ToPopup" />
      <!-- 轮播组件 -->
      <my-swipe :swipe="swipe"></my-swipe>
      <!-- 横幅组件 -->
      <channel class="channel" :channel="channel"></channel>
      <!-- 品牌组件 -->
      <brand-list :brandList="brandList"></brand-list>
      <!-- 新品组件 -->
      <new-goods :newgoods="newgoods"></new-goods>
      <!-- 人气组件 -->
      <hot-goods :hotgoods="hotgoods"></hot-goods>
      <!-- 专题组件 -->
      <special :special="special"></special>
      <!-- 分类组件 -->
      <category :categories="categories"></category>
    </div>
  </div>
</template>

<script>
  import {
    GetHomeData,
    Getspecial,
    GetBrand
  } from '@/request/api.js'
  import { mapMutations }  from 'vuex'
  import mySwipe from '@/components/home/Swipe.vue'
  import channel from '@/components/home/Channel.vue'
  import brandList from '@/components/home/Brand.vue'
  import newGoods from '@/components/home/NewGoods.vue'
  import hotGoods from '@/components/home/HotGoods.vue'
  import special from '@/components/home/Special.vue'
  import category from '@/components/home/Category.vue'

  export default {
    name: 'home',
    data() {
      return {
        value: '',
        swipe: [],
        channel: [],
        brandList: [],
        newgoods: [],
        hotgoods: [],
        special: [],
        categories: []
      }
    },
    components: {
      mySwipe,
      channel,
      brandList,
      newGoods,
      hotGoods,
      special,
      category
    },
    mounted() {
      GetHomeData().then((res) => {
        console.log(res)
        let { ...data
        } = res.data
        this.swipe = data.banner
        this.channel = data.channel
        this.brandList = data.brandList
        this.newgoods = data.newGoodsList
        this.hotgoods = data.hotGoodsList
        this.special = data.topicList
        this.categories = data.categoryList
      })
    },
    methods: {
      ...mapMutations({
        isShowtb:'home/changeTabBar',
        isShowsd:'home/changeShade',
        isShowct:'home/changeContent'
      }),
      ToPopup() {
        this.$router.push('/home/popup')
        this.isShowtb(false)
        this.isShowsd(true)
        setTimeout(()=>{
          this.isShowct(false)
        },400)
      }
    },

  }
</script>

<style lang="scss" scoped>
  .home {

    .shade-enter-active,
    .shade-leave-active{
      transition: opacity .3s;
    }
    .shade-enter,
    .shade-leave-to{
      opacity: .7;
    }

    .fade-enter-active,
    .fade-leave-active {
      transition: all 0.3s linear;
      transform: translateX(0);
    }
    .fade-enter,
    .fade-leave {
      transform: translateX(100%);
    }
    .fade-leave-to {
      transform: translateX(100%);
    }


    div{
      .popup-bg {
       // width: 100%;
       // height:100%;
       // position: fixed;
       // top: 0;
       // bottom: 0;
       // left: 0;
       // right: 0;
       // background: rgba(0,0,0,.6);
       // z-index:9;
      }
    }


    .channel {
      margin-bottom: 20px;
    }

  }
</style>
