<template>
  <div class="app-container">
    <div class="img">
      <h1 class="color-main">OOPS!</h1>
      <h2 style="color: #606266">很抱歉，页面它不小心迷路了！</h2>
      <div style="color:#909399;font-size: 14px">请检查您输入的网址是否正确，请点击以下按钮返回主页或者发送错误报告</div>
      <el-button @click="handleGoMain" round style="margin-top: 20px" type="primary">返回首页</el-button>
    </div>
  </div>
</template>

<script>
import img_404 from '@/images/gif_404.gif'

export default {
  name: 'wrongPage',
  data() {
    return {
      img_404,
    }
  },
  methods: {
    handleGoMain() {
      this.$router.push({ path: '/' })
    },
  },
}
</script>

<style lang="scss" scoped>
.app-container {
  background-image: url('../images/gif_404.gif');
  background-size: cover;
  min-height: 100%;
  .img {
    position: absolute;
    right: 10%;
    top: 20%;
  }
}
</style>


