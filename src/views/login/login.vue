<template>
  <div class="login">
    <div class="login-page" v-drag>
      <div class="login-title">日不落闪过系统</div>
      <div class="login-content">
        <login-form></login-form>
      </div>
    </div>
  </div>
</template>

<script>
import loginForm from './components/form'
export default {
  components: {
    loginForm,
  },

  data() {
    return {}
  },

  methods: {},
}
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  position: relative;
  background-image: url('../../images/bgc.jpg');
  background-size: cover;
  background-position: center;

  .login-page {
    width: 330px;
    height: 350px;
    background-color: #fff;
    position: absolute;
    right: 50px;
    bottom: 50px;
    border-radius: 5px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 0 30px;
  }
  .login-title {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #07cabc;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 16px;
    color: #07cabc;
  }
  .el-divider {
    background: #07cabc;
  }
  .login-content {
    padding-top: 20px;
  }
}
</style>
