<template>
  <van-grid :column-num="channel.length">
    <van-grid-item
    class="itemStyle"
    v-for="item in channel"
    @click = "onChannel(item.id)"
    :key="item.index"
    :icon="item.icon_url"
    :text="item.name"
    />

  </van-grid>
</template>

<script>

  export default{
    name:'channel',
    props:['channel'],
    data(){
      return {}
    },
    
    methods:{
      onChannel(id){
        this.$store.commit('cut_channel',id)
        this.$store.commit('changeTabBar',false)
        this.$router.push({path:'/channels/' + id})
      }
    }
  }
</script>

<style lang="scss" scoped>
/deep/ .van-icon__image {
    width: 28px;
    height: 28px;
  }
</style>
