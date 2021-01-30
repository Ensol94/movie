<template>
  <div>
    <div class="film-list-content">
      <div class="nowPlayingList-wrap" data-enter-time="1611111926">
        <ul
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="100"
          class="nowPlayingList"
        >
          <router-link tag="li" :to="'/detail/' + filmItem.filmId" class="nowPlayingFilm-item"
          v-for="filmItem in filmData"
          :key="filmItem.filmId">
            <a href="#/film/5268" class="nowPlayingFilm-wrap"
            style="color=#797d82"
              ><div class="lazy-img nowPlayingFilm-img">
                <div
                  data-v-21c202bd=""
                  class="lazy-img-wrap">
                  <img
                    data-v-21c202bd=""
                    :src="filmItem.poster"
                    class="target-img"
                  />
                </div>
              </div>
              <div class="nowPlayingFilm-info" style="float: left">
                <div class="nowPlayingFilm-name info-col">
                  <span class="name">{{ filmItem.name }}</span
                  ><span class="item">{{ filmItem.item.name }}</span>
                </div>
                <div
                  class="nowPlayingFilm-grade info-col"
                  style="visibility: visible"
                >
                  <span class="label">观众评分 </span
                  ><span class="grade">{{ filmItem.grade }}</span>
                </div>
                <div class="nowPlayingFilm-actors info-col">
                  <span class="label" >主演：{{ filmItem.actors.map(item => item.name).join(' ') }}</span
                  >
                </div>
                <div class="nowPlayingFilm-detail info-col">
                  <span class="label">{{ filmItem.nation }} | {{ filmItem.runtime }} 分钟</span>
                </div>
              </div>
              <div class="nowPlayingFilm-buy" style="float: right">购票</div></a
            >
          </router-link>
        </ul>
        <p v-if="pageNum >= pages" class="showP">没有更多了</p>
        <button class="btn_more" @click="nowPageData"
          v-else
        >点击加载更多</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      filmData : [],
      pageNum : 1,
      pageSize : 10,

      total : 0
    }
  },
  computed : {
    // 一个多少页
    pages () {
      return Math.ceil(this.total / this.pageSize);
    }
  },
  methods : {
    getDetailData () {
      axios.get('https://m.maizuo.com/gateway',{
        params: {
          cityId:440100,
          pageNum: this.pageNum,
          pageSize:this.pageSize,
          type:1,
          k:3807867
        },
        headers : {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16107668571016653118701569","bc":"440100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(response => {
        let res = response.data;
        console.log(res)
        if (res.status === 0) {
          this.filmData = this.filmData.concat(res.data.films);
          this.total = (res.data.total - 23);
          console.log(this.total)
        }
      })
      return this.filmData
    },
    nowPageData () {
      this.pageNum++;
      this.getDetailData();
    }
  },

  created() {
    this.getDetailData();
  },
}
</script>


<style lang="less">
@import url('./index.less');
</style>
