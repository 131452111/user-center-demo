// 用户模块 token setToken removeToken
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const userInfo = ref({})
  const setToken = (newToken: string) => {
    token.value = newToken
  }
  const removeToken = () => {
    token.value = ''
  }

  const setUserInfo = (newUserInfo: any) => {
    userInfo.value = newUserInfo
  }
  return { token, setToken, removeToken, userInfo, setUserInfo}
},
  {
    persist: true
  }
)
