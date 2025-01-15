<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import BasicLayout from '@/views/layout/BasicLayout.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

</script>

<template>
  <template v-if="route.path.startsWith('/user')">
    <router-view />
  </template>
  <template v-else>
    <BasicLayout></BasicLayout>
  </template>

</template>

<style scoped lang="less"></style>
