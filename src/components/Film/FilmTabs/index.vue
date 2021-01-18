<template>
  <div class="tabs">
    <ul class="tabs_ul">
      <router-link tag="li" to="/film/nowPlaying" class="tab_nowPlaying">
        <span>正在热映</span>
      </router-link>
      <router-link tag="li" to="/film/comingSoon" class="tab_comingSoon">
        <span>即将上映</span>
      </router-link>
    </ul>
  </div>
</template>
<style lang="less">
  .tabs {
    position: relative;
    .tabs_ul{
      height: 49px;
      display: flex;
      text-align: center;
      overflow-x: auto;
      overflow-y: hidden;
      align-items: center;
      li {
        width: 100%;
      }
      .router-link-active {
        color: #ff5f16;
      }
    }
     ::after {
      content: " ";
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 1px;
      border-bottom: 1px solid #ededed;
      color: #ededed;
      transform: scaleY(.5);
    }
  }
</style>
