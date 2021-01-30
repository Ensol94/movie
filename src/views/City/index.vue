<template>
  <div class="main">
    <!-- 头部 -->
    <div class="headerCity">
      <div class="left">
        <span>
          <i class="iconfont icon-guanbi"></i>
        </span>
      </div>
      <div class="title">当前城市 - {{ nowCityName }}</div>
    </div>
    <!-- 搜索 -->
    <div class="search">
      <div class="input_wrap">
        <i class="iconfont icon-search search-icon"></i>
        <input type="text" placeholder="输入城市首字母" class="search-input"
        v-model="searchValue"
        >
      </div>
    </div>
    <!-- 城市内容 -->
    <div class="mint" v-if="searchValue === ''">
      <ul class="mint-indexlist-content">
        <div class="recommend-city">
          <div class="gprs-city">
            <div class="city-index-title">
              GPS定位你所在城市
            </div>
            <ul class="city-index-detail cleanfix">
              <li class="city-item-detail city-item-detail-gprs">
                <div class="city-item-text">
                  定位失败
                </div>
              </li>
            </ul>
          </div>
          <div class="hot-city">
            <div class="city-index-title">
              热门城市
            </div>
            <ul class="city-index-detail cleanfix">
              <li class="city-item-detail"
              v-for="(hotItem,hotIndex) in filterHotCity"
              :key="hotIndex"
              >
                <div class="city-item-text">
                  {{ hotItem.name }}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <li class="mint-indexsection city-index-section"
        v-for="(item,index) in filterCityData"
        :key="index"
        :id="item.py"
        >
          <p class="mint-indexsection-index">
            {{ item.py }}
          </p>
          <ul>
            <li class="city-item-detail-white"
            v-for="(cityItem,cityIndex) in item.list"
            :key="cityIndex"
            @click="getNowCityName(cityItem)"
            >
              <div class="city-item-text in-section">
                {{ cityItem.name }}
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <div class="mint-indexlist-nav">
        <ul class="mint-indexlist-navlist">
          <li class="mint-indexlist-navitem"
          v-for="(navItem,navIndex) in filterCityData"
          :key="navIndex"
          @click="lookCity(navItem.py)"
          >
            {{ navItem.py }}
          </li>
        </ul>
      </div>
    </div>
    <!-- 搜索城市内容 -->
    <div class="getSearch" v-else>
      <ul
      >
        <li
        v-for="(shItem,shIndex) in getSearchVal.list"
        :key="shIndex"
        >{{ shItem.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data () {
    return {
      searchValue : '',
      searchObj: {},
      cityData: [],
      isHotArr: []
    }
  },
  computed : {
    // 过滤城市数据
    filterCityData () {
      let hash = {}
      let i =0;
      let res = [];
      this.cityData.filter(item => {
        // 获取城市首次出现的城市字母
        let filterLetter = item.pinyin.substr(0,1).toUpperCase();
        if (hash[filterLetter]) {
          let index = hash[filterLetter] - 1;
          res[index].list.push(item)
        } else {
          hash[filterLetter] = ++i;
          let obj = {};
          obj.py = filterLetter;
          obj.list = [item];
          res.push(obj);
        }
      })
      return res.sort(function(a,b) {
        return a.py.charCodeAt() - b.py.charCodeAt() ;
      });
    },
    // 获取热门城市
    filterHotCity () {
      this.cityData.filter(item => {
        if(item.isHot === 1){
          this.isHotArr.push(item);
        }
      })
      return this.isHotArr;
    },
    // 获取当前城市数据
    nowCityName () {
      console.log(this.$store.newCityObj)
      return this.$store.state.nowCityName
    },
    getSearchVal () {
      let searchV = this.filterCityData;
      searchV.filter(item => {
        if (this.searchValue === item.py) {
          this.searchObj = item;
        }
      })
      return this.searchObj;
    }
  },
  methods : {
    // 请求城市数据
    initGetCityData () {
      axios.get('./json/citydata.json')
      .then(response => {
        let res = response.data;
        if(res.status === 0) {
          this.cityData = res.data.cities;
        } else {
          console.error('请求错误')
        }
      })
    },
    /**
     * 右侧字母点击
     * 左侧进行变换
     */
    lookCity (py) {
      // 得到左侧距离顶部的距离
      let el = document.getElementById(py);
      // 操作左侧距离顶部距离，进行定位
      document.documentElement.scrollTop = el.offsetTop;
    },
    //  切换城市
    /**
     *  nowName 点击的城市对象
     */
     getNowCityName(nowCityObj){
      return this.$store.commit('getNowCityName',nowCityObj)
    }

  },
  mounted () {
    this.initGetCityData();
  }
}
</script>

<style lang="less">
@import url('./index.less');
</style>
