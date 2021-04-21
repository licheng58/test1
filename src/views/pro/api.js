import request from '@/utils/request'

// 退出
export function getProList(params) {
  return request({
    url: `/product/list`,
    method: 'get',
    params: params
  })
}