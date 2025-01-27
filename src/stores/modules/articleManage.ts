import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ArticleManageGet } from '@/types'

export const ArticleListStore = defineStore(
  'articleManage',
  () => {
    const articleList = ref<ArticleManageGet[]>([])
    const getArticleList = (arr: []) => {
      articleList.value = arr
    }


    return { articleList, getArticleList}
  },
  {
    persist: true
  }
)
