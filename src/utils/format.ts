import { dayjs } from 'element-plus'

export const formatTime = (time: string) => dayjs(time).format('YYYY-MM-DD HH:mm:ss')
