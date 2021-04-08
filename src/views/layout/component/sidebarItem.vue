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
          <span>{{ item.title }}</span>
        </template>

        <div v-if="item.children">
          <el-menu-item-group
            v-for="(cItem, cIndex) in item.children"
            :key="cIndex + 'copy'"
          >
            <el-menu-item :index="cItem.path">
              <i :class="item.icon" class="icon iconfont"></i
              >{{ cItem.title }}</el-menu-item
            >
          </el-menu-item-group>
        </div>
      </el-submenu>
      <router-link
        v-if="item.title !== '登录' && item.title !== '404'"
        :to="item.path"
      >
        <el-menu-item :index="item.path">
          <i :class="item.icon" class="icon iconfont"></i
          >{{ item.title }}</el-menu-item
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
  },

  data() {
    return {}
  },
}
</script>

<style></style>
