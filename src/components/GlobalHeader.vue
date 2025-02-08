<script setup lang="ts">
import routes from '@/router/routes.ts'
import { SYSTEM_LOGO } from '@/utils/imgs.ts'
import router from '@/router'
import { ref } from 'vue'
import { useUserStore } from '@/stores'
import { Search } from '@element-plus/icons-vue'
import { ElMessageBox } from 'element-plus'

// 展示在菜单栏的路由数组
const VisibleRoutes = routes.filter((item) => {
  return !item.meta?.hideInMenu
})
console.log(VisibleRoutes)
const doMenuClick = (key: string) => {
  console.log(key)
  router.push({ path: key })
}

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const input = ref('')
const userStore = useUserStore()
const isLogin = () => {
  return !userStore.token
}

const handleCommand = async (command: string) => {
  if (command === 'logout') {
    await ElMessageBox.confirm(
      '你确定要退出吗？',
      '温馨提示',
      {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning',
      }
    )
    userStore.removeToken()
    userStore.setUserInfo({ avatar: '', email: '', nickname: '', password: '', username: '' })
    router.push({ path: '/user/login'})
  } else {
    router.push({ path: command })
  }
}

</script>

<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    :ellipsis="false"
  >
    <el-menu-item index="0"
      ><a href="/" class="logo flex justify-center items-center" style="flex: 0 0 150px">
        <img src="../../public/logo.jpg" class="w-16 h-16" alt="w" />
        <div class="title text-3xl ml-6">用户中心</div>
      </a> </el-menu-item
    ><!-- end logo -->
    <el-menu-item v-for="(item, index) in VisibleRoutes" :key="item.path" :index="index + 1">
      <a
        href="javascript:void(0)"
        class="text-2xl p-3 hover:bg-gray-200 whitespace-nowrap"
        @click="doMenuClick(item.path)"
      >
        {{ item.name }}
      </a>
    </el-menu-item>

    <el-menu-item :index="VisibleRoutes.length + 1">
      <el-input v-model="input" style="width: 240px" placeholder="发现资源" clearable />
      <el-button type="primary"
        ><el-icon><Search style="width: 2rem; height: 2rem" /></el-icon
      ></el-button>
    </el-menu-item>
    <el-menu-item :index="VisibleRoutes.length + 2">
      <el-button type="primary" round>
        <span class="text-white text-2xl">发布</span>
      </el-button>
    </el-menu-item>
    <el-menu-item :index="VisibleRoutes.length + 3">
      <el-button type="primary" round color="white" v-if="isLogin()">
        <span class="text-blue-400 text-2xl" @click="() => router.push('/user/login')">登录</span>
      </el-button>
      <el-dropdown v-else @command="handleCommand">
        <img src="@/assets/imgs/小小鸟.jpg" class="w-12 h-12 rounded-full" alt="无" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="/article/layout/info">基本资料</el-dropdown-item>
            <el-dropdown-item command="/article/layout/avatar">重置头像</el-dropdown-item>
            <el-dropdown-item command="/article/layout/resetPassword">更换密码</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-menu-item>
  </el-menu>
  <!--end 顶部导航栏 -->
</template>

<style scoped lang="less">
.el-menu--horizontal > .el-menu-item:nth-child(6) {
  margin-right: auto;
}
</style>
