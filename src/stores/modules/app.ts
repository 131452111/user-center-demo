import { defineStore} from 'pinia'
import { ref } from 'vue'
import { getAppListService } from '@/api/app.ts'
import type { AppList } from '@/types'

export const useAppListStore = defineStore('app', () => {
  // 应用表
  const appList = ref<AppList[]>([])
  // 获取应用表
  const getAppList = async () => {
    const data = await getAppListService()
    appList.value = data.data
  }

  const addApp = (app: AppList) => {
    appList.value.push(app)
  }

  // 题目表
  const questionList = ref([])

  return { appList, questionList, getAppList, addApp }
},
  {
    persist: true
  })



