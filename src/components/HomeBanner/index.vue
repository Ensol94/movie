<template>
  <div class="banner">
    <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

</div>
  </div>
</template>
<script>
export default {
  mounted () {
    new Swiper ('.swiper-container', {
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
  }
}
</script>

<style lang="less">
.banner {
  .swiper-container {
    height: 210px;
  }
}
</style>
