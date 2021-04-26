<template>
  <div class="pro-one">
    <el-form
      :model="value"
      :rules="rules"
      ref="productInfoForm"
      label-width="120px"
      style="width: 600px"
      size="small"
    >
      <el-form-item label="商品分类：" prop="productCategoryId">
        <el-cascader
          v-model="selectProductCateValue"
          :options="productCateOptions"
        >
        </el-cascader>
      </el-form-item>
      <el-form-item label="商品名称：" prop="name">
        <el-input v-model="value.name"></el-input>
      </el-form-item>
      <el-form-item label="副标题：" prop="subTitle">
        <el-input v-model="value.subTitle"></el-input>
      </el-form-item>
      <el-form-item label="商品品牌：" prop="brandId">
        <el-select
          v-model="value.brandId"
          @change="handleBrandChange"
          placeholder="请选择品牌"
        >
          <el-option
            v-for="item in brandOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品介绍：">
        <el-input
          :autoSize="true"
          v-model="value.description"
          type="textarea"
          placeholder="请输入内容"
        ></el-input>
      </el-form-item>
      <el-form-item label="商品货号：">
        <el-input v-model="value.productSn"></el-input>
      </el-form-item>
      <el-form-item label="商品售价：">
        <el-input v-model="value.price"></el-input>
      </el-form-item>
      <el-form-item label="市场价：">
        <el-input v-model="value.originalPrice"></el-input>
      </el-form-item>
      <el-form-item label="商品库存：">
        <el-input v-model="value.stock"></el-input>
      </el-form-item>
      <el-form-item label="计量单位：">
        <el-input v-model="value.unit"></el-input>
      </el-form-item>
      <el-form-item label="商品重量：">
        <el-input v-model="value.weight" style="width: 300px"></el-input>
        <span style="margin-left: 20px">克</span>
      </el-form-item>
      <el-form-item label="排序">
        <el-input v-model="value.sort"></el-input>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button
          type="primary"
          size="medium"
          @click="nextStep('productInfoForm')"
          >下一步，填写商品促销</el-button
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
      selectProductCateValue: [], //商品分类选中的值
      productCateOptions: [], //商品分类--接口获取
      brandOptions: [], //商品品牌--接口获取
      rules: {
        name: [
          { required: true, message: '请输入商品名称', trigger: 'blur' },
          {
            min: 2,
            max: 140,
            message: '长度在 2 到 140 个字符',
            trigger: 'blur',
          },
        ],
        subTitle: [
          { required: true, message: '请输入商品副标题', trigger: 'blur' },
        ],
        productCategoryId: [
          { required: true, message: '请选择商品分类', trigger: 'blur' },
        ],
        brandId: [
          { required: true, message: '请选择商品品牌', trigger: 'blur' },
        ],
        description: [
          { required: true, message: '请输入商品介绍', trigger: 'blur' },
        ],
        requiredProp: [
          { required: true, message: '该项为必填项', trigger: 'blur' },
        ],
      },
    }
  },

  methods: {
    // 下一步
    nextStep() {
      this.$emit('nextStep')
    },

    // 选择品牌
    handleBrandChange(val) {},
  },
}
</script>

<style lang="scss" scoped>
.pro-one {
}
</style>
