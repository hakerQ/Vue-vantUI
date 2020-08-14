const state = {
  isModel:false,
  goodsCount:1,
  totalGoods:''
}

const getters = {}

const mutations = {
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
}

const actions = {}

export default {
  namespaced:true,
  state,
  getters,
  mutations,
  actions
}
