<template>
  <div class="pro-form">
    <div class="form-data">
      <div class="form-title">
        <el-steps :active="active" finish-status="success">
          <el-step title="步骤 1"></el-step>
          <el-step title="步骤 2"></el-step>
          <el-step title="步骤 3"></el-step>
        </el-steps>
      </div>
      <el-form :model="formData" label-width="120px" ref="formData">
        <el-row>
          <div class="page-one" v-show="false">
            <el-col :span="24">
              <el-form-item label="商品分类">
                <el-input v-model="formData.aa"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="商品名称">
                <el-input v-model="formData.bb"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="副标题">
                <el-input v-model="formData.cc"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="商品品牌">
                <el-select v-model="formData.dd">
                  <el-option
                    :key="item.id"
                    :label="item.label"
                    :value="item.value"
                    v-for="item in list"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="商品介绍">
                <el-input
                  :rows="3"
                  resize="none"
                  type="textarea"
                  v-model="formData.ee"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="商品货号">
                <el-input v-model="formData.ff"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="商品售价">
                <el-input v-model="formData.gg"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="市场价">
                <el-input v-model="formData.hh"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="市场价">
                <el-input v-model="formData.ii"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="商品库存">
                <el-input v-model="formData.jj"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="计量单位">
                <el-input v-model="formData.kk"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="商品重量">
                <el-input v-model="formData.ll"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="排序">
                <el-input v-model="formData.mm"></el-input>
              </el-form-item>
            </el-col>
          </div>
          <div class="page-two" v-show="false">
            <el-col :span="24">
              <el-form-item label="赠送积分">
                <el-input v-model="formData.nn"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="赠送成长值">
                <el-input v-model="formData.oo"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="积分购买限制">
                <el-input v-model="formData.pp"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="预告商品">
                <el-switch v-model="formData.qq"></el-switch>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="商品上架">
                <el-switch v-model="formData.rr"></el-switch>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="新品推荐">
                <el-switch v-model="formData.ss"></el-switch>
                <el-switch v-model="formData.tt"></el-switch>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="服务保证">
                <el-checkbox
                  :key="item.id"
                  :label="item.label"
                  :value="item.value"
                  v-for="item in list"
                  v-model="formData.uu"
                ></el-checkbox>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="详细页标题">
                <el-input v-model="formData.vv"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="详细页描述">
                <el-input v-model="formData.ww"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="商品关键字">
                <el-input v-model="formData.xx"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="商品备注">
                <el-input
                  resize="none"
                  :rows="3"
                  type="textarea"
                  v-model="formData.yy"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="选择优惠方式">
                <el-checkbox-button
                  :key="item.id"
                  :label="item.label"
                  :value="item.value"
                  v-for="item in list"
                  v-model="formData.zz"
                ></el-checkbox-button>
              </el-form-item>
            </el-col>
          </div>

          <div class="page-three">
            <el-col :span="24">
              <el-form-item label="属性类型">
                <el-cascader
                  v-model="formData.a"
                  :options="options"
                  @change="handleChange"
                ></el-cascader>
              </el-form-item>
            </el-col>

            <el-col :span="24">
              <el-form-item label="商品规格" style="margin-bottom:10px">
                <div class="pro-item">
                  <div class="top">
                    <div class="title">颜色 :</div>
                    <div class="content">
                      <el-input> </el-input>
                      <el-button @click="addProItem" style="margin-left:10px"
                        >增加</el-button
                      >
                    </div>
                  </div>
                  <div class="bottom">
                    <div class="bottom-title">尺寸 :</div>
                    <div class="bottom-content">
                      <el-checkbox>123</el-checkbox>
                    </div>
                  </div>
                </div>

                <el-col :span="24">
                  <el-table :data="tableData" border style="width: 100%">
                    <el-table-column
                      prop="aaa"
                      label="颜色"
                      align="center"
                      width="50"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="bbb"
                      label="尺寸"
                      align="center"
                      width="50"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="ccc"
                      label="销售价格"
                      align="center"
                      width="50"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="ddd"
                      label="商品库存"
                      align="center"
                      width="50"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="eee"
                      label="库存预售值"
                      align="center"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="fff"
                      label="SKU编码"
                      align="center"
                      width="50"
                    >
                    </el-table-column>
                    <el-table-column label="操作" align="center" width="60">
                      <template slot-scope="scope">
                        <el-button
                          style="color:#f56c6c"
                          type="text"
                          @click="delItem(scope.row)"
                          >删除</el-button
                        >
                      </template>
                    </el-table-column>
                  </el-table>
                </el-col>
              </el-form-item>
            </el-col>

            <!-- 操作 -->
            <el-col :span="24">
              <el-form-item label="">
                <el-button type="primary" @click="refreshList"
                  >刷新列表</el-button
                >
                <el-button type="primary" @click="samePrice"
                  >同步价格</el-button
                >
                <el-button type="primary" @click="sanmeStore"
                  >同步库存</el-button
                >
              </el-form-item>
            </el-col>

            <el-col :span="24">
              <el-form-item label="商品参数">
                <el-input></el-input>
              </el-form-item>
            </el-col>
          </div>

          <el-col :span="24" style="text-align:center">
            <el-button>上一步,填写商品促销</el-button>
            <el-button type="primary">下一步,填写商品促销</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
const formData = {
  aa: null,
  bb: null,
  cc: null,
  ee: null,
  ff: null,
  gg: null,
  hh: null,
  ii: null,
  jj: null,
  kk: null,
  ll: null,
  mm: null,
  nn: null,
  oo: null,
  pp: null,
  qq: null,
  rr: null,
  ss: null,
  tt: null,
  uu: null,
  vv: null,
  ww: null,
  xx: null,
  yy: null,
  zz: [],
  a: null,
  b: null,
  c: null,
  d: null,
  e: null,
  f: null,
  g: null,
  h: null,
}

const options = [
  {
    id: 1,
    label: '111',
    value: '11',
    children: [{ id: 2, label: '222', value: '22' }],
  },
]

export default {
  data() {
    return {
      active: 2,
      formData,
      options,
      list: [
        { id: 1, value: '1', label: '上海' },
        { id: 2, value: '2', label: '北京' },
        { id: 3, value: '3', label: '香港' },
      ],
      tableData: [
        {
          id: 1,
          aaa: '111',
          bbb: '222',
          ccc: '333',
          ddd: '444',
          eee: '555',
          fff: '666',
          ggg: '777',
        },
        {
          id: 2,
          aaa: 'qwe',
          bbb: 'qew',
          ccc: 'qe',
          ddd: 'eee',
          eee: 'ww',
          fff: 'dd',
          ggg: 'dff',
        },
        {
          id: 3,
          aaa: 'vv',
          bbb: 'vv',
          ccc: 'vv',
          ddd: 'vv',
          eee: 'vv',
          fff: 'vv',
          ggg: 'vv',
        },
      ],
    }
  },

  methods: {
    handleChange(val) {},

    // 增加商品规格
    addProItem() {},

    // 删除
    delItem(row) {},

    // 刷新列表
    refreshList() {},

    // 同步价格
    samePrice() {},

    // 同步库存
    sanmeStore() {},
  },
}
</script>

<style lang="scss" scoped>
.pro-form {
  height: 100%;
  display: flex;
  justify-content: center;
  .form-title {
    margin-bottom: 30px;
  }
  .form-data {
    width: 50%;
    height: 100%;
    border: 1px solid #eee;
    padding: 30px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .pro-item {
    background-color: #eee;
    border: 1px solid #ddd;
    padding: 30px;
    margin-bottom: 18px;
    .top {
      .title {
      }
      .content {
        width: 200px;
        display: flex;
      }
    }
    .bottom {
      .bottom-title {
      }
      .bottom-content {
      }
    }
  }
}
</style>
