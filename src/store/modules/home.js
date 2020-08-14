const state = {
  shade:false,
  tabBar:true,
  content:true,
  channelId:'',
}

const getters = {}

const mutations = {
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
  }
}

const actions = {}

export default {
  namespaced:true,
  state,
  getters,
  mutations,
  actions
}
