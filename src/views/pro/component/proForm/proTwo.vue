<template>
  <div class="pro-two">
    <el-form
      :model="value"
      ref="productSaleForm"
      label-width="120px"
      style="width: 600px"
      size="small"
    >
      <el-form-item label="赠送积分：">
        <el-input v-model="value.giftPoint"></el-input>
      </el-form-item>
      <el-form-item label="赠送成长值：">
        <el-input v-model="value.giftGrowth"></el-input>
      </el-form-item>
      <el-form-item label="积分购买限制：">
        <el-input v-model="value.usePointLimit"></el-input>
      </el-form-item>
      <el-form-item label="预告商品：">
        <el-switch
          v-model="value.previewStatus"
          :active-value="1"
          :inactive-value="0"
        >
        </el-switch>
      </el-form-item>
      <el-form-item label="商品上架：">
        <el-switch
          v-model="value.publishStatus"
          :active-value="1"
          :inactive-value="0"
        >
        </el-switch>
      </el-form-item>
      <el-form-item label="商品推荐：">
        <span style="margin-right: 10px">新品</span>
        <el-switch
          v-model="value.newStatus"
          :active-value="1"
          :inactive-value="0"
        >
        </el-switch>
        <span style="margin-left: 10px;margin-right: 10px">推荐</span>
        <el-switch
          v-model="value.recommandStatus"
          :active-value="1"
          :inactive-value="0"
        >
        </el-switch>
      </el-form-item>
      <el-form-item label="服务保证：">
        <el-checkbox-group v-model="selectServiceList">
          <el-checkbox :label="1">无忧退货</el-checkbox>
          <el-checkbox :label="2">快速退款</el-checkbox>
          <el-checkbox :label="3">免费包邮</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="详细页标题：">
        <el-input v-model="value.detailTitle"></el-input>
      </el-form-item>
      <el-form-item label="详细页描述：">
        <el-input v-model="value.detailDesc"></el-input>
      </el-form-item>
      <el-form-item label="商品关键字：">
        <el-input v-model="value.keywords"></el-input>
      </el-form-item>
      <el-form-item label="商品备注：">
        <el-input
          v-model="value.note"
          type="textarea"
          :autoSize="true"
        ></el-input>
      </el-form-item>
      <el-form-item label="选择优惠方式：">
        <el-radio-group v-model="value.promotionType" size="small">
          <el-radio-button :label="0">无优惠</el-radio-button>
          <el-radio-button :label="1">特惠促销</el-radio-button>
          <el-radio-button :label="2">会员价格</el-radio-button>
          <el-radio-button :label="3">阶梯价格</el-radio-button>
          <el-radio-button :label="4">满减价格</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item v-show="value.promotionType === 1">
        <div>
          开始时间：
          <el-date-picker
            v-model="value.promotionStartTime"
            value-format="timestamp"
            type="datetime"
            :picker-options="pickerOptions1"
            placeholder="选择开始时间"
          >
          </el-date-picker>
        </div>
        <div class="littleMargin">
          结束时间：
          <el-date-picker
            v-model="value.promotionEndTime"
            value-format="timestamp"
            type="datetime"
            :picker-options="pickerOptions1"
            placeholder="选择结束时间"
          >
          </el-date-picker>
        </div>
        <div class="littleMargin">
          促销价格：
          <el-input
            style="width: 220px"
            v-model="value.promotionPrice"
            placeholder="输入促销价格"
          ></el-input>
        </div>
      </el-form-item>
      <el-form-item v-show="value.promotionType === 2">
        <div
          v-for="(item, index) in value.memberPriceList"
          :key="index"
          :class="{ littleMargin: index !== 0 }"
        >
          {{ item.memberLevelName }}：
          <el-input v-model="item.memberPrice" style="width: 200px"></el-input>
        </div>
      </el-form-item>
      <el-form-item v-show="value.promotionType === 3">
        <el-table :data="value.productLadderList" style="width: 80%" border>
          <el-table-column label="数量" align="center" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.count"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="折扣" align="center" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.discount"></el-input>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作">
            <template slot-scope="scope">
              <el-button
                type="text"
                @click="handleRemoveProductLadder(scope.$index, scope.row)"
                >删除</el-button
              >
              <el-button
                type="text"
                @click="handleAddProductLadder(scope.$index, scope.row)"
                >添加</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item v-show="value.promotionType === 4">
        <el-table
          :data="value.productFullReductionList"
          style="width: 80%"
          border
        >
          <el-table-column label="满" align="center" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.fullPrice"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="立减" align="center" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.reducePrice"></el-input>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作">
            <template slot-scope="scope">
              <el-button type="text" @click="delItem(scope.$index, scope.row)"
                >删除</el-button
              >
              <el-button type="text" @click="addItem(scope.$index, scope.row)"
                >添加</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button @click="lastStep">上一步，填写商品信息</el-button>
        <el-button type="primary" @click="nextStep"
          >下一步，填写商品属性</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    value: Object,
  },

  data() {
    return {
      selectServiceList: [], //选中的服务保证
      //日期选择器配置
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() < Date.now()
        },
      },
    }
  },

  methods: {
    // 删除
    handleRemoveProductLadder(index, row) {},

    // 添加
    handleAddProductLadder(index, row) {},

    // 添加
    addItem(index, row) {},

    // 删除
    delItem(index, row) {},

    // 上一步
    lastStep() {
      this.$emit('lastStep')
    },

    // 下一步
    nextStep() {
      this.$emit('nextStep')
    },
  },
}
</script>

<style lang="scss" scoped>
.pro-two {
  .littleMargin {
    margin-top: 10px;
  }
}
</style>
