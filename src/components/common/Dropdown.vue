<template>
  <van-dropdown-menu active-color="#EE0A24">
    <van-dropdown-item title="综合" disabled/>
    <van-dropdown-item title="价格" v-model="dropPrice" :options="optoinPri" @change="changePrice(value)"/>
    <van-dropdown-item title="分类" v-model="dropCategory" :options="optionsCg"/>
  </van-dropdown-menu>
</template>

<script>
  export default{
    name:'dropdown',
    data(){
      return {
        dropPrice:'',
        dropCategory:'all',
        optoinPri:[
          {text:'价格由高到低',value:'desc'},
          {text:'价格由低到高',value:'asc'}
        ],
        optionsCg:[
          {text:'全部', value:'all'}
        ]
      }
    },
    methods:{
      changePrice(){
           console.log('changeprice-------------')
      }
    }
  }
</script>

<style>
</style>
