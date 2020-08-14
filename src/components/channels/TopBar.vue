<template>
  <div class="topbar">
    <van-tabs v-model="active" @click="changeTab">
      <van-tab
      v-for="item in broCategory"
      :key="item.index"
      :title="item.name"
      >
        <h4 class="channel-title">{{item.name}}</h4>
        <p class="channel-sub-title">{{item.front_name}}</p>
          <ul class="list">
          <li v-for="item in goods" :key="item.index" @click= "changeGoods(item.id)">
            <img :src="item.list_pic_url" alt="">
            <div>{{item.name}}</div>
            <p>￥ {{item.retail_price}} 元</p>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>

  export default {
    name: 'topbar',
    props: ['broCategory', 'goods'],
    data() {
      return {
        active: ""
      }
    },
    watch:{
      active(){
        var arrId = this.getTabId()
        var id= this.$store.state.channelId
        var idx=arrId.indexOf(id)
        this.active = idx
      }
    },
    methods: {
      changeTab(index) {
        var idArr = this.getTabId()
        this.$emit('getId',idArr[index])
      },
      getTabId(){
        var datacg = this._props.broCategory
        var ids = []
        datacg.forEach(item =>{
          ids.push(item.id)
        })
        return ids
      },
			changeGoods(id){
        this.$router.push('/goodsdetail/' + id)
			}
    }
  }
</script>

<style lang="scss" scoped>
  .topbar {
    .van-tabs__content {

      .channel-title {
        height: 50px;
        line-height: 50px;
        font-size: 18px;
        font-weight: 400;
        text-align: center;
        color: #000;
      }

      .channel-sub-title {
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        font-weight: 400;
        text-align: center;
      }

      .list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 10px 10px 0 10px;

        li {
          width: 49%;
          text-align: center;
          margin-bottom: 10px;
          background: #fff;

          div,
          p {
            height: 30px;
            line-height: 30px;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          p {
            color: darkred;
          }
        }
      }
    }
  }
</style>
