import request from '@/utils/request.ts'

// 获取应用表
export const getAppListService = () => {
  return request.get('/app/list')
}

// 获取题目表
export const getQuestionListService = () => {
  return request.get('/app/questionList')
}
