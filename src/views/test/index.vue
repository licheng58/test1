<template>
  <div class="index">
    <div>根组件----------</div>
    <el-button @click="handleClick">根组件按钮</el-button>
    <Son></Son>
  </div>
</template>

<script>
import Son from './son.vue'
export default {
  components: {
    Son,
  },

  data() {
    return {
      msg: { name: 'world' },
      msg2: 'hhhh',
    }
  },

  provide() {
    return {
      msg: this.msg,
      msg2: () => this.msg2,
      method1: this.method1,
    }
  },

  methods: {
    handleClick() {
      this.msg.name = '222'
      this.msg2 = '888'
    },

    method1(val) {
      console.log(val)
    },
  },
}
</script>

<style></style>
