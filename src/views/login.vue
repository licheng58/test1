<template>
  <div class="login">
    登录页面
    <div @click="toHome">去home</div>
  </div>
</template>

<script>
export default {
  methods: {
    toHome() {
      this.$router.push('/home')
    },
  },
}
</script>

<style>
</style>