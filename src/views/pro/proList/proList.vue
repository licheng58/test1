<template>
  <div class="pro-list">
    <div class="search-bar">
      <search-bar :searchConfig="searchConfig"></search-bar>
    </div>
    <div class="custom-table">
      <custom-table :tableConfig="tableConfig">
        <div slot="search_btn">
          <el-button>查看</el-button>
          <el-button>日志</el-button>
        </div>
      </custom-table>
    </div>
    <div class="custom-form">
      <custom-form :customFormConfig="customFormConfig"></custom-form>
    </div>
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
  seachItems: [
    {
      id: 1,
      key: 'keyword',
      label: '输入搜索',
      type: 'input',
    },
    {
      id: 2,
      key: 'productSn',
      label: '商品货号',
      type: 'input',
    },
    {
      id: 3,
      key: 'selectProductCateValue',
      label: '商品分类',
      type: 'select',
      options: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
    },
    {
      id: 4,
      key: 'brandId',
      label: '商品品牌',
      type: 'cascader',
      options: [
        {
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致',
                },
                {
                  value: 'fankui',
                  label: '反馈',
                },
                {
                  value: 'xiaolv',
                  label: '效率',
                },
                {
                  value: 'kekong',
                  label: '可控',
                },
              ],
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航',
                },
                {
                  value: 'dingbudaohang',
                  label: '顶部导航',
                },
              ],
            },
          ],
        },
        {
          value: 'zujian',
          label: '组件',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [
                {
                  value: 'layout',
                  label: 'Layout 布局',
                },
                {
                  value: 'color',
                  label: 'Color 色彩',
                },
                {
                  value: 'typography',
                  label: 'Typography 字体',
                },
                {
                  value: 'icon',
                  label: 'Icon 图标',
                },
                {
                  value: 'button',
                  label: 'Button 按钮',
                },
              ],
            },
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio 单选框',
                },
                {
                  value: 'checkbox',
                  label: 'Checkbox 多选框',
                },
                {
                  value: 'input',
                  label: 'Input 输入框',
                },
                {
                  value: 'input-number',
                  label: 'InputNumber 计数器',
                },
                {
                  value: 'select',
                  label: 'Select 选择器',
                },
                {
                  value: 'cascader',
                  label: 'Cascader 级联选择器',
                },
                {
                  value: 'switch',
                  label: 'Switch 开关',
                },
                {
                  value: 'slider',
                  label: 'Slider 滑块',
                },
                {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器',
                },
                {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器',
                },
                {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器',
                },
                {
                  value: 'upload',
                  label: 'Upload 上传',
                },
                {
                  value: 'rate',
                  label: 'Rate 评分',
                },
                {
                  value: 'form',
                  label: 'Form 表单',
                },
              ],
            },
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table 表格',
                },
                {
                  value: 'tag',
                  label: 'Tag 标签',
                },
                {
                  value: 'progress',
                  label: 'Progress 进度条',
                },
                {
                  value: 'tree',
                  label: 'Tree 树形控件',
                },
                {
                  value: 'pagination',
                  label: 'Pagination 分页',
                },
                {
                  value: 'badge',
                  label: 'Badge 标记',
                },
              ],
            },
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert 警告',
                },
                {
                  value: 'loading',
                  label: 'Loading 加载',
                },
                {
                  value: 'message',
                  label: 'Message 消息提示',
                },
                {
                  value: 'message-box',
                  label: 'MessageBox 弹框',
                },
                {
                  value: 'notification',
                  label: 'Notification 通知',
                },
              ],
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'NavMenu 导航菜单',
                },
                {
                  value: 'tabs',
                  label: 'Tabs 标签页',
                },
                {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑',
                },
                {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单',
                },
                {
                  value: 'steps',
                  label: 'Steps 步骤条',
                },
              ],
            },
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog 对话框',
                },
                {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示',
                },
                {
                  value: 'popover',
                  label: 'Popover 弹出框',
                },
                {
                  value: 'card',
                  label: 'Card 卡片',
                },
                {
                  value: 'carousel',
                  label: 'Carousel 走马灯',
                },
                {
                  value: 'collapse',
                  label: 'Collapse 折叠面板',
                },
              ],
            },
          ],
        },
        {
          value: 'ziyuan',
          label: '资源',
          children: [
            {
              value: 'axure',
              label: 'Axure Components',
            },
            {
              value: 'sketch',
              label: 'Sketch Templates',
            },
            {
              value: 'jiaohu',
              label: '组件交互文档',
            },
          ],
        },
      ],
    },
    {
      id: 5,
      key: 'publishStatus',
      label: '上架状态',
      type: 'select',
      options: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
    },
    {
      id: 6,
      key: 'verifyStatus',
      label: '审核状态',
      type: 'select',
      options: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
    },
  ],
}

const tableConfig = {
  border: true,
  stripe: true,
  highlightCurrentRow: false,
  selection: true,
  showIndex: true,
  tableHeaders: [
    {
      id: 1,
      label: '日期',
      type: 'text',
      name: 'date',
    },
    {
      id: 2,
      label: '名称',
      type: 'text',
      name: 'name',
    },
    {
      id: 3,
      label: '地址',
      type: 'text',
      name: 'address',
      show: true,
    },
    {
      id: 5,
      label: 'switch',
      type: 'switch',
      name: 'aaa',
    },
    {
      id: 4,
      label: '操作',
      type: 'operate',
      width: '150',
      align: true,
    },
  ],
  tableData: [
    {
      date: '2016-05-02',
      name: '王小虎',
      aaa: 1,
      address: '上海市普陀区金沙江路 1518 弄',
    },
    {
      date: '2016-05-04',
      name: '王小虎',
      aaa: 0,
      address: '上海市普陀区金沙江路 1517 弄',
    },
    {
      date: '2016-05-01',
      name: '王小虎',
      aaa: 1,
      address: '上海市普陀区金沙江路 1519 弄',
    },
    {
      date: '2016-05-03',
      name: '王小虎',
      aaa: 0,
      address: '上海市普陀区金沙江路 1516 弄',
    },
  ],
}

const customFormConfig = {
  formData: {
    name: null,
    age: 0,
    sex: null,
    desc: null,
    likes: [],
    age2: null,
    age3: [],
    time: '',
    date: '',
    data_time: '',
    switch: true,
  },
  formItems: [
    {
      id: 1,
      label: '姓名',
      key: 'name',
      type: 'input',
    },
    {
      id: 2,
      label: '年龄',
      key: 'age',
      type: 'radio',
      options: [
        { id: 1, label: 0, value: '女' },
        { id: 2, label: 1, value: '男' },
      ],
    },
    {
      id: 3,
      label: '性别',
      key: 'sex',
      type: 'input',
    },
    {
      id: 4,
      label: '描述',
      key: 'desc',
      type: 'input',
      inputType: 'textarea',
    },
    {
      id: 5,
      label: '爱好',
      key: 'likes',
      type: 'checkbox',
      options: [
        { id: 1, label: 0, value: '女' },
        { id: 2, label: 1, value: '男' },
      ],
    },
    {
      id: 6,
      label: '年龄',
      key: 'age2',
      type: 'select',
      options: [
        { id: 1, value: '0', label: '女' },
        { id: 2, value: '1', label: '男' },
        { id: 3, value: '2', label: '未知' },
      ],
    },
    {
      id: 7,
      label: '年龄',
      key: 'age3',
      type: 'select',
      multiple: true,
      options: [
        { id: 1, value: '0', label: '女' },
        { id: 2, value: '1', label: '男' },
        { id: 3, value: '2', label: '未知' },
      ],
    },
    {
      id: 8,
      label: '时间',
      key: 'time',
      type: 'time',
    },
    {
      id: 9,
      label: '日期',
      key: 'date',
      type: 'date',
    },
    {
      id: 9,
      label: '日期时间',
      key: 'date_time',
      type: 'date_time',
    },
    {
      id: 10,
      label: 'switch',
      key: 'switch',
      type: 'switch',
    },
  ],
}

const defaultForm = {
  //   albumPics: null,//商品图片
  // // brandId: 3
  // brandName: null,//品牌名称
  // deleteStatus: 0
  // // description: null
  // detailDesc: null
  // detailHtml: null
  // detailMobileHtml: null
  // detailTitle: ""
  // feightTemplateId: 0
  // giftGrowth: 3788
  // giftPoint: 3788
  // id: 26
  // keywords: ""
  // lowStock: 0
  // name: "华为 HUAWEI P20 "
  // newStatus: null,//新品状态
  // note: ""
  // originalPrice: 4288
  // pic: "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/5ac1bf58Ndefaac16.jpg"
  // previewStatus: 1
  // price: 3788
  // productAttributeCategoryId: 3
  // productCategoryId: 19
  // productCategoryName: "手机通讯"
  // productSn: "6946605"
  // promotionEndTime: null
  // promotionPerLimit: 0
  // promotionPrice: null
  // promotionStartTime: null
  // promotionType: 1
  // publishStatus: 1
  // recommandStatus: 1
  // sale: 0
  // serviceIds: "2,3,1"
  // sort: 100
  // stock: 1000
  // subTitle: "AI智慧全面屏 6GB +64GB 亮黑色 全网通版 移动联通电信4G手机 双卡双待手机 双卡双待"
  // unit: "件"
  // usePointLimit: 0
  // verifyStatus: 0
  // weight: 0
}

import searchBar from '@/components/searchBar'
import customTable from '@/components/customTable'
import customForm from '@/components/customForm'
import { getProList } from '../api'
export default {
  components: {
    searchBar,
    customTable,
    customForm,
  },
  data() {
    return {
      pageNum: 1,
      pageSize: 5,
      total: null,
      searchConfig, //搜索表单
      tableConfig, //table数据
      customFormConfig, //form数据
      defaultForm,
      formData: {},
    }
  },

  created() {
    this.git_list()
  },

  methods: {
    async git_list() {
      const params = {
        pageNum: this.pageNum,
        pageSize: this.pageSize,
      }
      const res = await getProList(params)
      console.log(res)
    },
  },
}
</script>

<style lang="scss" scoped>
.pro-list {
  .search-bar {
    margin-bottom: 20px;
  }
}
</style>
