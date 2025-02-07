<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import type { AppList } from '@/types'
import { useAppListStore } from '@/stores/modules/app.ts'
import { useRouter } from 'vue-router'

// 获取数据
const appListStore = useAppListStore()
const getdata = async () => {
  await appListStore.getAppList()
}
const data = ref<AppList[]>([])
const total = ref(appListStore.appList.length)
const initSearchParams = ref({
  page_num: 1,
  page_size: 6,
})

const onSizeChange = (size: number) => {
  // 只要是每页条数变化了，那么原本正在访问的当前页意义不大了，数据大概率已经不在原来那一页了
  // 重新从第一页开始渲染即可
  initSearchParams.value.page_num = 1
  initSearchParams.value.page_size = size
  // 基于最新的当前页 和 每页条数，渲染数据
  onCurrentChange()
}

const onCurrentChange = () => {
  const start = (initSearchParams.value.page_num - 1) * initSearchParams.value.page_size;
  const end = start + initSearchParams.value.page_size;
  data.value = appListStore.appList.slice(start, end);
}
onCurrentChange()

// 点击卡片跳转详情页
const router = useRouter()
const doCardClick = (id: number) => {
  router.push(`/app/detail/${+id}`)
  console.log(`/app/detail/${+id}`)
  console.log(typeof id)
}

watchEffect(() => {
  data.value = appListStore.appList
  total.value = appListStore.appList.length
  onCurrentChange()
})
</script>

<template>
  <div class="home-page" :data="data">
    <el-button @click="getdata">获取数据</el-button>
    <el-row :gutter="20">
      <el-col :xs="4" :sm="24" :md="12" :lg="8" :xl="6" v-for="item in data" :key="item.id">
        <el-card :header="item.appName" shadow="hover" style="margin: 20px 0 0" @click="doCardClick(item.id)">
          <div class="content flex flex-col">
            <div class="top w-full h-32 mb-10">
              <img src="../../assets/img/hero.jpg" :alt="item.appName" class="h-32">
            </div>
            <div class="main">
              <h1 class="font-semibold text-3xl">{{ item.reviewMessage }}</h1>
              <p>{{ item.appDesc }}</p>
            </div>
            <div class="footer flex justify-between items-center mt-10">
              <div class="flex items-center">
                <el-avatar :size="30" :src="item.appIcon" />
                <span class="ml-2">{{ item?.appName || '无名' }}</span>
              </div>
              <div class="flex items-center">
                <svg t="1738840425450" class="icon w-10 h-10 mr-3 cursor-pointer" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2400"><path d="M881.066667 394.666667c-21.333333-23.466667-51.2-36.266667-81.066667-36.266667H618.666667v-117.333333c0-44.8-29.866667-85.333333-87.466667-117.333334-17.066667-10.666667-38.4-12.8-57.6-8.533333-19.2 4.266667-36.266667 17.066667-46.933333 34.133333-2.133333 2.133333-2.133333 4.266667-4.266667 6.4l-125.866667 281.6H204.8c-59.733333 0-108.8 46.933333-108.8 106.666667v258.133333c0 57.6 49.066667 106.666667 108.8 106.666667h544c53.333333 0 98.133333-38.4 106.666667-89.6l51.2-337.066667c4.266667-34.133333-6.4-64-25.6-87.466666z m-593.066667 448H204.8c-25.6 0-44.8-19.2-44.8-42.666667v-256c0-23.466667 19.2-42.666667 44.8-42.666667h83.2v341.333334z m554.666667-373.333334L789.333333 806.4c-4.266667 21.333333-21.333333 36.266667-42.666666 36.266667H352V471.466667l130.133333-290.133334c2.133333-4.266667 4.266667-4.266667 6.4-4.266666 2.133333 0 4.266667 0 8.533334 2.133333 25.6 14.933333 55.466667 38.4 55.466666 64v149.333333c0 17.066667 14.933333 32 32 32h213.333334c12.8 0 25.6 4.266667 34.133333 14.933334 8.533333 6.4 12.8 19.2 10.666667 29.866666z" fill="#666666" p-id="2401"></path></svg>
                <svg t="1738840629017" class="icon w-10 h-10 cursor-pointer" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3719" width="200" height="200"><path d="M874.666667 544c-17.066667 0-32 14.933333-32 32v256c0 6.4-4.266667 10.666667-10.666667 10.666667H192c-6.4 0-10.666667-4.266667-10.666667-10.666667V192c0-6.4 4.266667-10.666667 10.666667-10.666667h256c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32H192C151.466667 117.333333 117.333333 151.466667 117.333333 192v640c0 40.533333 34.133333 74.666667 74.666667 74.666667h640c40.533333 0 74.666667-34.133333 74.666667-74.666667V576c0-17.066667-14.933333-32-32-32z" fill="#666666" p-id="3720"></path><path d="M874.666667 117.333333H640c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h157.866667L509.866667 467.2c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333l285.866667-285.866667V384c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V149.333333c0-17.066667-14.933333-32-32-32z" fill="#666666" p-id="3721"></path></svg>
              </div>
            </div>
          </div>

        </el-card>
      </el-col>
    </el-row>

    <!--  分页区域-->
    <el-pagination
      v-model:current-page="initSearchParams.page_num"
      v-model:page-size="initSearchParams.page_size"
      :page-sizes="[2, 3, 5, 6, 10]"
      :background="true"
      layout="jumper, total, sizes, prev, pager, next"
      :total="total"
      @size-change="onSizeChange"
      @current-change="onCurrentChange"
      style="margin-top: 20px; justify-content: flex-end"
    />
  </div>
</template>

<style scoped lang="less"></style>
