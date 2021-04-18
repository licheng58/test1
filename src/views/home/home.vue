<template>
  <div class="home">
    <div class="header">
      <div class="header-top">
        <div :key="index" class="header-top-item" v-for="(item,index) in headerList">
          <div class="header-top-item-title">{{item.name}}</div>
          <div class="header-top-item-content">{{item.content}}</div>
        </div>
      </div>
      <div class="header-bottom">
        <div :key="index" class="header-bottom-item" v-for="(item,index) in headerList2">
          <div class="header-bottom-item-left">
            <i :class="item.icon" class="icon iconfont" style="font-size:50px;color:#409eff"></i>
          </div>
          <div class="header-bottom-item-right">
            <div class="header-bottom-item-right-top">{{item.top}}</div>
            <div class="header-bottom-item-right-body">{{item.body}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="body-first">
      <div class="body-first-title">待处理事件</div>
      <div class="body-first-body">
        <el-row :gutter="20">
          <el-col :key="index" :span="8" v-for="(item,index) in bodyFirstList">
            <div :key="index" class="body-first-body-item">
              <div class="body-first-body-item-left">{{item.name}}</div>
              <div class="body-first-body-item-right">(10)</div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="body-second">
      <el-row :gutter="20">
        <el-col :key="index" :span="12" v-for="(item,index) in bodySecondList">
          <div class="body-second-item">
            <div class="body-second-item-title">{{item.title}}</div>
            <div class="body-second-item-body">
              <div
                :key="proindex"
                class="body-second-item-body-min"
                v-for="(pro,proindex) in item.body"
              >
                <div class="body-second-item-body-min-top">{{pro.num}}</div>
                <div class="body-second-item-body-min-bottom">{{pro.name}}</div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="bottom">
      <div class="bottom-title">订单统计</div>
      <div class="bottom-body">
        <div class="bottom-body-left">
          <div class="bottom-body-left-item">
            <div class="bottom-body-left-item-top">本月订单总数</div>
            <div class="bottom-body-left-item-center">10000</div>
            <div class="bottom-body-left-item-bottom">
              <span>+10%</span>
              <span>同比上月</span>
            </div>
          </div>
        </div>
        <div class="bottom-body-right">
          <div class="bottom-body-right-top">日期</div>
          <div class="bottom-body-right-bottom">eee</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 1,
      headerList: [
        { name: '后台管理', content: 'mall' },
        { name: '前段项目', content: 'mall' },
        { name: '学习进程', content: 'mall' },
        { name: '学习进程', content: 'mall' },
      ],
      headerList2: [
        { icon: 'icon-shangpinfenlei', top: 'mall', body: '11' },
        { icon: 'icon-shangpinfenlei', top: 'mall', body: '11' },
        { icon: 'icon-shangpinfenlei', top: 'mall', body: '11' },
        { icon: 'icon-shangpinfenlei', top: 'mall', body: '11' },
      ],
      bodyFirstList: [
        { name: '待付款订单' },
        { name: '已完成订单' },
        { name: '待确认收货订单' },
        { name: '待发货订单' },
        { name: '新缺货登记' },
        { name: '待处理退货申请' },
        { name: '已发货订单' },
        { name: '待处理退货订单' },
        { name: '广告位即将到期' },
      ],
      bodySecondList: [
        {
          title: '商品总览',
          body: [
            { name: '已上架', num: '100' },
            { name: '已上架', num: '300' },
            { name: '库存紧张', num: '500' },
            { name: '全部商品', num: '1400' },
          ],
        },
        {
          title: '用户总览',
          body: [
            { name: '今日新增', num: '100' },
            { name: '昨日新增', num: '1400' },
            { name: '本月新增', num: '1003' },
            { name: '会员总数', num: '11100' },
          ],
        },
      ],
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.home {
  .header {
  }
  .header-top {
    display: flex;
    .header-top-item {
      border: 1px solid #ddd;
      width: 100%;
      margin: 20px;
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
      .header-top-item-title {
        padding: 20px;
        background-color: #f2f6fc;
        font-size: 16px;
        text-align: center;
      }
      .header-top-item-content {
        padding: 26px 20px;
        font-size: 14px;
        text-align: center;
        color: #409eff;
      }
    }
  }
  .header-bottom {
    display: flex;
    .header-bottom-item {
      border: 1px solid #ddd;
      padding: 20px;
      width: 100%;
      display: flex;
      margin: 20px;
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
    .header-bottom-item-left {
      width: 30%;
      text-align: center;
    }
    .header-bottom-item-right {
      flex: 1;
    }
    .header-bottom-item-right-top {
      font-size: 16px;
      text-align: center;
    }
    .header-bottom-item-right-body {
      font-size: 16px;
      text-align: center;
    }
  }
  .body-first {
    border: 1px solid #ddd;
    .body-first-title {
      background-color: #f2f6fc;
      padding: 20px;
      font-size: 16px;
    }
    .body-first-body {
      padding: 20px 40px;
    }
    .body-first-body-item {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      padding: 10px;
    }
    .body-first-body-item-left {
      font-size: 14px;
    }
    .body-first-body-item-right {
      color: #f56c6c;
      font-size: 14px;
    }
  }
  .body-second {
    margin: 20px 0;
    .body-second-item {
      border: 1px solid #ddd;
    }
    .body-second-item-title {
      padding: 20px;
      background-color: #f2f6fc;
      font-size: 16px;
    }
    .body-second-item-body {
      padding: 40px;
      display: flex;
    }
    .body-second-item-body-min {
      width: 25%;
      text-align: center;
    }
    .body-second-item-body-min-top {
      color: #f56c6c;
      font-size: 20px;
    }
    .body-second-item-body-min-bottom {
    }
  }
  .bottom {
    border: 1px solid #ddd;
    .bottom-title {
      padding: 20px;
      background-color: #f2f6fc;
      font-size: 16px;
    }
    .bottom-body {
      display: flex;
    }
    .bottom-body-left {
      width: 20%;
      border-right: 1px solid #ddd;
      padding: 20px;
      text-align: center;
    }
    .bottom-body-left-item {
    }
    .bottom-body-left-item-top {
    }
    .bottom-body-left-item-center {
    }
    .bottom-body-left-item-bottom {
    }
    .bottom-body-right {
      flex: 1;
      padding: 20px;
    }
    .bottom-body-right-top {
      text-align: end;
    }
    .bottom-body-right-bottom {
    }
  }
}
</style>
