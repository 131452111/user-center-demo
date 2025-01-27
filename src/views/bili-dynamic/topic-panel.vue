<script setup>
import relevantTopicContainer from '@/views/bili-dynamic/relevant-topic-container.vue'
</script>

<template>
<div class="topic-panel bg-white mt-3 rounded-lg pb-3">
  <div class="topic-panel-nav ml-3 pt-5 font-semibold text-md">话题</div>
  <relevant-topic-container></relevant-topic-container>
  <relevant-topic-container></relevant-topic-container>
  <relevant-topic-container></relevant-topic-container>
  <relevant-topic-container></relevant-topic-container>
  <relevant-topic-container></relevant-topic-container>
  <relevant-topic-container></relevant-topic-container>
</div>
</template>

<style scoped lang="less">
.topic-panel {
  width: 100%;
}
</style>
