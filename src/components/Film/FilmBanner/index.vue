<template>
  <div class="banner">
    <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide"
        v-for="(slideItem,slideIndex) in getSlide"
        :key="slideIndex"
        ><img :src="slideItem.url" alt=""></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data () {
    return {
      getSlide : []
    }
  },

  methods : {
    getSlideData () {
      axios.get('/json/slideShow.json').then(response => {
        let res = response.data;
        this.getSlide = res.data;


        // 真实获取数据之后，进行轮播
        // setTimeout(() => {
        // }, 500);  延时器方式
        this.$nextTick(() => {
          let mySwiper =  new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
            // 自动轮播
            autoplay: {
              dalay: 1000
            }
          })
        })
      })
    }
  },
  mounted () {
    this.getSlideData();

  },
  updated () {
  }

}
</script>

<style lang="less">
.banner {
  .swiper-container {
    height: 210px;
    .swiper-slide{
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
