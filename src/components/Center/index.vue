<template>
  <div class="center">
    <div class="mySeft">个人账号</div>
    <ul class="orderForm">
      <li> 电影订单 </li>
      <li> 商品订单 </li>
    </ul>
    <div class="userAction">
       <router-link tag="div" to="/card" class="card">
          <span class="iCard iconfont icon-card"></span>
          <span>卖座卡</span>
       </router-link>
       <router-link tag="div" to="/money" class="money">
           <span class="iMoney iconfont icon-yue"></span>
           <span>余额</span>
       </router-link>
       <router-link tag="div" to="/system" class="system">
          <span class="iSystem iconfont icon-buoumaotubiao06"></span>
          <span>设置</span>
       </router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
<style lang="less">
.center {
  .mySeft{
    height: 150px;
    padding-left: 22px;
    padding-top: 64px;
    margin-top: -44px;
    text-align: center;
    background: url('../../assets/backroungCenter.png');
    background-size: cover;
  }
  .orderForm {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    li {
      width: 100%;
      text-align: center;
      height: 79px;
      align-items: center;
      line-height: 50px;
    }
  }
  .userAction {
    .card,.money,.system {
      padding: 0 15px;
      height: 49px;
      display: flex;
      align-items: center;
      .iCard,.iMoney,.iSystem {
        color: #2c3e50;
        font-size: 20px;
        margin-right: 15px;
      }
    }
  }
}
</style>
