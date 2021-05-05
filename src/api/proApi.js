import request from '@/utils/request'

// 获取商品列表
export function getProList(params) {
  return request({
    url: `/product/list`,
    method: 'get',
    params: params
  })
}

// 新建商品
export function createProduct(params) {
  return request({
    url: '/product/create',
    method: 'get',
    params: params
  })
}

// 更新商品
export function updateProduct(id, params) {
  return request({
    url: '/product/update/' + id,
    method: 'get',
    params: params
  })
}

// 商品信息
export function getProduct(id) {
  return request({
    url: '/product/updateInfo/' + id,
    method: 'get',
  })
}

// 获取商品分类
export function fetchListWithChildren() {
  return request({
    url: '/productCategory/list/withChildren',
    method: 'get'
  })
}

// 获取商品品牌
export function fetchList(params) {
  return request({
    url: '/brand/list',
    method: 'get',
    params: params
  })
}

// 获取属性类型
export function getAttributeTypes(cid, params) {
  return request({
    url: '/productAttribute/list/' + cid,
    method: 'get',
    params: params
  })
}

export function fetchProductAttrCateList(params) {
  return request({
    url: '/productAttribute/category/list',
    method: 'get',
    params: params
  })
}

// proFour 
export function fetchListAll() {
  return request({
    url: '/subject/listAll',
    method: 'get',
  })
}

// proFour 
export function fetchPrefrenceAreaList() {
  return request({
    url: '/prefrenceArea/listAll',
    method: 'get',
  })
}