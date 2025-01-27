<script setup lang="ts">
import PageContainer from '@/views/article/components/PageContainer.vue'
import { ref } from 'vue'
import { Delete, Edit } from '@element-plus/icons-vue'
import ChannelSelect from '@/views/article/components/ChannelSelect.vue'
import { ArticleListStore } from '@/stores/modules/articleManage.ts'
import { artGetChannelsService } from '@/api/article.ts'

const articleList = ref([
  {
    "id": 5195870377289418,
    "title": "合话值切和形里阶格构。",
    "pub_date": "2024-08-09 03:21:49",
    "state": "草稿",
    "cate_name": "据管见"
  },
  {
    "id": 4692418379591695,
    "title": "代必该。",
    "pub_date": "2024-05-03 18:48:59",
    "state": "已发布",
    "cate_name": "价使电"
  }
])
// 利用作用域插槽 row 可以获取当前行的数据 =>像 v-for 遍历 item
// 编辑逻辑
const onEditArticle = (row) => {
  console.log("编辑成功")
}
// 删除逻辑
const onDeleteArticle = (row) => {
  console.log("删除成功")
}
const ArticleList = ArticleListStore()
const getData = async () => {
  const params = ref({
    page_num: 1,
    page_size: 2,
    cate_id: 40284,
    state: '已发布',
  })
  const res = await artGetChannelsService(params.value)
  // console.log(res.data)
  ArticleList.getArticleList(res.data.data)
}
</script>

<template>
  <PageContainer title="文章管理">
    <template #extra>
      <el-button type="primary" size="default"><span class="text-xl">添加文章</span></el-button>
    </template>
    <!-- 表单区域   -->
    <el-form inline>
      <el-form-item label="文章分类:">
        <Channel-select />
      </el-form-item>
      <el-form-item label="发布状态:">
        <el-select style="width: 200px">
          <el-option label="已发布" value="已发布"></el-option>
          <el-option label="草稿" value="草稿"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">搜索</el-button>
        <el-button>重置</el-button>
        <el-button @click="getData">获取数据</el-button>
      </el-form-item>
    </el-form>

    <!-- 表格区域   -->
  <el-table :data="articleList">
    <el-table-column label="文章标题" prop="title">
      <template #default="{ row }">
        <el-link :underline="false">{{ row.title }}</el-link>
      </template>
    </el-table-column>
    <el-table-column label="分类" prop="cate_name"></el-table-column>
    <el-table-column label="发表时间" prop="pub_date"></el-table-column>
    <el-table-column label="状态" prop="state"></el-table-column>
    <el-table-column label="操作">
      <!--  row 就是 channelList 的一项， $index 就是下标       -->
      <template #default="{ row, $index }">
        <el-button type="primary" :icon="Edit" circle plain @click="onEditArticle(row)"></el-button>
        <el-button :icon="Delete" type="danger" circle plain @click="onDeleteArticle(row)"></el-button>
      </template>
    </el-table-column>
  </el-table>
  </PageContainer>
</template>

<style scoped lang="less">

</style>
