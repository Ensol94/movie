<template>
  <div>
    <transition
    mode="out-in"
    enter-active-class="animated animate__bounceInLeft"
    leave-active-class="animated animate__bounceOutRight"
    >
        <router-view ></router-view>
    </transition>
    <HomeFooter></HomeFooter>
  </div>
</template>
<script>
import HomeFooter from '../../components/HomeFooter'
export default {
  components : {
    HomeFooter
  }
}
</script>
