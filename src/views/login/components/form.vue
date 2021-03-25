<template>
  <el-form :model="loginForm" size="small">
    <el-row>
      <el-col>
        <el-form-item>
          <el-input
            v-model="loginForm.idNumber"
            class="input-width"
            placeholder="账号"
            maxlength="10"
            show-word-limit
            prefix-icon="icon iconfont icon-yonghu"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="loginForm.password"
            class="input-width"
            placeholder="密码"
            maxlength="20"
            show-word-limit
            show-password
            prefix-icon="icon iconfont icon-mima"
          ></el-input>
        </el-form-item>
        <div class="btn">
          <el-button
            style="border-radius: 5px;  width: 100%;"
            class="search-button"
            @click="login()"
            type="primary"
            size="small"
          >
            确定
          </el-button>
        </div>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
const loginForm = {
  idNumber: '',
  password: '',
}
export default {
  data() {
    return {
      loginForm,
    }
  },
  methods: {
    login() {
      console.log(this.loginForm)
      this.$router.push('/home')
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  width: 100%;
  text-align: center;
}
</style>
