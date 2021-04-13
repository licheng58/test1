<template>
  <div class="sidebar-item">
    <div v-for="(item, index) in menuList" :key="index">
      <el-submenu
        v-if="
          item.title !== '首页' && item.title !== '登录' && item.title !== '404'
        "
        :index="item.path"
      >
        <template slot="title">
          <i :class="item.icon" class="icon iconfont"></i>
          <span v-if="isCollapse === false">{{ item.title }}</span>
        </template>

        <div v-if="item.children">
          <el-menu-item-group
            v-for="(cItem, cIndex) in item.children"
            :key="cIndex + 'copy'"
          >
            <el-menu-item :index="cItem.path">
              <i :class="cItem.icon" class="icon iconfont"></i
              >{{ cItem.title }}</el-menu-item
            >
          </el-menu-item-group>
        </div>
      </el-submenu>
      <router-link v-if="item.title === '首页'" :to="item.path">
        <el-menu-item :index="item.path">
          <i :class="item.icon" class="icon iconfont"></i
          ><span v-if="isCollapse === false">{{
            item.title
          }}</span></el-menu-item
        >
      </router-link>
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
  .el-menu-item.is-active {
    background-color: #6b88a5 !important;
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
</style>
