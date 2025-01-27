export interface ArticleItem {
  id: number
  cate_name: string
  cate_alias: string
  time: number
}

export interface  ArticleManagePost {
  page_num: number,
  page_size: number,
  cate_id: number,
  state: string
}

export interface ArticleManageGet {
  id: number,
  title: string,
  pub_date: string,
  state: string,
  cate_name: string
}

