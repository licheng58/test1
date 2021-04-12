import request from '@/utils/request'

// 退出
export function logout() {
  return request({
    url: '/admin/logout',
    method: 'post',
  })
}
