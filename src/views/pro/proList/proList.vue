<template>
  <div class="pro-list">
    <!-- 查询 -->
    <div class="search-bar">
      <search-bar :searchConfig="searchConfig"></search-bar>
    </div>
    <!-- 新建 -->
    <div class="new-item">
      <div class="new-item-left">数据列表</div>
      <div class="new-item-right">
        <el-button @click="newItem">添加</el-button>
      </div>
    </div>

    <!-- table  -->
    <el-table
      ref="brandTable"
      :data="tableList"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      v-loading="listLoading"
      border
    >
      <el-table-column
        type="selection"
        width="60"
        align="center"
      ></el-table-column>
      <el-table-column label="编号" width="100" align="center">
        <template slot-scope="scope">{{ scope.row.id }}</template>
      </el-table-column>
      <el-table-column label="商品图片" width="120" align="center">
        <template slot-scope="scope"
          ><img style="height: 80px" :src="scope.row.pic"
        /></template>
      </el-table-column>
      <el-table-column label="商品名称" align="center">
        <template slot-scope="scope">
          <p>{{ scope.row.name }}</p>
          <p>品牌：{{ scope.row.brandName }}</p>
        </template>
      </el-table-column>
      <el-table-column label="价格/货号" width="120" align="center">
        <template slot-scope="scope">
          <p>价格：￥{{ scope.row.price }}</p>
          <p>货号：{{ scope.row.productSn }}</p>
        </template>
      </el-table-column>
      <el-table-column label="标签" width="140" align="center">
        <template slot-scope="scope">
          <p>
            上架：
            <el-switch
              @change="handlePublishStatusChange(scope.$index, scope.row)"
              :active-value="1"
              :inactive-value="0"
              v-model="scope.row.publishStatus"
            >
            </el-switch>
          </p>
          <p>
            新品：
            <el-switch
              @change="handleNewStatusChange(scope.$index, scope.row)"
              :active-value="1"
              :inactive-value="0"
              v-model="scope.row.newStatus"
            >
            </el-switch>
          </p>
          <p>
            推荐：
            <el-switch
              @change="handleRecommendStatusChange(scope.$index, scope.row)"
              :active-value="1"
              :inactive-value="0"
              v-model="scope.row.recommandStatus"
            >
            </el-switch>
          </p>
        </template>
      </el-table-column>
      <el-table-column label="排序" width="100" align="center">
        <template slot-scope="scope">{{ scope.row.sort }}</template>
      </el-table-column>
      <el-table-column label="SKU库存" width="100" align="center">
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            @click="handleShowSkuEditDialog(scope.$index, scope.row)"
            circle
          ></el-button>
        </template>
      </el-table-column>
      <el-table-column label="销量" width="100" align="center">
        <template slot-scope="scope">{{ scope.row.sale }}</template>
      </el-table-column>
      <el-table-column label="审核状态" width="100" align="center">
        <template slot-scope="scope">
          <p>{{ scope.row.verifyStatus | verifyStatusFilter }}</p>
          <p>
            <el-button
              type="text"
              @click="handleShowVerifyDetail(scope.$index, scope.row)"
              >审核详情
            </el-button>
          </p>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="160" align="center">
        <template slot-scope="scope">
          <p>
            <el-button
              size="mini"
              @click="handleShowProduct(scope.$index, scope.row)"
              >查看
            </el-button>
            <el-button
              size="mini"
              @click="handleUpdateProduct(scope.$index, scope.row)"
              >编辑
            </el-button>
          </p>
          <p>
            <el-button
              size="mini"
              @click="handleShowLog(scope.$index, scope.row)"
              >日志
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除
            </el-button>
          </p>
        </template>
      </el-table-column>
    </el-table>

    <!-- <div class="custom-table">
      <custom-table :tableConfig="tableConfig">
        <div slot="search_btn">
          <el-button>查看</el-button>
          <el-button>日志</el-button>
        </div>
      </custom-table>
    </div>
    <div class="custom-form">
      <custom-form :customFormConfig="customFormConfig"></custom-form>
    </div>-->
  </div>
</template>

<script>
const searchConfig = {
  seachForm: {
    keyword: null, //输入搜索
    productSn: null, //商品货号
    selectProductCateValue: null, //商品分类
    brandId: null, //商品品牌
    publishStatus: null, //上架状态
    verifyStatus: null, //审核状态
  },
}

import searchBar from '@/components/searchBar'
import { getProList } from '@/api/proApi'
import {
  fetchList,
  updateDeleteStatus,
  updateNewStatus,
  updateRecommendStatus,
  updatePublishStatus,
} from '@/api/product'
export default {
  components: {
    searchBar,
  },
  data() {
    return {
      pageNum: 1,
      pageSize: 5,
      total: null,
      searchConfig, //搜索表单
      formData: {},
      tableList: [], //表格数据
      listLoading: true,
    }
  },

  created() {
    this.git_list()
  },

  filters: {
    verifyStatusFilter(value) {
      if (value === 1) {
        return '审核通过'
      } else {
        return '未审核'
      }
    },
  },

  methods: {
    async git_list() {
      this.listLoading = true
      const params = {
        pageNum: this.pageNum,
        pageSize: this.pageSize,
      }
      const res = await getProList(params)
      this.listLoading = false
      this.tableList = res.data.list
      this.total = res.data.total
      this.pageSize = res.data.pageSize
      this.pageNum = res.data.totalPage
    },

    newItem() {
      this.$router.push('/add_pro')
    },

    // checkbox
    handleSelectionChange(val) {},

    // 上架
    handlePublishStatusChange(index, row) {
      let ids = []
      ids.push(row.id)
      this.updatePublishStatus(row.publishStatus, ids)
    },

    // 新品
    handleNewStatusChange(index, row) {
      let ids = []
      ids.push(row.id)
      this.updateNewStatus(row.newStatus, ids)
    },

    // 推荐
    handleRecommendStatusChange(index, row) {
      let ids = []
      ids.push(row.id)
      this.updateRecommendStatus(row.recommandStatus, ids)
    },

    // sku库存
    handleShowSkuEditDialog() {},

    // 审核详情
    handleShowVerifyDetail(index, row) {
      // console.log('handleShowVerifyDetail', row)
    },

    // 查看
    handleShowProduct(index, row) {
      // console.log('handleShowProduct', row)
    },

    // 编辑
    handleUpdateProduct(index, row) {
      this.$router.push({ path: '/update_pro', query: { id: row.id } })
    },

    // 日志
    handleShowLog(index, row) {
      // console.log('handleShowLog', row)
    },

    handleDelete(index, row) {
      this.$confirm('是否要进行删除操作?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {})
        .catch(() => {})
    },
  },
}
</script>

<style lang="scss" scoped>
.pro-list {
  .search-bar {
    margin-bottom: 20px;
  }
  .new-item {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    align-items: center;
    margin-bottom: 20px;
  }
}
</style>
