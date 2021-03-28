import request from '@/utils/request'
// 登录
export function loginApi(data) {
  return request({
    url: '/admin/login',
    method: 'post',
    data: data
  })
}

// 获取userinfo
export function getUserInfo() {
  return request({
    url: '/admin/info',
    method: 'get',
  })
}