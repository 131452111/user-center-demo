import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ArticleItem } from '@/types'


export const articleStore = defineStore(
  'article',
  () => {
    const channelList = ref<ArticleItem[]>([
      {
        "id": 5347615093274305,
        "cate_name": "较现被术",
        "cate_alias": "cunae supellex",
        "time": "2025-04-10"
      },
      {
        "id": 3774046690854525,
        "cate_name": "但展到",
        "cate_alias": "infit crudelis solitudo",
        "time": "2024-04-04"
      },
      {
        "id": 5061217797574894,
        "cate_name": "那话",
        "cate_alias": "porro vix addo",
        "time": "2024-06-27"
      },
      {
        "id": 3559643190007219,
        "cate_name": "省细装划想结",
        "cate_alias": "brevis ager strues somniculosus",
        "time": "2024-12-24"
      },
      {
        "id": 5586373024875334,
        "cate_name": "提教公书拉",
        "cate_alias": "ago clementia capto cohors",
        "time": "2025-05-18"
      },
      {
        "id": 3850816829832730,
        "cate_name": "值物放状值",
        "cate_alias": "verumtamen volva comburo",
        "time": "2024-11-28"
      },
      {
        "id": 4183180685923574,
        "cate_name": "半马",
        "cate_alias": "cerno tener alveus dolorem solium depromo",
        "time": "2024-10-08"
      },
      {
        "id": 1767449268477307,
        "cate_name": "合区",
        "cate_alias": "absum atque certe tutamen territo audacia",
        "time": "2024-08-15"
      },
      {
        "id": 5966667444211808,
        "cate_name": "连况人高写想",
        "cate_alias": "curvo verto",
        "time": "2024-08-02"
      },
      {
        "id": 1339152211864940,
        "cate_name": "构们保海志近",
        "cate_alias": "illo suffoco amissio acies",
        "time": "2024-08-25"
      }
    ])
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
