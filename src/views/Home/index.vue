<template>
  <div>
    <router-view></router-view>
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
