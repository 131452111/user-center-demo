<script setup lang="ts">
import { defineProps, ref, withDefaults } from 'vue'
import { useAppListStore } from '@/stores/modules/app.ts'
import type { AppList } from '@/types'
import GlobalHeader from '@/components/GlobalHeader.vue'

const appListStore = useAppListStore()

interface Props {
id: string
}

const props = withDefaults(defineProps<Props>(), {
  id: () => {
    return ''
  }
})

const data = ref<AppList | undefined>({
  id: '', // 或者可以定义为 bigint，取决于你的具体需求
  appName: '',
  appDesc: '',
  appIcon: '',
  appType: 0, // 实际值为 -66，可能需要根据业务逻辑调整类型
  scoringStrategy: 0, // 实际值为 -128，可能需要根据业务逻辑调整类型
  reviewStatus: 0, // 实际值为 1549064644，可能需要根据业务逻辑调整类型
  reviewMessage: '',
  reviewerId: '', // 或者可以定义为 bigint，取决于你的具体需求
  reviewTime: '', // 日期时间格式
  userId: '', // 或者可以定义为 bigint，取决于你的具体需求
  createTime: '', // 日期时间格式
  updateTime: '', // 日期时间格式
  isDelete: 0, // 实际值为 78，可能需要根据业务逻辑调整类型
})
data.value = appListStore.appList.find(item => item.id === props.id)



</script>

<template>
  <global-header></global-header>
<div class="app-detail-page">
  <el-card :data="data">
    <el-row>
      <el-col :span="18">
        <div class="detail flex justify-start items-center">
          {{ data?.appDesc }}

        </div>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
  </el-card>
</div>
</template>

<style scoped lang="less">

</style>
