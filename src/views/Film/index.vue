<template>
  <div class="film">
    <HomeBanner></HomeBanner>
    <HomeTabs></HomeTabs>
    <HomeFooter></HomeFooter>
  </div>
</template>
<script>
import HomeBanner from '../../components/HomeBanner'
import HomeTabs from '../../components/HomeTabs'
import HomeFooter from '../../components/HomeFooter'
export default {
  components : {
    HomeBanner,
    HomeTabs,
    HomeFooter
  }
}
</script>
