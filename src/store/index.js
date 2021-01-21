import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store({
  state : {
    nowCityName : '北京',
    nowCityId : 0,
    newCityObj : {
      name : '北京',
      id : 110100
    }
  },
  mutations : {
    // 点击的城市对象
    getNowCityName(state,payload){
      state.nowCityName = payload.name;
      state.nowCityId = payload.cityId;
      state.newCityObj.name = state.nowCityName;
      state.newCityObj.id = state.nowCityId;
      return state.newCityObj;
    }
  }
})

export default store;
