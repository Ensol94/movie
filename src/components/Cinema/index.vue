<template>
  <div class="cinema" >
    <!-- 头部 -->
    <div class="header">
      <ul>
        <li class="left">
          <span class="left_span"> {{ nowcityobj.name }} </span>
          <i class="iconfont icon-you"></i>
        </li>
        <li class="cinemaHeader">
          <span>影院</span>
        </li>
        <li class="iconRight">
          <i class="iconfont icon-search"></i>
        </li>
      </ul>
    </div>
    <!-- 内容 -->
    <div class="mainBox">
      <ul class="allItemBox">
        <li
        v-for="(item,index) in nowCityArr"
        :key="index"
        >
          <div class="leftMain">
            <p>{{ item.name }}</p>
            <span>{{ item.address }} </span>
          </div>
          <div class="rightMain">
            <p>
              ￥{{ Math.ceil(item.lowPrice / 100) }}起
            </p>
            <span>距离未知</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      nowCityObj : {},
      nowCityArr : []
    }
  },
  computed : {
    nowcityobj () {
      this.nowCityObj = this.$store.state.newCityObj
      return this.nowCityObj
    }
  },
  methods : {
    // 获取需要显示的城市
    getCinemaData () {
      axios.get('https://m.maizuo.com/gateway',{
        params : {
          cityId:this.nowCityObj.id,
          ticketFlag:1,
          k:2533238
        },
        headers: {
          "X-Client-Info":'{"a":"3000","ch":"1002","v":"5.0.4","e":"16107668571016653118701569","bc":"440100"}',
          "X-Host": "mall.film-ticket.cinema.list"
        }
      }).then(response => {
        let res = response.data;
        this.nowCityArr = res.data.cinemas;
      })
    }
  },
  created() {
  },
  mounted () {
    this.getCinemaData()
  }
}
</script>

<style lang="less">
  @import url('./index.less');
</style>
