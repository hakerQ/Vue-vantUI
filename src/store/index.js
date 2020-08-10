import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shade:false,
    content:true,
    tabBar:true,
		isModel:false,
    channelId:'',
    goodsCount:1,
    totalGoods:''
  },
  mutations: {
    changeShade(state,payload){
      state.shade=payload
    },
    changeContent(state,payload){
      state.content=payload
    },
    changeTabBar(state,payload){
      state.tabBar = payload
    },
    cut_channel(state,payload){
      state.channelId = payload
    },
    changeModel(state,payload){
      state.isModel = payload
    },
    changeCount(state,payload){
      state.goodsCount = payload
    },
    addGoods(state,payload){
      state.totalGoods = payload
      localStorage.setItem('num',state.totalGoods)
    }
  },
  actions: {
  },
  modules: {
  }
})
