<template>
  <div class="home">
    home页面
    <div @click="toLogin">去login</div>
    <svg-icon class="icon" icon-class="home"></svg-icon>
  </div>
</template>

<script>
export default {
  methods: {
    toLogin() {
      this.$router.push('/login')
    },
  },
}
</script>

<style lang="scss" scoped>
.icon {
  width: 100px;
  height: 100px;
  color: red;
}
</style>
