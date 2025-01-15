<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <GlobalHeader />
      </el-header>
      <!--end 顶部导航栏 -->
      <el-main>
        <router-view />
      </el-main> <!-- end 内容区-->
      <el-footer class="flex justify-center items-center bg-gradient-to-r from-gray-500 to-gray-300">
        <a href="#" target="_blank" class="cursor-pointer hover:text-blue-200 hover:underline text-5xl">
          用户中心练习 by ccc
        </a>
      </el-footer> <!-- end 底部栏-->
    </el-container>
  </div>
</template>

<style scoped lang="less">

</style>
