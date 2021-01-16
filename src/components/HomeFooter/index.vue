<template>
  <div class="footer">
      <ul class="nav-bar">
        <li class="films">
          <span>电影</span>
        </li>
        <li class="cinemas">
          <span>影院</span>
        </li>
        <li class="center">
          <span>我的</span>
        </li>
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
      line-height: 3;
      list-style: none;
      text-align: center;
      color: #797d82;
      li {
        line-height: inherit;
        width: 100%;
        color: #797d82;
      }
    }
 }
 </style>
