<script setup lang="ts">
import PageContainer from '@/views/article/components/PageContainer.vue'
import { artGetChannelList } from '@/api/article'
import { articleStore } from '@/stores/modules/article.ts'
import { Delete, Edit } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import ChannelEdit from '@/views/article/components/ChannelEdit.vue'

interface Article {
  id: number, cate_name: string, cate_alias: string, time: string | number
}

const isLoading = ref(false)
const article = articleStore()
const dialog = ref()
const geta = async () => {
  isLoading.value = true
  const res = await artGetChannelList()
  article.getArticleChannelList(res.data.data)
  isLoading.value = false
}

const onDelChannel = async (row: string | number, $index: number) => {
  if (typeof row === 'number') {
    await ElMessageBox.confirm('确定删除该分类吗？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {
        ElMessage({
          type: 'success',
          message: '删除成功',
        })
        article.deleteArticleItem(row)
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: '取消删除',
        })
      })

  }// 如果传入的是id 就删除这条数据
  console.log(row, $index)
}

const onAddChannel = () => {
  console.log('添加分类')
  dialog.value.open({})
}

const onEditChannel = (row: Article) => {
  dialog.value.open(row)
}

geta()
</script>

<template>
  <PageContainer title="文章分类">
    <template #extra>
      <el-button type="primary" size="default" @click="onAddChannel"><span class="text-xl">添加分类</span></el-button>
      <el-button type="primary" size="default" @click="geta">获取数据</el-button>
    </template>
    <el-table :data="article.channelList" style="width: 100%" v-loading="isLoading" stripe height="600">
      <el-table-column type="index" label="序号" width="100"></el-table-column>
      <el-table-column prop="cate_name" label="分类名称"></el-table-column>
      <el-table-column prop="cate_alias" label="分类别名"></el-table-column>
      <el-table-column prop="time" label="时间"></el-table-column>
      <el-table-column label="操作" width="100">
        <!--  row 就是 channelList 的一项， $index 就是下标       -->
        <template #default="{ row, $index }">
          <el-button @click="onEditChannel(row)" type="primary" :icon="Edit" circle plain></el-button>
          <el-button :icon="Delete" @click="onDelChannel(row.id, $index)" type="danger" circle plain></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="暂无数据" />
      </template>
    </el-table>

    <channel-edit ref="dialog" />
  </PageContainer>
</template>

<style scoped lang="less"></style>
