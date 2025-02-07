// 分类:文章接口
export interface ArticleItem {
  id: number
  cate_name: string
  cate_alias: string
  time: number | string
}
// 管理：请求参数
export interface  ArticleManagePost {
  page_num: number,
  page_size: number,
  cate_id: number | string,
  state: string
}
// 响应参数
export interface ArticleManageGet {
  id: number,
  title: string,
  pub_date: string,
  state: string,
  cate_name: string
}

