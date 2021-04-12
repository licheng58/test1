<template>
  <div class="side">
    <div class="logo" v-if="isCollapse === false"></div>
    <div class="logo2" v-else></div>
    <!-- :default-active 一进页面默认显示的页面
              unique-opened 保持一个子菜单的打开
              router 采用路由模式 菜单上的index就是点击跳转的页面
              text-color 菜单文字的颜色
    active-text-color 菜单激活后文字的颜色-->
    <el-menu
      :collapse="isCollapse"
      :default-active="$route.path"
      @select="handleSelect"
      active-text-color="orangered"
      background-color="#2a3f54"
      class="el-menu-vertical-demo"
      router
      text-color="#fff"
      unique-opened
    >
      <sidebar-item
        :menuList="menuList"
        :isCollapse="isCollapse"
      ></sidebar-item>
    </el-menu>
  </div>
</template>

<script>
import sidebarItem from './sidebarItem.vue'
export default {
  components: {
    sidebarItem,
  },

  data() {
    return {
      isCollapse: false,
      menuList: [],
    }
  },

  created() {
    this.$bus.$on('commandSideBar', (v) => {
      this.isCollapse = v
    })
    this.menuList = this.$router.options.routes
    // console.log(this.menuList)
  },

  computed: {
    // ...mapGetters([]),
  },

  methods: {
    handleSelect() {},
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
.side {
  background-color: #fff;
  @include change_BGC($BGC1);
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu {
    background-color: #20222a;
    @include change_BGC($BGC1);
  }
  .el-menu-item {
    // min-width: 199px;
  }
  .logo {
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-bottom: 1px solid #07cabc;
    background: url('../../../images/header_logo.png') no-repeat center/contain;
  }
  .el-menu-vertical-demo {
    height: calc(100% - 60px);
  }
  .iconfont {
    margin-right: 5px;
  }
  .logo2 {
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: url('../../../images/logo.jpg') no-repeat center / 80%;
  }
}
</style>
