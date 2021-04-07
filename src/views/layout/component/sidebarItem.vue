<template>
  <div class="sidebar-item">
    <!-- <span :key="index" v-for="(item, index) in menuList">
        <el-submenu :index="item.path" v-if="item.title!=='登录'&&item.title!=='404'">
          <template slot="title">
            <i :class="item.icon" class="icon iconfont"></i>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item-group :key="index2" v-for="(item2, index2) in item.children">
            <template>
              <el-menu-item :index="item2.path">
                <i :class="item2.icon" class="icon iconfont"></i>
                <span>{{ item2.title }}</span>
              </el-menu-item>
            </template>
          </el-menu-item-group>
        </el-submenu>

        <template v-else-if="item.title === '登录'">
          <el-menu-item :index="item.path">
            <i :class="item.icon" class="icon iconfont"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
    </span>-->

    <span :key="index" v-for="(item,index) in menuList">
      <!-- <template v-if="item.title === '首页'">
        <el-menu-item :index="item.path">
          <i :class="item.icon" class="icon iconfont"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
      </template>-->

      <el-submenu :index="item.path">
        <template slot="title">
          <i :class="item.icon" class="icon iconfont"></i>
          <span slot="title">{{ item.title }}</span>
        </template>
        <el-menu-item-group :key="index2" v-for="(child, index2) in item.children">
          <template>
            <el-menu-item :index="child.path">
              <i :class="child.icon" class="icon iconfont"></i>
              <span slot="title">{{ child.title }}</span>
            </el-menu-item>
          </template>
        </el-menu-item-group>
      </el-submenu>
    </span>
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

<style>
</style>