<template>
  <div class="table-item">
    <el-table
      :data="tableConfig.tableData"
      style="width: 100%"
      :border="tableConfig.border"
      :stripe="tableConfig.stripe"
      :highlight-current-row="tableConfig.highlightCurrentRow"
      @current-change="handleCurrentChange"
      @selection-change="handleSelectionChange"
    >
      <!-- checkbox -->
      <el-table-column
        type="selection"
        width="55"
        v-if="tableConfig.selection"
        align="center"
      >
      </el-table-column>
      <!-- 序号 -->
      <el-table-column
        type="index"
        :index="indexMethod"
        label="序号"
        align="center"
        v-if="tableConfig.showIndex"
      >
      </el-table-column>
      <!-- 其他 -->
      <el-table-column
        :label="item.label"
        v-for="item in tableConfig.tableHeaders"
        :key="item.id"
        :show-overflow-tooltip="item.show"
        :width="item.width || null"
        :align="item.align ? 'center' : null"
      >
        <template slot-scope="scope">
          <!-- 普通文本 -->
          <span v-if="item.type === 'text'">{{ scope.row[item.name] }}</span>
          <!-- 数组格式 -->
          <span v-if="item.type === 'arrayText'"
            ><span
              v-for="(item2, index2) in scope.row[item.name]"
              :key="index2"
              >{{ item2 }}</span
            ></span
          >
          <!-- switch开关 -->
          <span v-if="item.type === 'switch'">
            <el-switch
              v-model="scope.row[item.name]"
              :active-value="1"
              :inactive-value="0"
            >
            </el-switch>
          </span>
          <!-- 操作 -->
          <div class="operate" v-if="item.type === 'operate'">
            <!-- <el-button>查看</el-button>
            <el-button>日志</el-button> -->
            <slot name="search_btn"> </slot>
            <div class="bottom">
              <el-button type="primary" @click="edit(scope.row)"
                >编辑</el-button
              >
              <el-button type="danger" @click="del(scope.row)">删除</el-button>
            </div>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    tableConfig: {
      type: Object,
      default: () => {
        return {}
      },
      require: true,
    },
  },

  data() {
    return {}
  },

  methods: {
    // 单选
    handleCurrentChange(val) {
      console.log(val)
    },

    // 多选
    handleSelectionChange(val) {
      console.log(val)
    },

    // 序号
    indexMethod(index) {
      return index + 1
    },

    // 编辑
    edit(row) {
      console.log(row)
    },

    // 删除
    del(row) {
      console.log(row)
    },
  },
}
</script>

<style lang="scss" scoped>
.table-item {
  .bottom {
    margin-top: 5px;
  }
}
</style>
