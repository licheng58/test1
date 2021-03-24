<template>
  <div class="app-wapper">
    <el-container>
      <side-bar></side-bar>
      <el-container>
        <el-header>
          <header-bar></header-bar>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import sideBar from './component/sidebar'
import headerBar from './component/headerbar'
export default {
  components: {
    sideBar,
    headerBar,
  },
  data() {
    return {
      bb: 0,
    }
  },
  created() {},
}
</script>
<style lang="scss" scoped>
.app-wapper {
  width: 100%;
  height: 100%;
  .el-container {
    height: 100%;
  }
  .el-header {
    padding: 0;
  }
}
</style>
