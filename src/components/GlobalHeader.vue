<script setup lang="ts">
import routes from '@/router/routes.ts'
import { SYSTEM_LOGO } from '@/utils/imgs.ts'
import router from '@/router'
import { ref } from 'vue'

// 展示在菜单栏的路由数组
const VisibleRoutes = routes.filter(item => {
  if (item.meta?.hideInMenu) {
    return false
  }
  return true
})
console.log(VisibleRoutes)
const doMenuClick = (key: string) => {
  router.push({ path: key })
}
/**点击跳转到对应页面
 * const selectKey = ref<string>('/')
 * router.afterEach((to, from, failure) => {
 *   selectKey.value = [to.path]
 * })
 * */
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const input = ref('')
</script>

<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :ellipsis="false">
    <el-menu-item index="0"><a href="/" class="logo flex justify-center items-center" style="flex: 0 0 150px">
      <img :src="SYSTEM_LOGO" class="w-16 h-16" />
      <div class="title text-3xl ml-6">用户中心</div>
    </a>
    </el-menu-item><!-- end logo -->
    <el-menu-item v-for="(item, index) in VisibleRoutes" :key="item.path" :index="index + 1">
      <a href="#" class="text-2xl p-3 hover:bg-gray-200 whitespace-nowrap" @click="doMenuClick(item.path)">
        {{ item.name }}
      </a>
    </el-menu-item>

    <el-menu-item :index="VisibleRoutes.length + 1">
      <el-input v-model="input" style="width: 240px" placeholder="发现资源" clearable />
      <el-button type="primary"><el-icon><Search style="width: 2rem; height: 2rem" /></el-icon></el-button>
    </el-menu-item>
    <el-menu-item :index="VisibleRoutes.length + 2">
      <el-button type="primary" round>
        <span class="text-white text-2xl">发布</span>
      </el-button>
      <el-button type="primary" round color="white">
        <span class="text-blue-400 text-2xl" @click="() => router.push('/user/login')">登录</span>
      </el-button>
    </el-menu-item>

  </el-menu>  <!--end 顶部导航栏 -->

</template>

<style scoped lang="less">
.el-menu--horizontal > .el-menu-item:nth-child(2) {
  margin-right: auto;
}
</style>
