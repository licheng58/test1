<template>
  <div class="pro-form">
    <el-card shadow="always" class="pro-index">
      <el-steps :active="active" finish-status="success" align-center>
        <el-step title="填写商品信息"></el-step>
        <el-step title="填写商品促销"></el-step>
        <el-step title="填写商品属性"></el-step>
        <el-step title="选择商品关联"></el-step>
      </el-steps>
      <div class="pro-item">
        <pro-one
          v-show="active === 0"
          v-model="proForm"
          @nextStep="nextStep"
        ></pro-one>
        <pro-two
          v-show="active === 1"
          v-model="proForm"
          @lastStep="lastStep"
          @nextStep="nextStep"
        ></pro-two>
        <pro-three
          v-show="active === 2"
          v-model="proForm"
          @lastStep="lastStep"
          @nextStep="nextStep"
        ></pro-three>
        <pro-four
          v-show="active === 3"
          v-model="proForm"
          @lastStep="lastStep"
        ></pro-four>
      </div>
    </el-card>
  </div>
</template>

<script>
const defaultProForm = {
  albumPics: '', //商品的主图和画册图片
  brandId: null, //商品品牌
  brandName: '', //品牌：
  deleteStatus: 0, //
  description: '', //商品介绍
  detailDesc: '', //详细页描述
  detailHtml: '', //电脑端详情
  detailMobileHtml: '', //移动端详情
  detailTitle: '', //详细页标题
  feightTemplateId: 0, //
  flashPromotionCount: 0, //
  flashPromotionId: 0, //
  flashPromotionPrice: 0, //
  flashPromotionSort: 0, //
  giftPoint: 0, //赠送积分：
  giftGrowth: 0, //赠送成长值：
  keywords: '', //商品关键字
  lowStock: 0, //库存预警值
  name: '', //商品名称
  newStatus: 0, //商品推荐-新品
  note: '', //商品备注
  originalPrice: 0, //市场价
  pic: '', //属性图片：
  //会员价格{memberLevelId: 0,memberPrice: 0,memberLevelName: null}
  memberPriceList: [],
  //商品满减
  productFullReductionList: [{ fullPrice: 0, reducePrice: 0 }],
  //商品阶梯价格
  productLadderList: [{ count: 0, discount: 0, price: 0 }],
  previewStatus: 0, //预告商品
  price: 0, //商品售价
  productAttributeCategoryId: null, //属性类型
  //商品属性相关{productAttributeId: 0, value: ''}
  productAttributeValueList: [], //获取设置的可手动添加属性值
  //商品sku库存信息{lowStock: 0, pic: '', price: 0, sale: 0, skuCode: '', spData: '', stock: 0}
  skuStockList: [], //获取选中的属性值
  //商品相关专题{subjectId: 0}
  subjectProductRelationList: [], //选中的专题
  //商品相关优选{prefrenceAreaId: 0}
  prefrenceAreaProductRelationList: [], //选中的优选
  productCategoryId: null, //商品分类
  productCategoryName: '', //
  productSn: '', //商品货号
  promotionEndTime: '', // 结束时间
  promotionPerLimit: 0,
  promotionPrice: null, //促销价格
  promotionStartTime: '', //开始时间
  promotionType: 0, //选择优惠方式
  publishStatus: 0, //商品上架
  recommandStatus: 0, //商品推荐-推荐
  sale: 0, //
  serviceIds: '', //选中的服务保证
  sort: 0, //排序
  stock: 0, //商品库存
  subTitle: '', //副标题
  unit: '', //计量单位
  usePointLimit: 0, //积分购买限制：
  verifyStatus: 0, //
  weight: 0, //商品重量
}
import proOne from './proOne'
import proTwo from './proTwo'
import proThree from './proThree'
import proFour from './proFour'
export default {
  components: {
    proOne,
    proTwo,
    proThree,
    proFour,
  },

  data() {
    return {
      proForm: Object.assign({}, defaultProForm),
      active: 0,
      // showStatus: [true, false, false, false],
    }
  },

  methods: {
    // 上一步
    lastStep() {
      this.active--
      console.log(this.active)
    },

    // 下一步
    nextStep() {
      this.active++
      console.log(this.active)
    },
  },
}
</script>

<style lang="scss" scoped>
.pro-form {
  min-height: 100%;
  display: flex;
  justify-content: center;
  .pro-index {
    min-height: 100%;
    width: 60%;
  }
  .pro-item {
    margin-top: 20px;
  }
  .pro-index .el-card__body {
    height: 100%;
    overflow: auto;
  }
}
</style>
