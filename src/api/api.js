import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: 'http://open.tourdev.cn/api/login/login',
    method: 'post',
    data
  })
}