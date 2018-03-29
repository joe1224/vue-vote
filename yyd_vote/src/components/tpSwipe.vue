<template>
  <swiper auto loop dots-position="center" height="150px" :show-dots="false">
    <swiper-item>
      <img class="sp_img" src="../../static/images/banner1.png">
    </swiper-item>
    <!--<swiper-item>-->
      <!--<img class="sp_img" src="../../static/images/banner2.png">-->
    <!--</swiper-item>-->
  </swiper>
</template>
<style>
  .sp_img {
    width: 100%;
  }
  body {
    padding: 0px;
    margin: 0px;
  }
</style>
<script>
  import SwiperItem from '../../node_modules/vux/src/components/swiper/swiper-item.vue'
  import Swiper from '../../node_modules/vux/src/components/swiper/swiper.vue'

  export default {
    props: ['tpSwipe'],
    data () {
      return {}
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>
