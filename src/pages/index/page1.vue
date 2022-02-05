<template>
  <view>
    <h1>page1</h1>
    <h3>{{info}}</h3>
  </view>
</template>

<script>
function getNowPage () {
    const pages = getCurrentPages()
    return pages[pages.length-1]
}
export default {
  data () {
    return {
      info: ''
    }
  },
  onShow() {
    // app下的nvue页面使用 this.$page.$passedParams 和 this.$page.$routeParams
    this.info = this.$passedParams?.info || this.$page.$passedParams?.info || ''
  }
}
</script>

<style scoped>

</style>
