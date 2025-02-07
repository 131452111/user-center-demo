<script setup lang="ts">
import { ArticleListStore } from '@/stores/modules/articleManage'


const ArticleList = ArticleListStore()
defineProps<{
  modelValue: number | string;
}>()

const emit = defineEmits(['update:modelValue'])

// 获取文章列表中的所有频道
const uniqueArray = ArticleList.articleList
  .map(item => item.cate_name)
  .filter((cate_name, index, self) => self.indexOf(cate_name) === index)


</script>

<template>
  <!--  label 展示给用户看的，value 收集起来提交给后台的      -->
  <el-select :modelValue @update:modelValue="emit('update:modelValue', $event)" style="width: 200px">
    <el-option
      v-for="(channel, index) in uniqueArray"
      :key="index"
      :label="channel"
      :value="index"
    ></el-option>
  </el-select>
</template>

<style scoped lang="less"></style>
