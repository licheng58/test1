<template>
  <div class="sun">
    <div>sun组件----</div>
    <div>{{ msg.name }}</div>
    <div>{{ msg22 }}</div>
    <el-button @click="click_sun">孙组件按钮</el-button>
  </div>
</template>

<script>
export default {
  inject: ['msg', 'msg2', 'method1'],

  computed: {
    msg22() {
      return this.msg2()
    },
  },

  methods: {
    click_sun() {
      this.msg.name = 'sun'

      this.method1('我是sun组件在调用根组件方法')
    },
  },
}
</script>

<style></style>
