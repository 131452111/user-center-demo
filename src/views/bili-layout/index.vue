<script setup lang="ts">
import navBar from '@/components/navBar.vue'; // 引入导航栏组件
import { onBeforeUnmount, onMounted, ref } from 'vue'; // 引入ref函数，用于创建响应式数据
import biliFeedLayout from './bili-feed-layout.vue'; // 引入布局组件
import biliHeader__channel from './bili-header__channel.vue'; // 引入频道头部组件
import biliVideoCard from './bili-video-card.vue'; // 引入视频卡片组件
const navIsShow = ref(false); // 创建响应式数据，用于控制导航栏的显示与隐藏
const handleScroll = () => { // 监听滚动事件
  const scrollTop = document.documentElement.scrollTop; // 获取滚动距离
  if (scrollTop > 60) {
    // 当滚动距离大于60px时，显示导航栏
   navIsShow.value = true
  } else {
    // 当滚动距离小于等于60px时，隐藏导航栏
    navIsShow.value = false
  }
  console.log('当前滚动的像素数：', scrollTop);
};
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<template>

  <div class="common-layout">
    <navBar class="fixed-top" v-show="navIsShow"></navBar>
    <el-container>
      <el-header height="265px">
        <div class="bili_header" style="position: relative;">
          <navBar></navBar>
          <a href="#">
            <img src="@/assets/img/星宝.jpg" alt="" style="height: 100px; width: 100px; border-radius: 50%; position: absolute; top: 70%; left: 10%; transform: translate(-50%, -50%);">
          </a>
        </div>
        <biliHeader__channel class="layout"></biliHeader__channel>
      </el-header>
      <el-main class="biliContent">
        <biliFeedLayout class="layout"></biliFeedLayout>
        <a href="#" class="biliContentChange" style="writing-mode: vertical-rl; text-orientation: upright;">
          <el-icon style="margin-bottom: 5px;"><Refresh /></el-icon>
          换一换
        </a>
        <div class="See_late">
          <el-icon size="30px"><VideoPlay /></el-icon>
        </div>
      </el-main>
      <el-footer>
        <div class="bili-footer__inner">
          <biliVideoCard class="biliVideoCard"></biliVideoCard>
          <biliVideoCard class="biliVideoCard"></biliVideoCard>
          <biliVideoCard class="biliVideoCard"></biliVideoCard>
          <biliVideoCard class="biliVideoCard"></biliVideoCard>
          <biliVideoCard class="biliVideoCard"></biliVideoCard>
          <biliVideoCard class="biliVideoCard"></biliVideoCard>
          <biliVideoCard class="biliVideoCard"></biliVideoCard>
          <biliVideoCard class="biliVideoCard"></biliVideoCard>
          <biliVideoCard class="biliVideoCard"></biliVideoCard>
          <biliVideoCard class="biliVideoCard"></biliVideoCard>
          <biliVideoCard class="biliVideoCard"></biliVideoCard>
          <biliVideoCard class="biliVideoCard"></biliVideoCard>
          <biliVideoCard class="biliVideoCard"></biliVideoCard>
          <biliVideoCard class="biliVideoCard"></biliVideoCard>
          <biliVideoCard class="biliVideoCard"></biliVideoCard>
          <biliVideoCard class="biliVideoCard"></biliVideoCard>
          <biliVideoCard class="biliVideoCard"></biliVideoCard>
          <biliVideoCard class="biliVideoCard"></biliVideoCard>
          <biliVideoCard class="biliVideoCard"></biliVideoCard>
          <biliVideoCard class="biliVideoCard"></biliVideoCard>
        </div>
      </el-footer>
    </el-container>
  </div>

</template>

<style scoped lang="less">
* {
  font-size: 16px;
}
.layout {
  padding: 0 40px;
}
.bili_header {
  width: 100%;
  height: 155px;
  background-image: url('@/views/bili-layout/IMG.jpg');
  background-size: cover; /* 让背景图片覆盖整个容器 */
  background-position: center; /* 将背景图片居中显示 */
  overflow: hidden; /* 超出容器部分隐藏 */
  border-bottom: 1px solid #e5e9ef;
}
.fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* 确保组件在最上层 */
  background-color: white; /* 可选：设置背景颜色，防止内容被覆盖 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 可选：添加阴影效果 */
}
.biliContent {
  position: relative;
  padding-top: 0;
  .biliContentChange{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    width: 40px;
    height: 83px;
    background-color: #fff;
    top: 50px;
    right: 10px;
    border-radius: 5px;
    color: #18191c;
    text-decoration: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 添加外边阴影 */
  }
  .See_late {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 20px;
    bottom: 200px;
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 添加外边阴影 */
  }
}
.bili-footer__inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 0;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  .biliVideoCard {
    width: 22%;
    margin-bottom: 40px;
  }
}
</style>
