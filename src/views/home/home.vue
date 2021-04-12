<template>
  <div class="home">
    home页面
    <div @click="toLogin">去login</div>
    <svg-icon class="icon" icon-class="home"></svg-icon>
    <bbb @changeval="changeval" v-model="message"></bbb>
    <div @click="abc" class="abc">{{message}}</div>
  </div>
</template>

<script>
import bbb from '../../components/text.vue'
export default {
  components: {
    bbb,
  },
  data() {
    return {
      message: 1,
    }
  },
  methods: {
    toLogin() {
      this.$router.push('/login')
    },
    changeval(v) {
      this.message = v
    },
    abc() {
      this.message++
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
.abc {
  width: 100px;
  height: 100px;
  border: 1px solid #000;
}
</style>
