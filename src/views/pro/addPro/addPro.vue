<template>
  <div class="addpro">
    <!-- 添加商品 -->
    <pro-form></pro-form>
  </div>
</template>

<script>
import proForm from '../component/proForm/index.vue'
export default {
  components: {
    proForm,
  },
}
</script>

<style lang="scss" scoped>
.addpro {
  height: 100%;
}
</style>