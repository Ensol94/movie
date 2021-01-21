<template>
  <div>
    <transition
    enter-active-class=" animated animate__bounceOutUp"
    leave-active-class=" animated animate__bounceOutDown"
    >
        <router-view></router-view>
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
