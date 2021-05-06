import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export const asyncRouterMap = [
  {
    path: '/pro',
    redirect: '/pro_list',
    icon: 'icon-xinpin_huaban1',
    title: '商品',
    component: () => import('@/views/layout/layout.vue'),
    meta: {
      title: '商品',
    },
    children: [
      {
        path: '/product',
        name: 'product',
        icon: 'icon-pinpai',
        title: '商品列表',
        component: () => import('../views/pro/product/index.vue'),
        meta: {
          title: '商品列表',
        },
      },
      {
        path: '/addProduct',
        name: 'addProduct',
        icon: 'icon-pinpai',
        title: '添加商品',
        component: () => import('../views/pro/product/add.vue'),
        meta: {
          title: '添加商品',
        },
      },
      {
        path: '/updateProduct',
        name: 'updateProduct',
        icon: 'icon-pinpai',
        title: '修改商品',
        component: () => import('../views/pro/product/update.vue'),
        meta: {
          title: '修改商品',
        },
        hidden: true,
      },
      {
        path: '/productCate',
        name: 'productCateList',
        icon: 'icon-shangpinfenlei',
        title: '商品分类',
        component: () => import('../views/pro/productCate/index.vue'),
        meta: {
          title: '商品分类',
        },
      },
      {
        path: '/addProductCate',
        name: 'addProductCate',
        icon: 'icon-pinpai',
        title: '添加分类',
        component: () => import('../views/pro/productCate/add.vue'),
        meta: {
          title: '添加分类',
        },
        hidden: true,
      },
      {
        path: '/updateProductCate',
        name: 'updateProductCate',
        icon: 'icon-pinpai',
        title: '修改分类',
        component: () => import('../views/pro/productCate/update.vue'),
        meta: {
          title: '修改分类',
        },
        hidden: true,
      },

      {
        path: '/ProductAttr',
        name: 'ProductAttr',
        icon: 'icon-shangpinfenlei24',
        title: '商品类型',
        component: () => import('../views/pro/productAttr/index.vue'),
        meta: {
          title: '商品类型',
        },
      },
      {
        path: '/addProductAttr',
        name: 'addProductAttr',
        icon: 'icon-shangpinfenlei24',
        title: '添加商品类型',
        component: () => import('../views/pro/productAttr/addProductAttr.vue'),
        meta: {
          title: '添加商品类型',
        },
        hidden: true,
      },
      {
        path: '/updateProductAttr',
        name: 'updateProductAttr',
        icon: 'icon-shangpinfenlei24',
        title: '修改商品类型',
        component: () =>
          import('../views/pro/productAttr/updateProductAttr.vue'),
        meta: {
          title: '修改商品类型',
        },
        hidden: true,
      },
      {
        path: '/productAttrList',
        name: 'productAttrList',
        icon: 'icon-shangpinfenlei24',
        title: '商品属性列表',
        component: () => import('../views/pro/productAttr/productAttrList.vue'),
        meta: {
          title: '商品属性列表',
        },
        hidden: true,
      },

      {
        path: '/brand',
        name: 'brand',
        icon: 'icon-pinpai',
        title: '品牌管理',
        component: () => import('../views/pro/brand/index.vue'),
        meta: {
          title: '品牌管理',
        },
      },
      {
        path: '/addBrand',
        name: 'addBrand',
        icon: 'icon-pinpai',
        title: '新建商品管理',
        component: () => import('../views/pro/brand/add.vue'),
        meta: {
          title: '新建商品管理',
        },
        hidden: true,
      },
      {
        path: '/updateBrand',
        name: 'updateBrand',
        icon: 'icon-pinpai',
        title: '修改商品管理',
        component: () => import('../views/pro/brand/update.vue'),
        meta: {
          title: '修改商品管理',
        },
        hidden: true,
      },
    ],
  },

  {
    path: '/order',
    redirect: '/order_list',
    icon: 'icon-dingdan',
    title: '订单',
    component: () => import('../views/layout/layout.vue'),
    meta: {
      title: '订单',
    },
    children: [
      {
        path: '/order_list',
        name: 'order_list',
        icon: 'icon-dingdan-',
        title: '订单列表',
        component: () => import('@/views/order/orderList.vue'),
        meta: {
          title: '订单列表',
        },
      },
      {
        path: '/order_detail',
        name: 'order_detail',
        icon: 'icon-dingdan-',
        title: '订单详情',
        component: () => import('@/views/order/orderDetail.vue'),
        meta: {
          title: '订单详情',
        },
        hidden: true,
      },
      {
        path: '/order_set',
        name: 'order_set',
        icon: 'icon-shezhi',
        title: '订单设置',
        component: () => import('@/views/order/orderSet.vue'),
        meta: {
          title: '订单设置',
        },
      },
      {
        path: '/order_return',
        name: 'order_return',
        icon: 'icon-tuihuo',
        title: '退货申请处理',
        component: () => import('@/views/order/apply/orderReturn.vue'),
        meta: {
          title: '退货申请处理',
        },
      },
      {
        path: '/returnApplyDetail',
        name: 'returnApplyDetail',
        icon: 'icon-tuihuo',
        title: '退货详情页',
        component: () => import('@/views/order/apply/returnApplyDetail.vue'),
        meta: {
          title: '退货详情页',
        },
        hidden: true,
      },
      {
        path: '/order_reason',
        name: 'order_reason',
        icon: 'icon-dingdan',
        title: '退货原因设置',
        component: () => import('@/views/order/apply/orderReason.vue'),
        meta: {
          title: '退货原因设置',
        },
      },
    ],
  },
  {
    path: '/sem',
    redirect: '/active_list',
    icon: 'icon-pinpai',
    title: '营销',
    component: () => import('../views/layout/layout.vue'),
    meta: {
      title: '营销',
    },
    children: [
      {
        path: '/active_list',
        name: 'active_list',
        icon: 'icon-miaosha',
        title: '秒杀活动列表',
        component: () => import('@/views/sem/activeList/activeList.vue'),
        meta: {
          title: '秒杀活动列表',
        },
      },
      {
        path: '/flashSession',
        name: 'flashSession',
        icon: 'icon-miaosha',
        title: '秒杀时间段列表',
        component: () => import('@/views/sem/activeList/flashSession.vue'),
        meta: {
          title: '秒杀时间段列表',
        },
        hidden: true,
      },
      {
        path: '/selectSession',
        name: 'selectSession',
        icon: 'icon-miaosha',
        title: '设置商品',
        component: () => import('@/views/sem/activeList/selectSession.vue'),
        meta: {
          title: '设置商品',
        },
        hidden: true,
      },
      {
        path: '/coupon',
        name: 'coupon',
        icon: 'icon-youhuiquan',
        title: '优惠券列表',
        component: () => import('@/views/sem/coupon/coupon.vue'),
        meta: {
          title: '优惠券列表',
        },
      },
      {
        path: '/addCoupon',
        name: 'addCoupon',
        icon: 'icon-youhuiquan',
        title: '新建优惠券列表',
        component: () => import('@/views/sem/coupon/addCoupon.vue'),
        meta: {
          title: '新建优惠券列表',
        },
        hidden: true,
      },
      {
        path: '/updateCoupon',
        name: 'updateCoupon',
        icon: 'icon-youhuiquan',
        title: '修改优惠券列表',
        component: () => import('@/views/sem/coupon/updateCoupon.vue'),
        meta: {
          title: '修改优惠券列表',
        },
        hidden: true,
      },
      {
        path: '/couponHistory',
        name: 'couponHistory',
        icon: 'icon-youhuiquan',
        title: '优惠券领取详情',
        component: () => import('@/views/sem/coupon/history.vue'),
        meta: {
          title: '优惠券领取详情',
        },
        hidden: true,
      },
      {
        path: '/brand_recommend',
        name: 'brand_recommend',
        icon: 'icon-pinpai',
        title: '品牌推荐',
        component: () =>
          import('@/views/sem/brandRecommend/brandRecommend.vue'),
        meta: {
          title: '品牌推荐',
        },
      },
      {
        path: '/new_pro',
        name: 'new_pro',
        icon: 'icon-shangpin',
        title: '新品推荐',
        component: () => import('@/views/sem/newPro/newPro.vue'),
        meta: {
          title: '新品推荐',
        },
      },
      {
        path: '/popularity_recommend',
        name: 'popularity_recommend',
        icon: 'icon-tuijian',
        title: '人气推荐',
        component: () =>
          import('@/views/sem/popularityRecommend/popularityRecommend.vue'),
        meta: {
          title: '人气推荐',
        },
      },
      {
        path: '/special_recommend',
        name: 'special_recommend',
        icon: 'icon-zhuanti',
        title: '专题推荐',
        component: () =>
          import('@/views/sem/specialRecommend/specialRecommend.vue'),
        meta: {
          title: '专题推荐',
        },
      },
      {
        path: '/notice_list',
        name: 'notice_list',
        icon: 'icon-guanggao',
        title: '广告列表',
        component: () => import('@/views/sem/noticeList/noticeList.vue'),
        meta: {
          title: '广告列表',
        },
      },
      {
        path: '/addAdvertise',
        name: 'addAdvertise',
        icon: 'icon-guanggao',
        title: '新建广告',
        component: () => import('@/views/sem/noticeList/add.vue'),
        meta: {
          title: '新建广告',
        },
      },

      {
        path: '/updateAdvertise',
        name: 'updateAdvertise',
        icon: 'icon-guanggao',
        title: '修改广告',
        component: () => import('@/views/sem/noticeList/update.vue'),
        meta: {
          title: '修改广告',
        },
      },
    ],
  },
  {
    path: '/role',
    redirect: '/user_list',
    icon: 'icon-renqi',
    title: '权限',
    component: () => import('../views/layout/layout.vue'),
    meta: {
      title: '权限',
    },
    children: [
      {
        path: '/user_list',
        name: 'user_list',
        icon: 'icon-renqi',
        title: '用户列表',
        component: () => import('@/views/role/userList/userList.vue'),
        meta: {
          title: '用户列表',
        },
      },
      {
        path: '/role_list',
        name: 'role_list',
        icon: 'icon-ziyuan',
        title: '用户权限',
        component: () => import('@/views/role/roleList/roleList.vue'),
        meta: {
          title: '用户权限',
        },
      },
      {
        path: '/menu_list',
        name: 'menu_list',
        icon: 'icon-dingdan',
        title: '菜单列表',
        component: () => import('@/views/role/menuList/menuList.vue'),
        meta: {
          title: '菜单列表',
        },
      },
      {
        path: '/resource_list',
        name: 'resource_list',
        icon: 'icon-shangpinfenlei24',
        title: '资源列表',
        component: () => import('@/views/role/resourceList/resourceList.vue'),
        meta: {
          title: '资源列表',
        },
      },
    ],
  },
]

export const constantRouterMap = [
  {
    path: '/login',
    name: 'Login',
    title: '登录',
    component: () => import('@/views/login/login.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/404',
    title: '404',
    component: () => import('@/views/404.vue'),
    meta: {
      title: '404',
    },
  },
  {
    path: '/',
    redirect: '/home',
    icon: 'icon-miaosha',
    title: '首页',
    component: () => import('@/views/layout/layout.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        icon: 'icon-shouye',
        title: '首页',
        component: () => import('@/views/home/home'),
        meta: {
          title: '首页',
        },
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  routes: constantRouterMap,
})

export default router
