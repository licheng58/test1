<template>
  <!-- 广告列表 -->
  <div class="notice-list">
    <!-- 搜索 -->
    <el-card class="filter-container" shadow="never">
      <div>
        <i class="el-icon-search"></i>
        <span>筛选搜索</span>
        <el-button
          style="float:right"
          type="primary"
          @click="handleSearchList()"
          size="small"
        >
          查询搜索
        </el-button>
        <el-button
          style="float:right;margin-right: 15px"
          @click="handleResetSearch()"
          size="small"
        >
          重置
        </el-button>
      </div>
      <div style="margin-top: 15px">
        <el-form
          :inline="true"
          :model="listQuery"
          size="small"
          label-width="140px"
        >
          <el-form-item label="广告名称：">
            <el-input
              v-model="listQuery.name"
              class="input-width"
              placeholder="广告名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="广告位置：">
            <el-select
              v-model="listQuery.type"
              placeholder="全部"
              clearable
              class="input-width"
            >
              <el-option
                v-for="item in typeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="到期时间：">
            <el-date-picker
              class="input-width"
              v-model="listQuery.endTime"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="请选择时间"
            >
            </el-date-picker>
          </el-form-item>
        </el-form>
      </div>
    </el-card>

    <!-- 新建 -->
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>
      <el-button size="mini" class="btn-add" @click="handleAdd()"
        >添加广告</el-button
      >
    </el-card>

    <!-- table数据 -->
    <el-table
      ref="homeAdvertiseTable"
      :data="list"
      style="width: 100%;"
      @selection-change="handleSelectionChange"
      v-loading="listLoading"
      border
    >
      <el-table-column
        type="selection"
        width="60"
        align="center"
      ></el-table-column>
      <el-table-column label="编号" width="120" align="center">
        <template slot-scope="scope">{{ scope.row.id }}</template>
      </el-table-column>
      <el-table-column label="广告名称" align="center">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column label="广告位置" width="120" align="center">
        <template slot-scope="scope">{{
          scope.row.type | formatType
        }}</template>
      </el-table-column>
      <el-table-column label="广告图片" width="120" align="center">
        <template slot-scope="scope"
          ><img style="height: 80px" :src="scope.row.pic"
        /></template>
      </el-table-column>
      <el-table-column label="时间" width="220" align="center">
        <template slot-scope="scope">
          <p>开始时间：{{ scope.row.startTime | formatTime }}</p>
          <p>到期时间：{{ scope.row.endTime | formatTime }}</p>
        </template>
      </el-table-column>
      <el-table-column label="上线/下线" width="120" align="center">
        <template slot-scope="scope">
          <el-switch
            @change="handleUpdateStatus(scope.$index, scope.row)"
            :active-value="1"
            :inactive-value="0"
            v-model="scope.row.status"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="点击次数" width="120" align="center">
        <template slot-scope="scope">{{ scope.row.clickCount }}</template>
      </el-table-column>
      <el-table-column label="生成订单" width="120" align="center">
        <template slot-scope="scope">{{ scope.row.orderCount }}</template>
      </el-table-column>
      <el-table-column label="操作" width="120" align="center">
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
        :page-sizes="[5, 10, 15]"
        :current-page.sync="listQuery.pageNum"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {
  fetchList,
  updateStatus,
  deleteHomeAdvertise,
} from '@/api/homeAdvertise'
import { formatDate } from '@/utils/date'
const defaultListQuery = {
  pageNum: 1,
  pageSize: 5,
  name: null,
  type: null,
  endTime: null,
}
const defaultTypeOptions = [
  {
    label: 'PC首页轮播',
    value: 0,
  },
  {
    label: 'APP首页轮播',
    value: 1,
  },
]
export default {
  data() {
    return {
      listQuery: Object.assign({}, defaultListQuery),
      typeOptions: Object.assign({}, defaultTypeOptions),
      list: null,
      total: null,
      listLoading: false,
      multipleSelection: [],
      operates: [
        {
          label: '删除',
          value: 0,
        },
      ],
      operateType: null,
    }
  },

  filters: {
    formatType(type) {
      if (type === 1) {
        return 'APP首页轮播'
      } else {
        return 'PC首页轮播'
      }
    },
    formatTime(time) {
      if (time == null || time === '') {
        return 'N/A'
      }
      let date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
    },
  },

  created() {
    this.getList()
  },

  methods: {
    // 获取
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then((response) => {
        this.listLoading = false
        this.list = response.data.list
        this.total = response.data.total
      })
    },

    // 搜索
    handleSearchList() {
      this.listQuery.pageNum = 1
      this.getList()
    },

    // 重置
    handleResetSearch() {
      this.listQuery = Object.assign({}, defaultListQuery)
    },

    // checkbox
    handleSelectionChange(val) {
      this.multipleSelection = val
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

    // 修改上下线状态
    handleUpdateStatus(index, row) {
      this.$confirm('是否要修改上线/下线状态?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          updateStatus(row.id, { status: row.status }).then((response) => {
            this.getList()
            this.$message({
              type: 'success',
              message: '修改成功!',
            })
          })
        })
        .catch(() => {
          this.$message({
            type: 'success',
            message: '已取消操作!',
          })
          this.getList()
        })
    },

    // 表格删除
    handleDelete(index, row) {
      this.deleteHomeAdvertise(row.id)
    },

    // 添加--跳转页面
    handleAdd() {
      this.$router.push({ path: '/addAdvertise' })
    },

    // 编辑--跳转页面
    handleUpdate(index, row) {
      this.$router.push({ path: '/updateAdvertise', query: { id: row.id } })
    },

    // 删除
    deleteHomeAdvertise(ids) {
      this.$confirm('是否要删除该广告?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        let params = new URLSearchParams()
        params.append('ids', ids)
        deleteHomeAdvertise(params).then((response) => {
          this.getList()
          this.$message({
            type: 'success',
            message: '删除成功!',
          })
        })
      })
    },
  },
}
</script>

<style></style>
