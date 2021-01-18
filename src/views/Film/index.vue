<template>
  <div class="film">
    <FilmBanner></FilmBanner>
    <FilmTabs></FilmTabs>
  </div>
</template>
<script>
import FilmBanner from '../../components/FilmBanner'
import FilmTabs from '../../components/FilmTabs'
export default {
  components : {
    FilmBanner,
    FilmTabs
  }
}
</script>
