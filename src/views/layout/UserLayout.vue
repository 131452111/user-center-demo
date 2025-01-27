<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue'
import { useRoute } from 'vue-router'
import UserLogin from '@/views/user/UserLogin.vue'

const route = useRoute()
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header height="80px">
        <global-header />
      </el-header>
      <!--end 顶部导航栏 -->
      <el-main>
        <template v-if="route.path === '/'">
          <user-login />
        </template>
        <template v-else>
          <router-view />
        </template>
      </el-main>
      <el-footer
        class="flex justify-center items-center bg-gradient-to-r from-gray-500 to-gray-300"
      >
        <a
          href="#"
          target="_blank"
          class="cursor-pointer hover:text-blue-200 hover:underline text-3xl"
        >
          用户中心练习 by ccc
        </a>
      </el-footer>
      <!-- end 底部栏-->
    </el-container>
  </div>
</template>

<style scoped lang="less">
.logo {
  background: #f0f2f5;
}
</style>
