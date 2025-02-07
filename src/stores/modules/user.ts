// 用户模块 token setToken removeToken
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { UserInfo } from '@/types/index.ts'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const userInfo = ref<UserInfo>({ avatar: '', email: '', nickname: '', password: '123456', username: 'admin' })
  const setToken = (newToken: string) => {
    token.value = newToken
  }
  const removeToken = () => {
    token.value = ''
  }

  const setUserInfo = (newUserInfo: UserInfo) => {
    userInfo.value = newUserInfo
  }
  return { token, setToken, removeToken, userInfo, setUserInfo}
},
  {
    persist: true
  }
)
