<template>
  <div class="app-container">
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
          <el-form-item label="输入搜索：">
            <el-input
              v-model="listQuery.orderSn"
              class="input-width"
              placeholder="订单编号"
            ></el-input>
          </el-form-item>
          <el-form-item label="收货人：">
            <el-input
              v-model="listQuery.receiverKeyword"
              class="input-width"
              placeholder="收货人姓名/手机号码"
            ></el-input>
          </el-form-item>
          <el-form-item label="提交时间：">
            <el-date-picker
              class="input-width"
              v-model="listQuery.createTime"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="请选择时间"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="订单状态：">
            <el-select
              v-model="listQuery.status"
              class="input-width"
              placeholder="全部"
              clearable
            >
              <el-option
                v-for="item in statusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="订单分类：">
            <el-select
              v-model="listQuery.orderType"
              class="input-width"
              placeholder="全部"
              clearable
            >
              <el-option
                v-for="item in orderTypeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="订单来源：">
            <el-select
              v-model="listQuery.sourceType"
              class="input-width"
              placeholder="全部"
              clearable
            >
              <el-option
                v-for="item in sourceTypeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </el-card>

    <!-- 新建 -->
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>
    </el-card>

    <!-- table -->
    <div class="table-container">
      <el-table
        ref="orderTable"
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
        <el-table-column label="编号" width="80" align="center">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="订单编号" width="180" align="center">
          <template slot-scope="scope">{{ scope.row.orderSn }}</template>
        </el-table-column>
        <el-table-column label="提交时间" width="180" align="center">
          <template slot-scope="scope">{{
            scope.row.createTime | formatCreateTime
          }}</template>
        </el-table-column>
        <el-table-column label="用户账号" align="center">
          <template slot-scope="scope">{{ scope.row.memberUsername }}</template>
        </el-table-column>
        <el-table-column label="订单金额" width="120" align="center">
          <template slot-scope="scope">￥{{ scope.row.totalAmount }}</template>
        </el-table-column>
        <el-table-column label="支付方式" width="120" align="center">
          <template slot-scope="scope">{{
            scope.row.payType | formatPayType
          }}</template>
        </el-table-column>
        <el-table-column label="订单来源" width="120" align="center">
          <template slot-scope="scope">{{
            scope.row.sourceType | formatSourceType
          }}</template>
        </el-table-column>
        <el-table-column label="订单状态" width="120" align="center">
          <template slot-scope="scope">{{
            scope.row.status | formatStatus
          }}</template>
        </el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleViewOrder(scope.$index, scope.row)"
              >查看订单</el-button
            >
            <el-button
              size="mini"
              @click="handleCloseOrder(scope.$index, scope.row)"
              v-show="scope.row.status === 0"
              >关闭订单</el-button
            >
            <el-button
              size="mini"
              @click="handleDeliveryOrder(scope.$index, scope.row)"
              v-show="scope.row.status === 1"
              >订单发货</el-button
            >
            <el-button
              size="mini"
              @click="handleViewLogistics(scope.$index, scope.row)"
              v-show="scope.row.status === 2 || scope.row.status === 3"
              >订单跟踪</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDeleteOrder(scope.$index, scope.row)"
              v-show="scope.row.status === 4"
              >删除订单</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 分页 -->
    <div class="pagination-container">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total, sizes,prev, pager, next,jumper"
        :current-page.sync="listQuery.pageNum"
        :page-size="listQuery.pageSize"
        :page-sizes="[5, 10, 15]"
        :total="total"
      >
      </el-pagination>
    </div>

    <!-- 弹框 -->
    <el-dialog
      title="关闭订单"
      :visible.sync="closeOrder.dialogVisible"
      width="30%"
    >
      <span style="vertical-align: top">操作备注：</span>
      <el-input
        style="width: 80%"
        type="textarea"
        :rows="5"
        placeholder="请输入内容"
        v-model="closeOrder.content"
      >
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeOrder.dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleCloseOrderConfirm"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { fetchList, closeOrder, deleteOrder } from '@/api/order'
import { formatDate } from '@/utils/date'
const defaultListQuery = {
  pageNum: 1,
  pageSize: 10,
  orderSn: null,
  receiverKeyword: null,
  status: null,
  orderType: null,
  sourceType: null,
  createTime: null,
}
export default {
  data() {
    return {
      listQuery: Object.assign({}, defaultListQuery),
      listLoading: true,
      list: null,
      total: null,
      operateType: null,
      multipleSelection: [],
      closeOrder: {
        dialogVisible: false,
        content: null,
        orderIds: [],
      },
      statusOptions: [
        {
          label: '待付款',
          value: 0,
        },
        {
          label: '待发货',
          value: 1,
        },
        {
          label: '已发货',
          value: 2,
        },
        {
          label: '已完成',
          value: 3,
        },
        {
          label: '已关闭',
          value: 4,
        },
      ],
      orderTypeOptions: [
        {
          label: '正常订单',
          value: 0,
        },
        {
          label: '秒杀订单',
          value: 1,
        },
      ],
      sourceTypeOptions: [
        {
          label: 'PC订单',
          value: 0,
        },
        {
          label: 'APP订单',
          value: 1,
        },
      ],
      operateOptions: [
        {
          label: '批量发货',
          value: 1,
        },
        {
          label: '关闭订单',
          value: 2,
        },
        {
          label: '删除订单',
          value: 3,
        },
      ],
      logisticsDialogVisible: false,
    }
  },
  created() {
    this.getList()
  },

  filters: {
    formatCreateTime(time) {
      let date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
    },
    formatPayType(value) {
      if (value === 1) {
        return '支付宝'
      } else if (value === 2) {
        return '微信'
      } else {
        return '未支付'
      }
    },
    formatSourceType(value) {
      if (value === 1) {
        return 'APP订单'
      } else {
        return 'PC订单'
      }
    },
    formatStatus(value) {
      if (value === 1) {
        return '待发货'
      } else if (value === 2) {
        return '已发货'
      } else if (value === 3) {
        return '已完成'
      } else if (value === 4) {
        return '已关闭'
      } else if (value === 5) {
        return '无效订单'
      } else {
        return '待付款'
      }
    },
  },

  methods: {
    // 获取表格信息
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then((response) => {
        this.listLoading = false
        this.list = response.data.list
        this.total = response.data.total
      })
    },

    handleSizeChange(val) {
      this.listQuery.pageNum = 1
      this.listQuery.pageSize = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.listQuery.pageNum = val
      this.getList()
    },

    // checkbox
    handleSelectionChange(val) {
      this.multipleSelection = val
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

    // 查看订单--订单详情页
    handleViewOrder(index, row) {
      this.$router.push({ path: '/order_detail', query: { id: row.id } })
    },

    // 关闭订单
    handleCloseOrder() {
      this.closeOrder.dialogVisible = true
      this.closeOrder.orderIds = [row.id]
    },

    // 订单跟踪
    handleViewLogistics() {
      this.logisticsDialogVisible = true
    },

    // 删除订单
    handleDeleteOrder() {
      let ids = []
      ids.push(row.id)
      this.deleteOrder(ids)
    },

    deleteOrder(ids) {
      this.$confirm('是否要进行该删除操作?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        let params = new URLSearchParams()
        params.append('ids', ids)
        deleteOrder(params).then((response) => {
          this.$message({
            message: '删除成功！',
            type: 'success',
            duration: 1000,
          })
          this.getList()
        })
      })
    },

    // 保存
    handleCloseOrderConfirm() {
      if (this.closeOrder.content == null || this.closeOrder.content === '') {
        this.$message({
          message: '操作备注不能为空',
          type: 'warning',
          duration: 1000,
        })
        return
      }
      let params = new URLSearchParams()
      params.append('ids', this.closeOrder.orderIds)
      params.append('note', this.closeOrder.content)
      closeOrder(params).then((response) => {
        this.closeOrder.orderIds = []
        this.closeOrder.dialogVisible = false
        this.getList()
        this.$message({
          message: '修改成功',
          type: 'success',
          duration: 1000,
        })
      })
    },
  },
}
</script>

<style></style>
