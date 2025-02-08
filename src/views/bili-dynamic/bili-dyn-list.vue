<script setup lang="ts">
import AuthorDynamicCard from '@/views/bili-dynamic/Author-dynamic-card.vue'
</script>

<template>
<div class="biliDynListTop w-full bg-white rounded-md shadow-md">
  <ul class="flex justify-start items-center h-16 mb-3">
    <li class="underline1 font-semibold text-md text-blue-400 mr-8 ml-8 cursor-pointer">全部</li>
    <li class="font-semibold text-md text-gray-400 mr-8 cursor-pointer">视频投稿</li>
    <li class="font-semibold text-md text-gray-400 mr-8 cursor-pointer">追番追剧</li>
    <li class="font-semibold text-md text-gray-400 mr-8 cursor-pointer">专栏</li>
  </ul>
</div>
<div class="AuthorDynamic w-full rounded-md shadow-md flex flex-col">
  <AuthorDynamicCard></AuthorDynamicCard>
  <AuthorDynamicCard></AuthorDynamicCard>
  <AuthorDynamicCard></AuthorDynamicCard>
  <AuthorDynamicCard></AuthorDynamicCard>
  <AuthorDynamicCard></AuthorDynamicCard>
</div>
</template>

<style scoped lang="less">
.underline1::after {
  content: '';
  display: block;
  height: 2px; // 这里设置下划线的粗细
  width: 50%; // 这里设置下划线的长度，可以是百分比或其他单位
  background-color: currentColor; // 使用当前文本颜色
  margin-left: auto;
  margin-right: auto;
}
</style>
