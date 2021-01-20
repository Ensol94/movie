<template>
  <div class="film">
    <router-link to="/city" tag="div" class="goCity">
      <span>{{ nowCityData }}</span>
      <i class="iconfont icon-you" font-size="12px"></i>
    </router-link>
    <FilmBanner></FilmBanner>
    <FilmTabs></FilmTabs>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapState } from 'vuex'

import FilmBanner from './FilmBanner'
import FilmTabs from './FilmTabs'

export default {
  // 默认方式
  computed : {
    nowCityData () {
      return this.$store.state.nowCityName
    }
  },
  components : {
    FilmBanner,
    FilmTabs
  }
}
</script>
<style lang="less">
.film {
  .goCity{
    display: flex;
    position: fixed;
    left:15px;
    top: 15px;
    background: #333;
    color: white;
    width: 50px;
    height: 20px;
    align-items: center;
    z-index: 2;
    border-radius: 3px;
    font-size: 14px;
    text-align: center;
    background-color: Thistle;
  }
}
</style>
