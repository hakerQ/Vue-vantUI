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
  import {mapMutations} from 'vuex'
  export default{
    name:'channel',
    props:['channel'],
    data(){
      return {}
    },

    methods:{
			...mapMutations({
				isShowcc:'home/cut_channel',
				isShowtb:'home/changeTabBar'
			}),
      onChannel(id){
        this.isShowcc(id)
        this.isShowtb(false)
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
