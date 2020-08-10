<template>
  <section>
    <div class="new" v-for="(item,index) in categories" :key=item.index >
      <div class="title">{{item.name}}</div>
      <div class="box">
        <div class="goods-show"
        v-for="i in categories[index].goodsList"
        :key=i.index
        @click="onChangeGood(i.id)">
          <img :src="i.list_pic_url" alt="">
          <p>{{i.name}}</p>
          <div>￥ {{i.retail_price}} 元</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'category',
    props: ['categories'],
    data() {
      return {}
    },
    methods:{
      onChangeGood(id){
        this.$router.push('/goodsdetail/' + id)
      }
    }
  }
</script>

<style lang="scss" scoped>
  section {
    margin-bottom: 60px;
    .new {
      margin-bottom: 20px;
      background: #fff;
      .title {
        height: 50px;
        text-align: center;
        line-height: 50px;
        background: #fff;
        font-size: 16px;
      }

      .box {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .goods-show {
          width: 49%;
          text-align: center;
          background: #fff;
          margin-bottom: 10px;

          p {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          div {
            height: 40px;
            line-height: 40px;
            color: red;
          }
        }
      }
    }
  }
</style>
