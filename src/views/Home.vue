<template>
  <div class="home">
    <van-swipe
      :autoplay="3000"
      indicator-color="white"
      class="banner"
    >
      <van-swipe-item
        v-for="item,index in swiperList"
        :key="index"
        v-lazy:background-image="imgHost + item"
      />
    </van-swipe>
    <div class="flex-box bg-white mb-sm nav">
      <a href="" class="flex-item col-4 pb-sm pt-sm">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#i-car"></use>
        </svg>
        <div>运费估算</div>
      </a>
      <a href="" class="flex-item col-4 pb-sm pt-sm">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#i-box"></use>
        </svg>
        <div>我的包裹</div>
      </a>
      <a href="" class="flex-item col-4 pb-sm pt-sm">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#i-invite"></use>
        </svg>
        <div>邀请好友</div>
      </a>
      <a href="" class="flex-item col-4 pb-sm pt-sm">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#i-service"></use>
        </svg>
        <div>专属客服</div>
      </a>
    </div>

  </div>
</template>

<script>
import { imgHost } from '@/config'
import '../assets/icon/icon-color.js'
import { Swipe, SwipeItem } from 'vant'
import { getUserInfo } from '@/api/user'

export default {
  name: 'home',

  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },

  props: {},

  data() {
    return {
      imgHost: imgHost,
      swiperList: [
        '/x/images/index/banner.png',
        '/x/images/index/banner2.png',
      ],
    }
  },

  computed: {},

  watch: {},

  created() {

  },

  mounted() {},

  destroyed() {},

  methods: {
    getData() {
      getUserInfo({ userId: 21 }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .nav{
    .flex-item{
      font-size: 12px;
      color: @darkGray;
      .icon{
        width: 28px;
        height: 28px;
        fill: currentColor;
        overflow: hidden;
        margin-bottom: 5px;
      }
    }
  }
  .banner{
    height: 175px;
    .van-swipe-item{
      background-size: cover;
    }
  }
</style>
