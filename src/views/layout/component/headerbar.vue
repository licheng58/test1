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
          style="font-size:18px;cursor:pointer"
        ></i>
      </div>

      <!-- 面包屑 -->
      <div class="bread-crumb">
        <el-breadcrumb separator="/">
          <transition-group name="breadcrumb">
            <el-breadcrumb-item
              :key="item.path"
              :to="item.path"
              v-for="item in brandCrumbLists"
              >{{ item.meta.title }}</el-breadcrumb-item
            >
          </transition-group>
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
        @command="changeCommand"
        style="margin-right:20px"
        trigger="click"
      >
        <span class="el-dropdown-link">
          点我操作
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item class="clearfix" command="to_home"
            >回到首页</el-dropdown-item
          >
          <el-dropdown-item class="clearfix" command="to_logout"
            >退出</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
      <!-- 主题色 -->
      <el-dropdown @command="changeColor" trigger="click">
        <span class="el-dropdown-link">
          更换主题
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item class="clearfix" command="a"
            >神仙绿</el-dropdown-item
          >
          <el-dropdown-item class="clearfix" command="b"
            >神仙蓝</el-dropdown-item
          >
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

  computed: {
    // 面包屑列表
    brandCrumbLists() {
      return this.$route.matched
    },
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
      } else if (v === 'to_logout') {
        this.$confirm('您确定退出系统吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
          this.$store.dispatch('Logout').then(() => {
            this.$message.success('退出成功')
            // this.$router.push('/login')--报错
            window.location.reload() // 为了重新实例化vue-router对象 避免bug
          })
        })
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
  background-color: #fff;
  border-bottom: 1px solid #ccc;
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
  .el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
  }
}
</style>
