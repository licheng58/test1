<template>
  <div class="side">
    <div class="logo">logo</div>
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
      <span :key="index" v-for="(item, index) in menuList">
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
              <i :class="item.icon" class="icon iconfont"></i>
              <span>{{ item.title }}</span>
            </template>
            <span :key="index2" v-for="(item2, index2) in item.children">
              <template>
                <el-menu-item :index="item2.path">
                  {{
                  item2.title
                  }}
                </el-menu-item>
              </template>
            </span>
          </el-submenu>
        </template>
        <!-- 一层菜单栏 -->
        <template v-if="item.title === '首页'">
          <el-menu-item :index="item.path" @click.native="toHome">
            <i :class="item.icon" class="icon iconfont"></i>
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
    this.$bus.$on('commandSideBar', v => {
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
    height: calc(100% - 60px);
  }
  .iconfont {
    margin-right: 5px;
  }
}
</style>
