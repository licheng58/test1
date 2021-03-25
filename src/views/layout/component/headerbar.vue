<template>
  <div class="header">
    <div class="left">
      <!-- 缩进按钮 -->
      <div class="swicth">
        <i
          :class="
            !isCollapse
              ? 'icon iconfont icon-toggle-left'
              : 'icon iconfont icon-toggle-right'
          "
          @click="commandSideBar"
        ></i>
      </div>

      <!-- 面包屑 -->
      <div class="bread-crumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>

    <div class="right">
      <!-- 头像 -->
      <div class="header-portrait">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
      </div>
      <!-- 退出操作 -->
      <el-dropdown
        trigger="click"
        style="margin-right:20px"
        @command="changeCommand"
      >
        <span class="el-dropdown-link">
          点我操作<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item class="clearfix" command="to_home">
            回到首页
          </el-dropdown-item>
          <el-dropdown-item class="clearfix" command="to_login">
            退出
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- 主题色 -->
      <el-dropdown trigger="click" @command="changeColor">
        <span class="el-dropdown-link">
          更换主题<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item class="clearfix" command="a">
            神仙绿
          </el-dropdown-item>
          <el-dropdown-item class="clearfix" command="b">
            神仙蓝
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
    }
  },

  methods: {
    // 缩进
    commandSideBar() {
      this.isCollapse = !this.isCollapse
      this.$bus.$emit('commandSideBar', this.isCollapse)
    },

    // 操作
    changeCommand(v) {
      if (v === 'to_home') {
        this.$router.push('/home')
      } else if (v === 'to_login') {
        this.$router.push('/login')
      }
    },

    // 切换颜色
    changeColor(v) {
      window.document.documentElement.setAttribute('data-theme', v)
      // this.$store.commit('setMainColor', v)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
.header {
  background-color: #cdd8ec;
  @include change_BGC($BGC1);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  .left {
    display: flex;
    align-items: center;
    .swicth {
      margin-right: 20px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    .header-portrait {
      margin-right: 20px;
    }
  }
  .el-dropdown-link:hover {
    color: --color-primary;
    cursor: pointer;
  }
}
</style>
