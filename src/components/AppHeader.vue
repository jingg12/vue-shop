<template>
  <van-sticky class="search-bar" :class="{'search-bar-show': show}">
    <van-search 
      :class="{ 'search-normal': !props.isSort, 'search-sort': props.isSort }" 
      v-model="value" 
      shape="round" 
      readonly 
      placeholder="数据线"
      @click-input="gotosearch"
    >
    </van-search>
  </van-sticky>
</template>

<script setup>
import { useRouter } from "vue-router"
// import router from "../router"
const router = useRouter()
const props = defineProps({
  isSort: {
    type: Boolean,
    default: false
  }
})
const gotosearch = () => {
  router.push({
    path: "/search"
  })
}

</script>

<style lang="stylus" scoped>
.search-bar-show
  display none
.search-bar 
  width 100vw
  pointer-events none // 事件穿透 让下层事件能被触发
  .search-normal 
    pointer-events visiblePainted // 只有点击元素内部事件才会触发
    padding .32rem .266667rem
    width 100%
    height 1.44rem /* 54/37.5 */
    transition width .4s
  .search-sort 
    pointer-events visiblePainted
    transition width .4s
    padding .266667rem .32rem 
    width: 5.333333rem
</style>