import request from '@/utils/request.ts'
import type { ArticleManagePost } from '@/types'
// import { ref } from 'vue'

// 获取文章列表
export const artGetChannelList = () => {
  return request({
    url: '/article/channel',
    method: 'get'
  })
}

// 获取文章分类
export  const artGetChannelsService = (params: ArticleManagePost) => request.get('/article/list', {
  params
})
