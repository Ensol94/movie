<template>
  <div class="film">
    <FilmBanner></FilmBanner>
    <FilmTabs></FilmTabs>
    <router-view></router-view>
  </div>
</template>
<script>
import FilmBanner from './FilmBanner'
import FilmTabs from './FilmTabs'
export default {
  components : {
    FilmBanner,
    FilmTabs
  }
}
</script>
