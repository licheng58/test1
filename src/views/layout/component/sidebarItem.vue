<template>
  <div class="sidebar-item">
    <div :key="index" v-for="(item, index) in menuList">
      <el-submenu
        :index="item.path"
        v-if="item.children && item.title !== '首页' && item.hidden !== true"
      >
        <template slot="title">
          <i :class="item.icon" class="icon iconfont"></i>
          <span v-if="isCollapse === false">{{ item.title }}</span>
        </template>
        <!-- 递归 -->
        <sidebar-item :menuList="item.children"></sidebar-item>
      </el-submenu>
      <el-menu-item
        :index="item.path"
        v-else-if="
          item.title !== '404' && item.title !== '登录' && item.hidden !== true
        "
      >
        <i :class="item.icon" class="icon iconfont"></i>
        <span v-if="isCollapse === false">{{ item.title }}</span>
      </el-menu-item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sidebarItem',
  props: {
    menuList: {
      type: Array,
    },
    isCollapse: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.sidebar-item {
  .el-menu-item:hover,
  .el-menu-item:focus {
    background-color: #6b88a5 !important;
    color: #ffa500 !important;
  }
}
</style>
<style>
/*菜单关闭*/
.sidebar-item .el-submenu > .el-submenu__title .el-submenu__icon-arrow {
  -webkit-transform: rotateZ(-90deg) !important;
  -ms-transform: rotate(-90deg) !important;
  transform: rotateZ(-90deg) !important;
}
/*菜单展开*/
.sidebar-item
  .el-submenu.is-opened
  > .el-submenu__title
  .el-submenu__icon-arrow {
  -webkit-transform: rotateZ(0deg) !important ;
  -ms-transform: rotate(0deg) !important;
  transform: rotateZ(0deg) !important;
}
.sidebar-item .el-submenu .el-menu-item,
.sidebar-item .nest-menu .el-submenu > .el-submenu__title {
  background-color: #1f2d3d !important;
}

.sidebar-item .el-menu-item-group__title {
  padding: 0 40px !important;
}
.sidebar-item .iconfont {
  margin-right: 12px;
}

.sidebar-item .el-submenu__title:hover,
.sidebar-item .el-submenu__title:focus {
  background-color: #6b88a5 !important;
}

.sidebar-item .el-submenu__title.is-active,
.sidebar-item .el-submenu__title.is-active {
  background-color: #6b88a5 !important;
  color: #ffa500 !important;
}

.sidebar-item .el-menu-item:focus i {
  color: #ffa500 !important;
}
</style>
