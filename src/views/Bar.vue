<template>
  <div>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <van-tabbar
      route
      active-color="#fa7268"
      :safe-area-inset-bottom="true"
    >
      <van-tabbar-item
        to="/home"
        :replace="true"
      >
        <van-icon 
          class-prefix="i"
          name="home"
          class="iconfont"
          slot="icon"
        />
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item
        to="/store"
        :replace="true"
      >
        <van-icon 
          class-prefix="i"
          name="store"
          class="iconfont"
          slot="icon"
        />
        <span>商城</span>
      </van-tabbar-item>
      <van-tabbar-item
        to="/transport"
        :replace="true"
      >
        <van-icon 
          class-prefix="i"
          name="l"
          class="iconfont"
          slot="icon"
        />
        <span>转运</span>
      </van-tabbar-item>
      <van-tabbar-item
        to="/mine"
        :replace="true"
      >
        <van-icon 
          class-prefix="i"
          name="mine"
          class="iconfont"
          slot="icon"
        />
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'

export default {
  name: 'bar',

  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },

  props: {},

  data() {
    return {}
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {}
}
</script>

<style lang="less" scoped>

</style>
