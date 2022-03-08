<template>
  <view>tabbar1</view>
  <button @click="jumpTo('/pages/index/tabbar2')">switch to tabbar2</button>
  <button @click="redirectTo('/pages/index/index')">redirect to index</button>
</template>

<script>
export default {
  name: "tabbar1",
  methods: {
    jumpTo (url) {
      uni.switchTab({
        url
      })
    },
    redirectTo(url) {
      uni.redirectTo({
        url
      })
    }
  }
}
</script>

<style scoped>

</style>
