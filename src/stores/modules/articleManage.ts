import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ArticleManageGet } from '@/types'

export const ArticleListStore = defineStore(
  'articleManage',
  () => {
    const articleList = ref<ArticleManageGet[]>([
    {
      "id": 2895028352116613,
      "title": "要好据家省电称动名过。",
      "pub_date": "2025-09-30 06:49:05",
      "state": "已发布",
      "cate_name": "娱乐"
    },
    {
      "id": 3638908633881386,
      "title": "方见众。",
      "pub_date": "2025-02-03 09:32:11",
      "state": "已发布",
      "cate_name": "娱乐"
    },
    {
      "id": 4121574495876116,
      "title": "器克发。",
      "pub_date": "2024-03-12 15:25:24",
      "state": "草稿",
      "cate_name": "娱乐"
    },
    {
      "id": 7246723548533038,
      "title": "参白文至最张作第它应。",
      "pub_date": "2024-05-29 19:48:00",
      "state": "草稿",
      "cate_name": "体育"
    },
    {
      "id": 709270119293299,
      "title": "由争给件那认意还热。",
      "pub_date": "2024-09-09 22:10:25",
      "state": "草稿",
      "cate_name": "娱乐"
    },
    {
      "id": 7451089268570592,
      "title": "效天从也。",
      "pub_date": "2025-08-20 18:48:29",
      "state": "已发布",
      "cate_name": "体育"
    },
    {
      "id": 6867910641676215,
      "title": "起争数级使则器。",
      "pub_date": "2026-01-22 10:40:11",
      "state": "草稿",
      "cate_name": "娱乐"
    },
    {
      "id": 7364664845675663,
      "title": "原多克常动资。",
      "pub_date": "2024-05-28 15:13:33",
      "state": "草稿",
      "cate_name": "体育"
    },
    {
      "id": 845930674513181,
      "title": "节状电圆。",
      "pub_date": "2024-10-24 13:44:34",
      "state": "已发布",
      "cate_name": "体育"
    },
    {
      "id": 5602891008259712,
      "title": "红自以打半劳没等造上。",
      "pub_date": "2025-01-20 06:09:20",
      "state": "已发布",
      "cate_name": "体育"
    },
    {
      "id": 7424369956451664,
      "title": "电只感研高省节而。",
      "pub_date": "2024-09-17 12:47:11",
      "state": "草稿",
      "cate_name": "体育"
    },
    {
      "id": 405274617129285,
      "title": "表应值育线南化。",
      "pub_date": "2025-03-24 05:30:01",
      "state": "已发布",
      "cate_name": "娱乐"
    }])
    const getArticleList = (arr: []) => {
      articleList.value = arr
    }
    const deleteArticleItem = (id: number) => {
      articleList.value = articleList.value.filter(item => item.id !== id)
    }
    const addArticleItem = (obj: ArticleManageGet) => {
      articleList.value.push(obj)
    }

    const updateArticleItem = (obj: ArticleManageGet) => {
      articleList.value.find((item: ArticleManageGet) => {
        if (item.id === obj.id) {
          item.title = obj.title
          item.cate_name = obj.cate_name
          item.pub_date = obj.pub_date
          item.state = obj.state
        }
      })
      return
    }

    return { articleList, getArticleList, deleteArticleItem, addArticleItem, updateArticleItem }
  },
  {
    persist: true
  }
)
