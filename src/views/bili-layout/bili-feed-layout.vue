<script setup lang="ts">
import biliVideoCard from './bili-video-card.vue';
import biliCarousel from './bili-carousel.vue';
</script>

<template>
  <div class="bili-feed-layout">
    <div class="feed_left">
      <biliCarousel></biliCarousel>
  </div>
    <div class="feed_right">
      <biliVideoCard></biliVideoCard>
      <biliVideoCard></biliVideoCard>
      <biliVideoCard></biliVideoCard>
      <biliVideoCard></biliVideoCard>
      <biliVideoCard></biliVideoCard>
      <biliVideoCard></biliVideoCard>
    </div>
  </div>
</template>

<style scoped lang="less">
* {
  font-size: 16px;
}
// .layout{
//   padding: 0 40px;
// }
.bili-feed-layout{
  display: flex;
  justify-content: space-evenly;
  .feed_left {
    // background-color: rgb(51,56,32);
    margin-right: 10px;
  }
  .feed_right {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
