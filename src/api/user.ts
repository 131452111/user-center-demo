import request from '@/utils/request.ts'
import { ref } from 'vue'

// 用户注册
export const userResiterService = (userAccount: string, userPassword: string) => {
  return request({
    url: '/user/Registered',
    method: 'post',
    data: {
      userAccount,
      userPassword
    }
  })
}

// 用户登录
export  const userLoginService = (userAccount: string, userPassword: string) => {
  return request({
    url: '/user/Login',
    method: 'post',
    data: {
      userAccount,
      userPassword
    }
  })
}

// 获取用户信息
export const userInfo = ref({})
export const getUserInfoService = (id: string) => {
  return request({
    url: '/user/getUserInfo',
    method: 'get',
    params: {
      id
    }
  })
}
