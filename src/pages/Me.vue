<template>
  <div class="me-user">
    <div class="me-top">
       <van-image width="84" height="84" src="https://img.yzcdn.cn/vant/cat.jpeg" round></van-image>
       <h2>
         <span>用户名</span>
         <span>&gt;</span>
       </h2>
    </div>
    <van-grid square :column-num="3">
      <van-grid-item v-for="value in 11" :key="value" icon="photo-o" text="文字" />
    </van-grid>
  </div>
</template>

<script>
  import {GetUser} from '@/request/api.js'
	export default{
		name:'me',
		data(){
			return {

			}
		},
    mounted() {
      // GetUser().then((res) => {
      //   console.log(res)
      // })
    }
	}
</script>

<style lang="scss" scoped>
  .me-user{
     .me-top{
        display: flex;
        align-items: center;
        padding: 30px 2%;
        background: #333;
        h2{
          flex: 1;
          display: flex;
          justify-content: space-between;
          margin-left: 10px;
          color: #fff;
          font-size: 21px;
          font-weight: 400;
        }
     }
  }
</style>
