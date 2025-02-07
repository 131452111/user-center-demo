export interface AppList {
  id: string | number; // 或者可以定义为 bigint，取决于你的具体需求
  appName: string;
  appDesc: string;
  appIcon: string;
  appType: number; // 实际值为 -66，可能需要根据业务逻辑调整类型
  scoringStrategy: number; // 实际值为 -128，可能需要根据业务逻辑调整类型
  reviewStatus: number; // 实际值为 1549064644，可能需要根据业务逻辑调整类型
  reviewMessage: string;
  reviewerId: string; // 或者可以定义为 bigint，取决于你的具体需求
  reviewTime: string; // 日期时间格式
  userId: string; // 或者可以定义为 bigint，取决于你的具体需求
  createTime: string; // 日期时间格式
  updateTime: string; // 日期时间格式
  isDelete: number; // 实际值为 78，可能需要根据业务逻辑调整类型
}
