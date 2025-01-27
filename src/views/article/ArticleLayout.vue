<script setup lang="ts">
import { Edit, Management, Promotion, Reading, User } from '@element-plus/icons-vue'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>

<template>
<div class="articleLayout">
  <el-container style="margin-left: 20px; min-height: 600px">
    <el-aside width="200px">
      <div><img src="@/assets/imgs/萤宝.jpg" alt="wu" /></div>
      <!-- active-text-color 激活的文本颜色  default-active 默认激活的索引-->
      <!-- router 选项开启之后，el-menu-item 的 index 就是点击跳转的路径         -->
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        :default-active="$route.path"
        text-color="#fff"
        router
        @open="handleOpen"
        @close="handleClose"
      >

        <el-menu-item index="/article/layout/channel">
          <el-icon><Management /></el-icon>
          <span>文章分类</span>
        </el-menu-item>
        <el-menu-item index="/article/layout/manage">
          <el-icon><Promotion /></el-icon>
          <span>文章管理</span>
        </el-menu-item>
        <el-sub-menu>
          <template #title>
            <el-icon><User /></el-icon>
            <span>个人中心</span>
          </template>

          <el-menu-item index="/article/layout/info">
            <el-icon><User /></el-icon>
            <span>基本资料</span>
          </el-menu-item>
          <el-menu-item index="/article/layout/avatar">
            <el-icon><Edit /></el-icon>
            <span>更换头像</span>
          </el-menu-item>
          <el-menu-item index="/article/layout/resetPassword">
            <el-icon><reading /></el-icon>
            <span>重置密码</span>
          </el-menu-item>
        </el-sub-menu>

      </el-menu>
    </el-aside>
    <el-container>
      <el-main style="padding-top: 0">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
  <!-- end 内容区-->
</div>
</template>

<style scoped lang="less">

</style>
