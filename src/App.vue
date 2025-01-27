<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
// import BasicLayout from '@/views/layout/BasicLayout.vue'
// import { useRoute } from 'vue-router'
import zhCn from 'element-plus/dist/locale/zh-cn.js'
// const route = useRoute()

</script>

<template>
<!--  <template v-if="route.path.startsWith('/user')">-->
<!--    <router-view />-->
<!--  </template>-->
<el-config-provider :locale="zhCn">
  <router-view />
</el-config-provider>



</template>

<style scoped lang="less"></style>
