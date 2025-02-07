<script setup lang="ts">
import PageContainer from '@/views/article/components/PageContainer.vue'
import { ref } from 'vue'
import { Delete, Edit } from '@element-plus/icons-vue'
import ChannelSelect from '@/views/article/components/ChannelSelect.vue'
import { ArticleListStore } from '@/stores/modules/articleManage.ts'
import { artGetChannelsService } from '@/api/article.ts'
import { ElMessage, ElMessageBox } from 'element-plus'
import ArticleEdit from '@/views/article/components/ArticleEdit.vue'
import type { ArticleManageGet } from '@/types'

const ArticleList = ArticleListStore()
const data = ref<ArticleManageGet[]>([])
// 定义请求参数
const params = ref({
  page_num: 1,
  page_size: 5,
  cate_id: '',
  state: '',
})
const total = ref(ArticleList.articleList.length)
const paramsRef = ref({}) // 获取表单的实例

// 过滤数据
const filterData = (cate_id: string) => {
  data.value = ArticleList.articleList.filter(item => item.cate_name !== cate_id)
}
// 搜索逻辑 -> 按照最新的条件重新检索
const onSearch = (cate_id: string) => {
  // 重置页码
  params.value.page_num = 1
  filterData(cate_id)
}
// 重置逻辑
const onReset = () => {
  params.value.cate_id = ''
  params.value.state = ''

}
// 利用作用域插槽 row 可以获取当前行的数据 =>像 v-for 遍历 item
const articleEditRef = ref()
// 添加文章
const onAddArticle = () => {
  console.log('添加文章')
  articleEditRef.value.open({})
}
// 编辑逻辑
const onEditArticle = (row) => {
  console.log('添加分类')
  articleEditRef.value.open(row)
}
// 删除逻辑
const onDeleteArticle = async (row) => {
  if (typeof row.id === 'number') {
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
        ArticleList.deleteArticleItem(row.id)
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: '取消删除',
        })
      })

  }// 如果传入的是id 就删除这条数据
  console.log(row)
}

// 获取数据
const loading = ref(false)
const getData = async () => {
  loading.value = true
  const res = await artGetChannelsService(params.value)
  // console.log(res.data)
  ArticleList.getArticleList(res.data.data)
  data.value = ArticleList.articleList
  loading.value = false
}

const onSizeChange = (size: number) => {
  // 只要是每页条数变化了，那么原本正在访问的当前页意义不大了，数据大概率已经不在原来那一页了
  // 重新从第一页开始渲染即可
  params.value.page_num = 1
  params.value.page_size = size
  // 基于最新的当前页 和 每页条数，渲染数据
  onCurrentChange()
}

const onCurrentChange = () => {
  const start = (params.value.page_num - 1) * params.value.page_size;
  const end = start + params.value.page_size;
  data.value = ArticleList.articleList.slice(start, end);
}
onCurrentChange()

const onSuccess = (state: string) => {
  if (state === 'add') {
    // 如果是添加，最好渲染最后一页
    const lastPage = (total.value + 1) / params.value.page_size
    params.value.page_num = lastPage
  }
}
</script>

<template>
  <PageContainer title="文章管理">
    <template #extra>
      <el-button type="primary" size="default" @click="onAddArticle"><span class="text-xl">添加文章</span></el-button>
    </template>
    <!-- 表单区域   -->
    <el-form inline v-model="params" :ref="paramsRef">
      <el-form-item label="文章分类:">
        <Channel-select v-model="params.cate_id" />
      </el-form-item>
      <el-form-item label="发布状态:">
        <el-select style="width: 200px" v-model="params.state">
          <el-option label="已发布" value="已发布"></el-option>
          <el-option label="草稿" value="草稿"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSearch(params.cate_id)">搜索</el-button>
        <el-button @click="onReset">重置</el-button>
        <el-button @click="getData">获取数据</el-button>
      </el-form-item>
    </el-form>

    <!-- 表格区域   -->
    <el-table :data="data.length === 0 ? ArticleList.articleList : data" v-loading="loading">
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
        <template #default="{ row }">
          <el-button type="primary" :icon="Edit" circle plain @click="onEditArticle(row)"></el-button>
          <el-button :icon="Delete" type="danger" circle plain @click="onDeleteArticle(row)"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--  分页区域-->
    <el-pagination
      v-model:current-page="params.page_num"
      v-model:page-size="params.page_size"
      :page-sizes="[2, 3, 5, 10]"
      :background="true"
      layout="jumper, total, sizes, prev, pager, next"
      :total="total"
      @size-change="onSizeChange"
      @current-change="onCurrentChange"
      style="margin-top: 20px; justify-content: flex-end"
    />
  </PageContainer>

  <article-edit ref="articleEditRef" @success="onSuccess" />
</template>

<style scoped lang="less">

</style>
