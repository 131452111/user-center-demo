<script setup>
  import { ref } from 'vue'
  const isVisible = ref(false)
  let timer = ref(null) // 存储计时器ID的响应式变量
  const starHover = () => {
    // 清除已有的计时器
    if (timer.value) {
      clearTimeout(timer.value);
    }
    // 设置新的计时器
    timer.value = setTimeout(() => {
      isVisible.value = true;
    }, 3000);
  }
  const endHover = () => {
    // 清除计时器并立即隐藏span
    if (timer.value) {
      clearTimeout(timer.value);
    }
    isVisible.value = false;
  }

</script>

<template>
<div class="bili-video-card__image">
  <a href="#" class="bili-watch-later--wrap" @mouseenter="starHover" @mouseleave="endHover">
    <div class="player">
      <el-icon size="25px"><VideoPlay /></el-icon>
      <span v-show="isVisible">添加至稍后再看</span>
    </div>
    <img src="@/assets/img/星期日：过去软弱的我已经死了.avif" alt="">
    <div class="viedo_bottom">
      <span class="playback-amount">
        <el-icon><VideoPlay /></el-icon>
        13.3万
      </span>
      <span class="reviews">
        <el-icon><View /></el-icon>
        181
      </span>
      <span class="duration">
        2:17
      </span>
    </div>
  </a>
  <h3 class="bili-video-card__info--tit">
    <a href="#">
      星期日：过去软弱的我已经死了
    </a>
    <div class="bili_attention">
      ...
    </div>
  </h3>
  <div class="bili-video-card__info--bottom">
    <a href="#" class="bili-video-card__info--play">
      <el-icon><VideoPlay /></el-icon>
      3.3万
    </a>
    <a href="#" class="bili-video-card__info--author">
      asdwa
    </a>
    <a href="#" class="bili-video-card__info--date">
      2023-03-30
    </a>
  </div>
</div>
</template>

<style scoped lang="less">
* {
  font-size: 16px;
}
.bili-video-card__image {
  width: 255px;
  height: 210px;
  margin-bottom: 10px;
  background-color: #fff;
  .bili-watch-later--wrap {
    position: relative;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    width: 255px;
    position: relative;
    img {
          border-radius: 10px;
    }
    // height: 220px;
    .player {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      right: 3%;
      top: 10%;
      color: #fff;
      background-color: rgba(33, 33, 33, 0.5);
      // transform: translate(-50%, -50%); /* 使用transform属性将元素居中 */
      opacity: 0; /* 初始状态为透明 */
      transition: opacity 1s; /* 设置透明度的变化时间为1秒 */
      span {
        display: none;
        color: #fff;
        font-size: 14px;
        margin-left: 5px;
        position: relative;
        right: -100px;
        opacity: 0;
        transition: opacity 0.3s, transform 0.3s 3s; /* 添加延迟 */
      }
    }
    &:hover {
      .player {
        opacity: 1;
        span {
          display: inline-block;
          opacity: 1;
          transform: translateX(-100px); /* 添加动画效果 */
        }
      }
    }
    img {
      width: 255px;
      height: 143px;
    }
    .viedo_bottom {
      position: absolute;
      display: flex;
      bottom: 0;
      left: 10px;
      color: #fff;
      font-size: 14px;
      transition: opacity 1s;
      background-image: radial-gradient(
			30px at 30px 20px,
			rgba(255, 255, 255, 0.2),
			transparent
		  );
      span {
        display: flex;
        align-items: center;
        margin-right: 10px;
        font-size: 16px;
        .el-icon {
          margin-right: 5px;
        }
      }
      .duration {
        margin-left: 50px;
      }
      opacity: 1; /* 初始状态为透明 */
    }
  }
  .bili-watch-later--wrap:hover {
    .viedo_bottom {
      opacity: 0;
    }
  }
  .bili-video-card__info--tit {
    font-size: 16px;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    a {
      color: #18191C;
      text-decoration: none;
      font-size: 15px;
    }
    .bili_attention {
      display: flex;
      justify-content: start;
      align-items: center;
      text-align: center;
      font-size: 20px;
      font-weight: 400;
      margin-top: 3px;
      width: 20px;
      height: 20px;
      writing-mode: vertical-rl; /* 垂直排列文字 */
      opacity: 0;
      transition: opacity 0.3s; /* 添加过渡效果 */
      &:hover {
        opacity: 1; /* 鼠标悬停时显示元素 */
      }
    }
  }
  .bili-video-card__info--bottom {
    a {
      color: #9499a0;
      text-decoration: none;
    }
    a:hover {
      color: #00a1d6;
    }
    .bili-video-card__info--play {
      margin-right: 10px;
      }
    .bili-video-card__info--author {
      margin-right: 10px;
    }
    .bili-video-card__info--date {
      margin-right: 10px;
    }
  }
}
</style>
