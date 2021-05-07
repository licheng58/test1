<template>
  <!-- 菜单列表 -->
  <div class="menu-list">
    <!-- 新建 -->
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets" style="margin-top: 5px"></i>
      <span style="margin-top: 5px">数据列表</span>
      <el-button class="btn-add" @click="handleAddMenu()" size="mini">
        添加
      </el-button>
    </el-card>

    <!-- table数据 -->
    <el-table
      ref="menuTable"
      style="width: 100%"
      :data="list"
      v-loading="listLoading"
      border
    >
      <el-table-column label="编号" width="100" align="center">
        <template slot-scope="scope">{{ scope.row.id }}</template>
      </el-table-column>
      <el-table-column label="菜单名称" align="center">
        <template slot-scope="scope">{{ scope.row.title }}</template>
      </el-table-column>
      <el-table-column label="菜单级数" width="100" align="center">
        <template slot-scope="scope">{{
          scope.row.level | levelFilter
        }}</template>
      </el-table-column>
      <el-table-column label="前端名称" align="center">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column label="前端图标" width="100" align="center">
        <template slot-scope="scope"
          ><svg-icon :icon-class="scope.row.icon"></svg-icon
        ></template>
      </el-table-column>
      <el-table-column label="是否显示" width="100" align="center">
        <template slot-scope="scope">
          <el-switch
            @change="handleHiddenChange(scope.$index, scope.row)"
            :active-value="0"
            :inactive-value="1"
            v-model="scope.row.hidden"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="排序" width="100" align="center">
        <template slot-scope="scope">{{ scope.row.sort }}</template>
      </el-table-column>
      <el-table-column label="设置" width="120" align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            :disabled="scope.row.level | disableNextLevel"
            @click="handleShowNextLevel(scope.$index, scope.row)"
            >查看下级
          </el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            @click="handleUpdate(scope.$index, scope.row)"
            >编辑
          </el-button>
          <el-button
            size="mini"
            type="text"
            @click="handleDelete(scope.$index, scope.row)"
            >删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <div class="pagination-container">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total, sizes,prev, pager, next,jumper"
        :page-size="listQuery.pageSize"
        :page-sizes="[10, 15, 20]"
        :current-page.sync="listQuery.pageNum"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { fetchList, deleteMenu, updateMenu, updateHidden } from '@/api/menu'
export default {
  data() {
    return {
      list: null,
      total: null,
      listLoading: true,
      listQuery: {
        pageNum: 1,
        pageSize: 5,
      },
      parentId: 0,
    }
  },

  watch: {
    $route(route) {
      this.resetParentId()
      this.getList()
    },
  },

  filters: {
    levelFilter(value) {
      if (value === 0) {
        return '一级'
      } else if (value === 1) {
        return '二级'
      }
    },
    disableNextLevel(value) {
      if (value === 0) {
        return false
      } else {
        return true
      }
    },
  },

  created() {
    this.resetParentId()
    this.getList()
  },

  methods: {
    resetParentId() {
      this.listQuery.pageNum = 1
      if (this.$route.query.parentId != null) {
        this.parentId = this.$route.query.parentId
      } else {
        this.parentId = 0
      }
    },

    // 新建菜单
    handleAddMenu() {
      this.$router.push('/addMenu')
    },

    // 获取table数据
    getList() {
      this.listLoading = true
      fetchList(this.parentId, this.listQuery).then((response) => {
        this.listLoading = false
        this.list = response.data.list
        this.total = response.data.total
      })
    },

    // 分页
    handleSizeChange(val) {
      this.listQuery.pageNum = 1
      this.listQuery.pageSize = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.listQuery.pageNum = val
      this.getList()
    },

    // 是否显示修改
    handleHiddenChange(index, row) {
      updateHidden(row.id, { hidden: row.hidden }).then((response) => {
        this.$message({
          message: '修改成功',
          type: 'success',
          duration: 1000,
        })
      })
    },

    // 查看下级
    handleShowNextLevel(index, row) {
      this.$router.push({ path: '/menu_list', query: { parentId: row.id } })
    },

    // 修改
    handleUpdate(index, row) {
      this.$router.push({ path: '/updateMenu', query: { id: row.id } })
    },

    // 删除
    handleDelete(index, row) {
      this.$confirm('是否要删除该菜单', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        deleteMenu(row.id).then((response) => {
          this.$message({
            message: '删除成功',
            type: 'success',
            duration: 1000,
          })
          this.getList()
        })
      })
    },
  },
}
</script>

<style></style>
