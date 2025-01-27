<script setup lang="ts">
import { ArticleListStore } from '@/stores/modules/articleManage'

const ArticleList = ArticleListStore()

</script>

<template>
  <!--  label 展示给用户看的，value 收集起来提交给后台的      -->
  <el-select style="width: 200px">
    <el-option
      v-for="channel in ArticleList.articleList"
      :key="channel.id"
      :label="channel.cate_name"
      :value="channel.id"
    ></el-option>
  </el-select>
</template>

<style scoped lang="less"></style>
