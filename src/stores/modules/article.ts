import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ArticleItem } from '@/types'


export const articleStore = defineStore(
  'article',
  () => {
    const channelList = ref<ArticleItem[]>([])
    const getArticleChannelList = (arr: []) => {
      channelList.value = arr
    }

    const updateArticleChannelItem = (obj: ArticleItem) => {
      channelList.value.find((item: ArticleItem) => {
        if (item.id === obj.id) {
          item.cate_alias = obj.cate_alias
          item.cate_name = obj.cate_name
          item.time = obj.time
        }
      })
      return
    }

    const addArticleItem = (obj: ArticleItem) => {
      channelList.value.push(obj)
    }

    const deleteArticleItem = (id: number) => {
      channelList.value = channelList.value.filter((item: ArticleItem) => item.id !== id)
    }
    return { channelList, getArticleChannelList, deleteArticleItem, updateArticleChannelItem, addArticleItem }
  },
  {
    persist: true,
  },
)
