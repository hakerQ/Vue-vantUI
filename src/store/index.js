import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home.js'
import goodsdetail from './modules/goodsdetail.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    home,
    goodsdetail
  }
})
