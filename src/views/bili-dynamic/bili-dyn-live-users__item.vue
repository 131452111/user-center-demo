<template>
  <div class="user-card">
    <div class="avatar">
      <img src="D:\code\ccc-bili\src\assets\img\蒂蒂.jpg" alt="User Avatar" />
    </div>
    <div class="isLiving">
      <el-icon size="10px"><Headset /></el-icon>
      直播中
    </div>
    <div class="user-info" @click="goToLiveroom">
      <h3 @click="goToUserpage">CCC</h3>
      <p>无敌</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const goToLiveroom = () => {
  // 跳转到直播间
  window.open('https://live.bilibili.com/123456789', '_blank');
}
const goToUserpage = () => {
  // 跳转到用户页面
  window.open('https://space.bilibili.com/123456789', '_blank');
}

</script>

<style scoped lang="less">
.user-card {
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 0px;
  /* border: 1px solid #e1e1e1; */
  border-radius: 8px;
  &:hover {
    background-color: #f5f5f5;
  }
  .avatar {
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
  }
  .isLiving {
    position: absolute;
    bottom: 10px;
    left: -5px;
    background-color: #ff6699;
    color: #fff;
    font-size: 12px;
    border-radius: 4px;
    padding: 0 4px;
  }
  .user-info {
    flex: 1;
    cursor: pointer;
    h3 {
      font-size: 13px;
      margin: 0 0 0 14px;
      &:hover {
        color: #00a1d6;
      }
    }
    p {
      font-size: 12px;
      color: #999;
      margin: 0 0 0 14px;
    }
  }
}
</style>
