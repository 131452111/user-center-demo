<script setup lang="ts">
import '@/views/github/index.css';
import navBar from '@/components/navBar.vue';
import biliDynList from '@/views/bili-dynamic/bili-dyn-list.vue'; /* PartiallyEnd: #3632/scriptSetup.vue */
import liveUserItem from '@/views/bili-dynamic/bili-dyn-live-users__item.vue';
import biliDynPublishing from '@/views/bili-dynamic/bili-dyn-publishing.vue';
import biliDynUpListWindow from '@/views/bili-dynamic/bili-dyn-up-list__window.vue'; /* PartiallyEnd: #3632/scriptSetup.vue */
import topicPanel from '@/views/bili-dynamic/topic-panel.vue'; /* PartiallyEnd: #3632/scriptSetup.vue */
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue' // 引入ref函数，用于创建响应式数据

// 定义主页面名字
defineComponent({
  name: 'biliDynamic'
})

const topicIsShow = ref(false);
const handleScroll = () => { // 监听滚动事件
  const scrollTop = document.documentElement.scrollTop; // 获取滚动距离
  if (scrollTop > 170) {
    // 当滚动距离大于60px时，显示导航栏
    topicIsShow.value = true
  } else {
    // 当滚动距离小于等于60px时，隐藏导航栏
    topicIsShow.value = false
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
<div class="bili_dynamic">
  <navBar class="fixed-top"></navBar>
  <div class="bili_container layout">
    <div class="container-left">
      <div class="bili-dyn-my-info">
        <div class="my-info-header">
          <a href="#" class="header-left">
            <img src="@/assets/img/蒂蒂.jpg" alt="">
          </a>
          <div class="header-right">
            <a href="#">ccc</a>
            <a href="#">vip5</a>
          </div>
        </div>
        <div class="my-info-footer">
          <a href="#"><span>531</span><span>关注</span></a>
          <a href="#"><span>11</span><span>粉丝</span></a>
          <a href="#"><span>3</span><span>历史</span></a>
        </div>
      </div>
      <div class="bili-dyn-live-users">
        <div class="live-top">
          <a href="#" class="live-top-left">正在直播<span>5</span>
          </a>
          <a href="#" >更多关注<el-icon size="13px"><ArrowRight /></el-icon></a>
        </div>
        <div class="live-bottom">
          <div class="bili-dyn-live-users__item">
            <liveUserItem></liveUserItem>
            <liveUserItem></liveUserItem>
            <liveUserItem></liveUserItem>
            <liveUserItem></liveUserItem>
            <liveUserItem></liveUserItem>
            <liveUserItem></liveUserItem>
            <liveUserItem></liveUserItem>
            <liveUserItem></liveUserItem>
            <liveUserItem></liveUserItem>
            <liveUserItem></liveUserItem>
          </div>
        </div>
      </div>
    </div>
    <div class="container-middle">
      <div class="bili-dyn-publishing">
        <biliDynPublishing class="ml-3 mt-4"></biliDynPublishing>
      </div>
      <div class="bili-dyn-up-list">
        <biliDynUpListWindow class="ml-3 mt-3"></biliDynUpListWindow>
      </div>
      <div class="bili-dyn-list-tabs  ml-3 mt-3">
        <biliDynList></biliDynList>
      </div>
    </div>
    <div class="container-right ml-6 mt-3 pb-3">
      <div class="pic overflow-hidden">
        <img class="mx-auto h-40 rounded-xl" src="@/assets/img/bili社区.avif" alt="bili社区">
      </div>
      <topicPanel v-show="!topicIsShow"></topicPanel>
      <topicPanel class="topicFixed" v-show="topicIsShow"></topicPanel>
    </div>
  </div>
</div>
</template>

<style scoped lang="less">
.layout {
  margin: 0 40px;
}
.bili_dynamic {
  background-image: url('@/assets/img/hero.jpg');
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
.bili_container {
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  .container-left {
    margin-top: 16px;
    width: 20%;
    .bili-dyn-my-info {
      background-color: #fff;
      border-radius: 10px;
      padding: 10px;
      padding-left: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      .my-info-header {
        display: flex;
        margin-top: 20px;
        border-radius: 10px;
        .header-left {
          img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
        }
        .header-right {
          display: flex;
          flex-direction: column;
          margin-left: 5px;
          margin-top: 5px;
          a {
            display: block;
            font-size: 15px;
            margin-left: 10px;
            text-decoration: none;
            color: black;
            &:nth-child(1) {
              font-weight: 700;
            }
            &:nth-child(2) {
              font-size: 10px;
              color: white;
              font-weight: 700;
              background-color: red;
              width: 26px;
            }
          }
        }
      }
      .my-info-footer {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
      a {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        margin-right: 50px;
        color: black;
        &:hover {
          color: rgb(188, 27, 27);
        }
        span {
          &:nth-child(1) {
            font-size: 15px;
            font-weight: 700;
            text-align: center;
          }
          &:nth-child(2) {
            font-size: 10px;
          }
        }
      }
      }
    }
    .bili-dyn-live-users {
      background-color: #fff;
      border-radius: 10px;
      margin-top: 10px;
      padding: 10px;
      padding-left: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      .live-top {
        height: 200px;
        display: flex;
        justify-content: space-between;
        height: 24px;
        a {
          text-decoration: none;
        }
        a:nth-child(2) {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 13px;
          color: #9499a0;
          &:hover {
            color: #00a1d6;
          }
        }
        .live-top-left {
          color: #18191c;
          font-size: 17px;
          font-weight: 700;
          span {
            font-size: 15px;
            font-weight: 400;
          }
        }
      }
    }
  }
  .container-middle {
    width: 55%;
  }
  .container-right {
    width: 25%;
  }
}
.topicFixed {
  position: fixed;
  top: 4rem;
  right: 3.8rem;
  width: 325px;
  z-index: 1000; /* 确保组件在最上层 */
}

</style>
