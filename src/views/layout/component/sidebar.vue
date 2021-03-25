<template>
  <div class="side">
    <div class="logo">logo</div>
  </div>
</template>

<script>
export default {
  components: {},

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
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
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
}
</style>
