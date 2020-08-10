<template>
  <div class="hotgoods">
    <div class="hotgoods-title">人气推荐</div>
    <van-card v-for="item in hotgoods"
    :key=item.index
    :price="item.retail_price"
    :desc="item.goods_brief"
    :title="item.name"
    :thumb="item.list_pic_url" 
    lazy-load/>

  </div>
</template>

<script>
  export default {
    name: 'hotgoods',
    props: ['hotgoods'],
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .hotgoods {
    padding: 0 15px;
    background: #fff;
    margin-bottom: 10px;
    .hotgoods-title {
      height: 50px;
      text-align: center;
      line-height: 50px;
      background: #fff;
      font-size: 16px;
      border-bottom: 1px solid #ccc;
    }
    .van-card__title{
      padding-bottom: 10px;
    }

  }
</style>
