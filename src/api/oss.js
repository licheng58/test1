import request from '@/utils/request'

// 上传图片
export function policy() {
  return request({
    url: '/aliyun/oss/policy',
    method: 'get',
  })
}