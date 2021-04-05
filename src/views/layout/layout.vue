<template>
  <div class="app-wapper">
    <el-container>
      <!-- 侧边栏 -->
      <side-bar></side-bar>
      <el-container>
        <!-- 头部 -->
        <el-header>
          <header-bar></header-bar>
        </el-header>
        <!-- 主体 -->
        <el-main>
          <router-view />
        </el-main>
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
    return {}
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
