<template>
  <el-form :model="loginForm" size="small">
    <el-row>
      <el-col>
        <el-form-item>
          <el-input
            class="input-width"
            maxlength="10"
            placeholder="用户名"
            prefix-icon="icon iconfont icon-yonghu"
            show-word-limit
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            class="input-width"
            maxlength="20"
            placeholder="密码"
            prefix-icon="icon iconfont icon-mima"
            show-password
            show-word-limit
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
        <div class="btn">
          <el-button
            @click="login()"
            class="search-button"
            size="small"
            style="border-radius: 5px;  width: 100%;"
            type="primary"
          >确定</el-button>
        </div>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import { setCookie } from '@/utils/supports'
const loginForm = {
  username: '',
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
      this.$store.dispatch('Login', this.loginForm).then(() => {
        setCookie('username', this.loginForm.username, 7)
        setCookie('password', this.loginForm.password, 7)
        this.$router.push('/')
        this.$message.success('登录成功')
      })
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
