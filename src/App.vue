<template>
  <div id="app">
    <NewsHeader v-show="isShow"></NewsHeader>
    <transition enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
      <router-view class="animated"></router-view>
    </transition>
    <NewsFooter></NewsFooter>
  </div>
</template>

<script>
import NewsHeader from './components/NewsHeader.vue';
import NewsFooter from './components/NewsFooter.vue';

import { mapGetters, mapActions } from "vuex";

export default {
  name: 'app',
  computed: mapGetters([
    "isShow"
  ]),
  components: {
    NewsHeader, NewsFooter
  },
  watch: {
    $route: function (to) {
      if (to.path == "/userInfo") {
        this.$store.dispatch("hideHeader")
      } else {
        this.$store.dispatch("showHeader")
      }
    }
  },
  mounted: function () {
    if (this.$route.path == "/userInfo") {//避免由于刷新造成的
      this.$store.dispatch("hideHeader")
    }
  }

}
</script>

<style>
@import "./assets/css/animate.css"
</style>
