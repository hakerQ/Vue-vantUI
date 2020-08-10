<template>
  <div class="goodsdetail">
    <van-swipe>
      <van-swipe-item v-for="item in gallery" :key=item.index>
        <img :src="item.img_url" alt="">
      </van-swipe-item>
    </van-swipe>
    <van-row>
      <van-col span="8">
        <van-icon name="checked" color="#aa0000"/>
        30天无忧退货
      </van-col>
      <van-col span="8">
        <van-icon name="checked" color="#aa0000"/>
        48小时快速退费
      </van-col>
      <van-col span="8">
        <van-icon name="checked" color="#aa0000"/>
        满88元免邮费
      </van-col>
    </van-row>
    <div class="goods-info">
      <h4>{{goodsInfo.name}}</h4>
      <div>{{goodsInfo.goods_brief}}</div>
      <p>￥ {{goodsInfo.retail_price}} 元</p>
    </div>

    <van-cell value="点击购买"  is-link @click="openModel"/>

    <div class="canshu">
       <h3>商品参数</h3>
       <ul>
         <li v-for="item in attr" :key=item.index>
           <small>{{item.name}}</small>
           <big>{{item.value}}</big>
         </li>
       </ul>
    </div>
    <div class="box" v-html="goodsInfo.goods_desc"></div>
    <div class="issue">
      <div class="m-title">
         <span></span>
         <h3>常见问题</h3>
      </div>
      <ul>
        <li v-for="item in issue" :key=item.index>
          <h3><i></i>{{item.question}}</h3>
          <div>{{item.answer}}</div>
        </li>
      </ul>
    </div>

    <div class="look">
      <div class="m-title">
        <span></span>
        <h3>大家都在看</h3>
      </div>
      <ul>
      	<li v-for="item in goodsLook" :key=item.index @click="changeGood(item.id)">
          <img :src="item.list_pic_url" width="100%" alt="">
          <div>{{item.name}}</div>
          <p>￥ {{item.retail_price}} 元</p>
        </li>
      </ul>
    </div>

    <transition name="fade">
      <model v-if="$store.state.isModel" :goods-info="goodsInfo"></model>
    </transition>


    <van-goods-action>
      <van-goods-action-icon icon="star-o" text="未收藏" v-if="showIcon_o" @click="onCliIcon_o"/>
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" v-if="showIcon" @click="onCliIcon"/>
      <van-goods-action-icon icon="cart-o" text="购物车" :badge="num"/>
      <van-goods-action-button type="danger" text="立即购买" />
      <van-goods-action-button type="warning" text="加入购物车" @click='addCar'/>
    </van-goods-action>
  </div>
</template>

<script>
  import {GetGoodsDetail,GetGoodsRelated} from '@/request/api.js'
  import model from '@/components/goodsdetail/Model'
  export default{
    name:'goodsdetail',
    inject:['reload'],
    data(){
      return {
        goodsInfo:{},
        issue:[],
        goodsLook:[],
        gallery:[],
        attr:[],
        showIcon_o: true,
        showIcon:false,
        num:0
      }
    },
    components:{model},
    mounted() {
      var val = localStorage.getItem('num')
      this.num = Number(val)
      var {id} = this.$route.params
      GetGoodsDetail({id}).then(res=>{
        if(res.errno==0){
          this.goodsInfo = res.data.info
          this.issue = res.data.issue
          this.gallery = res.data.gallery
          this.attr = res.data.attribute
        }
      })
      GetGoodsRelated({id}).then(res => {
        if(res.errno==0){
          this.goodsLook = res.data.goodsList
        }
      })
      this.$store.commit('changeTabBar',false)
    },
    methods:{
      openModel(e){
        this.$store.commit('changeModel',true)
      },
      changeGood(id){
        GetGoodsDetail({id}).then(res=>{
          if(res.errno==0){
            this.goodsInfo = res.data.info
            this.issue = res.data.issue
            this.$router.push('/goodsdetail/' + id)
            this.reload()
          }
        })
      },
      addCar(){
         var bool = this.$store.state.isModel
         if(!bool){
           this.$store.commit('changeModel',true)
         }else{
           this.$store.commit('changeModel',false)
          var cou = Number(this.$store.state.goodsCount)  //要添加的数量
          if(this.num == ''){ //如果没有添加商品
            this.num = cou
            this.$store.commit('addGoods', this.num)  //存为总数量
          }else{
            var all = Number(localStorage.getItem('num'))
            all += cou
            this.num = all
            this.$store.commit('addGoods',all)
          }
         }
      },
      onCliIcon_o(){
        this.showIcon_o = false
        this.showIcon = true
      },
      onCliIcon(){
        this.showIcon_o = true
        this.showIcon = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .4s linear;
  }
  .fade-enter,.fade-leave-to{
    opacity: 0 ;
  }
  .goodsdetail{
    padding-bottom: 60px;
    .van-row{
      height: 28px;
      line-height: 28px;
      background: #efefef;
      text-align: center;
    }
    .goods-info{
      background: #fff;
      line-height: 40px;
      text-align: center;
      padding: 20px 0;
      border-bottom: 1px solid #ccc;
      h4{
        font-size: 20px;
        font-weight: normal;
      }
      p{
        color: darkred;
      }
    }
    .canshu{
      padding: 10px 4%;
      margin-top: 20px;
      background: #fff;
      h3{
        height: 50px;
        line-height: 50px;
        font-size: 16px;
      }
      ul{
        li{
          display: flex;
          justify-content: space-between;
          height: 40px;
          line-height: 40px;
          background: #efefef;
          margin-bottom: 10px;
          border-radius: 5px;
          small{
            width: 22%;
            text-align: right;
            margin-right: 10px;
          }
          big{
            flex: 1;
          }
        }
      }
    }
    .issue{
      background: #fff;
      .m-title{
        position: relative;
        height: 50px;
        line-height: 50px;
        span,h3{
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
        }
        span{
          height:2px;
          width: 50%;
          background: #ccc;
        }
        h3{
          width: 30%;
          text-align: center;
          background: #fff;
          font-size: 16px;
        }
      }
      ul{
        padding: 0 16px;
        li{
          background: #fff;
          h3,div{
            padding-left: 20px;
            padding-bottom: 10px;
          }
          h3{
            position: relative;
            i{
              height: 4px;
              width: 4px;
              background: darkred;
              position: absolute;
              top: 50%;
              left: 0;
              margin-top: -2px;
            }
          }
          div{
            color: #666;
            font-size: 12px;
          }
        }
      }
    }
    .look{
      background: #fff;
      .m-title{
        position: relative;
        height: 50px;
        line-height: 50px;
        span,h3{
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
        }
        span{
          height:2px;
          width: 50%;
          background: #ccc;
        }
        h3{
          width: 30%;
          text-align: center;
          background: #fff;
          font-size: 16px;
        }
      }
      ul{
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        flex-wrap: wrap;
        padding-top: 10px;
        background: #fff;
        li{
          width: 49%;
          text-align: center;
          margin-bottom: 10px;
          div,p{
            height: 30px;
            line-height: 30px;
            text-align: center;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          div{
            color: #000;
          }
          p{
            color: darkred;
          }
        }
      }
    }
  }
</style>
