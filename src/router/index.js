import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export const asyncRouterMap = [
  {
    path: '/pro',
    redirect: '/pro/pro_list',
    icon: 'icon-xinpin_huaban1',
    title: '商品',
    component: () => import('@/views/layout/layout.vue'),
    meta: {
      title: '商品',
    },
    children: [
      {
        path: '/pro_list',
        name: 'pro_list',
        icon: 'icon-pinpai',
        title: '商品列表',
        component: () => import('@/views/pro/proList/proList.vue'),
        meta: {
          title: '商品列表',
        },
      },
      {
        path: '/add_pro',
        name: 'add_pro',
        icon: 'icon-pinpai',
        title: '添加商品',
        component: () => import('@/views/pro/addPro/addPro.vue'),
        meta: {
          title: '添加商品',
        },
      },
      {
        path: '/pro_categroy',
        name: 'pro_categroy',
        icon: 'icon-shangpinfenlei',
        title: '商品分类',
        component: () => import('@/views/pro/proCategroy/proCategroy.vue'),
        meta: {
          title: '商品分类',
        },
      },

      {
        path: '/pro_type',
        name: 'pro_type',
        icon: 'icon-shangpinfenlei24',
        title: '商品类型',
        component: () => import('@/views/pro/proType/proType.vue'),
        meta: {
          title: '商品类型',
        },
      },

      {
        path: '/brand_manage',
        name: 'brand_manage',
        icon: 'icon-pinpai',
        title: '品牌管理',
        component: () => import('@/views/pro/brandManage/brandManage.vue'),
        meta: {
          title: '品牌管理',
        },
      },
    ],
  },

  {
    path: '/order',
    redirect: '/order/order_list',
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
        component: () => import('@/views/order/orderList/orderList.vue'),
        meta: {
          title: '订单列表',
        },
      },
      {
        path: '/order_set',
        name: 'order_set',
        icon: 'icon-shezhi',
        title: '订单设置',
        component: () => import('@/views/order/orderSet/orderSet.vue'),
        meta: {
          title: '订单设置',
        },
      },
      {
        path: '/order_return',
        name: 'order_return',
        icon: 'icon-tuihuo',
        title: '退货申请处理',
        component: () => import('@/views/order/orderReturn/orderReturn.vue'),
        meta: {
          title: '退货申请处理',
        },
      },
      {
        path: '/order_reason',
        name: 'order_reason',
        icon: 'icon-dingdan',
        title: '退货原因设置',
        component: () => import('@/views/order/orderReason/orderReason.vue'),
        meta: {
          title: '退货原因设置',
        },
      },
    ],
  },
  {
    path: '/sem',
    redirect: '/sem/active_list',
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
        path: '/discount_list',
        name: 'discount_list',
        icon: 'icon-youhuiquan',
        title: '优惠券列表',
        component: () => import('@/views/sem/discountList/discountList.vue'),
        meta: {
          title: '优惠券列表',
        },
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
    ],
  },
  {
    path: '/role',
    redirect: '/pro/user_list',
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
