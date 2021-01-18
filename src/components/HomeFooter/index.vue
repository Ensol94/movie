<template>
  <div class="footer">
      <ul class="nav-bar">
        <router-link to="/film" tag="li" class="films">
          <span>电影</span>
        </router-link>
        <router-link to="/cinema" tag="li"  class="cinemas">
          <span>影院</span>
        </router-link>
        <router-link to="/center" tag="li" class="center">
          <span>我的</span>
        </router-link>
      </ul>
  </div>
</template>

 <style lang="less">
 .footer {
    .nav-bar {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 50px;
      display: flex;
      padding: 0;
      margin: 0;
      z-index: 100;
      background: #fff;
      align-items: center;
      list-style: none;
      text-align: center;
      color: #797d82;
      li {
        line-height: inherit;
        width: 100%;
        color: #797d82;
      }
      .router-link-active {
        color: #ff5f16;
      }
    }
 }
 </style>
