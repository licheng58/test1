<template>
  <div class="side">
    <div class="logo">logo</div>
    <!-- :default-active 一进页面默认显示的页面
              unique-opened 保持一个子菜单的打开
              router 采用路由模式 菜单上的index就是点击跳转的页面
              text-color 菜单文字的颜色
              active-text-color 菜单激活后文字的颜色 -->

    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      unique-opened
      router
      background-color="#2a3f54"
      text-color="#fff"
      active-text-color="orangered"
      @select="handleSelect"
    >
      <span v-for="(item, index) in menuList" :key="index">
        <!-- 多层菜单栏 -->
        <template
          v-if="
            item.children &&
              item.children.length > 0 &&
              item.path !== '/login' &&
              item.title !== '首页'
          "
        >
          <!-- 第er层菜单栏 -->
          <el-submenu :index="item.path">
            <template slot="title">
              <i class="icon iconfont" :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <span v-for="(item2, index2) in item.children" :key="index2">
              <template>
                <el-menu-item :index="item2.path">{{
                  item2.title
                }}</el-menu-item>
              </template>
            </span>
          </el-submenu>
        </template>
        <!-- 一层菜单栏 -->
        <template v-if="item.title === '首页'">
          <el-menu-item :index="item.path" @click.native="toHome">
            <i class="icon iconfont" :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </span>
    </el-menu>
  </div>
</template>

<script>
// import sidebarItems from './sidebar_items'
export default {
  components: {
    // sidebarItems,
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
    // 首页
    toHome() {
      this.$router.push('/home')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
.side {
  background-color: #cdd8ec;
  @include change_BGC($BGC1);
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu {
    background-color: #cdd8ec;
    @include change_BGC($BGC1);
    opacity: 0.7;
  }
  .logo {
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-bottom: 1px solid #07cabc;
  }
  .el-menu-vertical-demo {
    height: 100%;
  }
  .iconfont {
    margin-right: 5px;
  }
}
</style>
