<template>
  <div class="main_page">
    <div class="main_pageDataBox"
    v-for="(filmItem,filmIndex) in nowFilmData"
    :key="filmIndex"
    >
      <div class="main_img">
        <img :src="filmItem.poster" alt="" class="header_img">
      </div>
      <!-- 详情信息 -->
      <div class="main_details">
        <div class="details_header">
          <div class="header_name">
            <strong>{{ filmItem.name }}</strong>
            <span>{{ filmItem.filmType.name }}</span>
          </div>
          <div class="header_score">
            <span>{{ filmItem.grade }} 分</span>
          </div>
        </div>
        <div class="details_type">
          {{ filmItem.category }}
        </div>
        <div class="details_release_date">
          2020-12-31上映
        </div>
        <div class="details_video_time">
          {{ filmItem.nation  }}| {{ filmItem.runtime ? filmItem.runtime : 0 }}分钟
        </div>
        <div class="details_describe">
          <span>
            {{ filmItem.synopsis }}
          </span>
        </div>
      </div>
      <!-- 演员信息 -->
      <div class="main_actor_message">
        <div class="actor_title">
          演职人员
        </div>
        <ul class="actor_message">
          <li
          v-for="(actorItem,actorIndex) in filmItem.actors"
          :key="actorIndex"
          >
            <div>
              <div class="actor_picture">
                <img :src="actorItem.avatarAddress" alt="" class="picture_style">
              </div>
              <div class="actor_msg">
                <p class="actor_name">{{ actorItem.name }}</p>
                <span class="actor_role">{{ actorItem.role }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 剧照 -->
      <div class="main_photos">
        <div class="main_photosName">
          <span class="photo_left">剧照</span>
          <span class="main_right">全部( {{ filmItem.photos.length }} ) </span>
        </div>
        <div class="main_photoBox">
          <ul class="photoBox_ul">
            <li
               v-for="(photoItem,photoIndex) in filmItem.photos"
               :key="photoIndex"
            >
              <img :src="photoItem" alt="">
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      nowFilmId : 0,
      nowFilmData : {}
    }
  },
  methods : {
    getNowPageData() {
      axios.get('https://m.maizuo.com/gateway',{
        params : {
          filmId: this.nowFilmId
        },
        headers : {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16107668571016653118701569","bc":"610900"}',
          'X-Host': 'mall.film-ticket.film.info'
        }
      }).then(response => {
        let res = response.data;
        this.nowFilmData = res.data;
        console.log(this.nowFilmData);
      })
    }
  },
  created () {
    this.nowFilmId = this.$route.params.id
    this.getNowPageData()
  }
}
</script>

<style lang="less">
@import url('./index.less');
</style>
