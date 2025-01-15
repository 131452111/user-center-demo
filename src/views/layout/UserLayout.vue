<script setup lang="ts">

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header height="80px">
        <a href="/" class="logo flex justify-center items-center py-8" style="flex: 0 0 150px">
          <img src="@/assets/imgs/萤宝2025.jpg" class="w-24 h-24"  alt="无"/>
          <div class="title text-5xl ml-6">用户中心</div>
        </a><!-- end logo -->
      </el-header>
      <!--end 顶部导航栏 -->
      <el-main>
        <router-view />
      </el-main> <!-- end 内容区-->
      <el-footer class="flex justify-center items-center bg-gradient-to-r from-gray-500 to-gray-300">
        <a href="#" target="_blank" class="cursor-pointer hover:text-blue-200 hover:underline text-3xl">
          用户中心练习 by ccc
        </a>
      </el-footer> <!-- end 底部栏-->
    </el-container>
  </div>
</template>

<style scoped lang="less">
.logo {
  background: #f0f2f5;
}
</style>
