<script setup lang="ts">
defineProps({
  title: {
    required: true,
    type: String,
  },
})
</script>

<template>
  <el-card class="min-h-full">
    <template #header>
      <div class="header flex justify-between items-center">
        <span class="text-2xl">{{ title }}</span>
        <div class="extra">
          <slot name="extra"></slot>
        </div>
      </div>
    </template>

    <slot></slot>
  </el-card>
</template>

<style scoped lang="less"></style>
