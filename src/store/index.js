import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store({
  state : {
    nowCityName : '北京'
  },
  mutations : {
    getNowCityName(state,payload){
      return state.nowCityName = payload;
    }
  }
})

export default store;
