<script setup lang="ts">
import { ref } from 'vue';
const title = ref([{title: '番剧', url: '#'}, {title: '国创', url: '#'}, {title: '综艺', url: '#'}, {title: '动画', url: '#'}, {title: '鬼畜', url: '#'}, {title: '舞蹈', url: '#'}, {title: '娱乐', url: '#'}, {title: '科技', url: '#'}, {title: '美食', url: '#'}, {title: '汽车', url: '#'}, {title: '运动', url: '#'}, {title: '电影', url: '#'}, {title: '电视剧', url: '#'}, {title: '纪录片', url: '#'}, {title: '游戏', url: '#'}, {title: '音乐', url: '#'}, {title: '影视', url: '#'}, {title: '知识', url: '#'}, {title: '资讯', url: '#'}, {title: '生活', url: '#'}, {title: '时尚', url: '#'}, {title: '更多', url: '#'},])
</script>

<template>
<div class="bili-header__channel">
  <div class="left">
    <ul>
      <li>
        <a href="/dynamic">
          <img src="@/assets/img/星宝.jpg" alt="">
          <span>动态</span>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="@/assets/img/甘雨.jpg" alt="">
          <span>热门</span>
        </a>
      </li>
    </ul>
  </div>
  <div class="middle">
    <ul>
      <li v-for="(item, index) in title" :key="index">
        <a :href="item.url">{{ item.title }}</a>
      </li>
    </ul>
  </div>
  <div class="right">
    <ul>
      <li>
        <a href="#">
          <el-icon size="20px"><DocumentChecked /></el-icon>
          <span>专栏</span>
        </a>
      </li>
      <li>
        <a href="#">
          <el-icon size="20px"><DocumentChecked /></el-icon>
          <span>活动</span>
        </a>
      </li>
      <li>
        <a href="#">
          <el-icon size="20px"><DocumentChecked /></el-icon>
          <span>社区中心</span>
        </a>
      </li>
      <li>
        <a href="#">
          <el-icon size="20px"><DocumentChecked /></el-icon>
          <span>直播</span>
        </a>
      </li>
      <li>
        <a href="#">
          <el-icon size="20px"><DocumentChecked /></el-icon>
          <span>课堂</span>
        </a>
      </li>
      <li>
        <a href="#">
          <el-icon size="20px"><DocumentChecked /></el-icon>
          <span>新歌热榜</span>
        </a>
      </li>
    </ul>
  </div>
</div>
</template>

<style scoped lang="less">
* {
  font-size: 16px;
}
// .layout{
//   padding: 0 0 0 60px;
// }
.bili-header__channel {
  width: 100%;
  height: 100px;
  background-color: #fff;
  border-bottom: 1px solid #e5e9ef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  .left {
    height: 100%;
    display: flex;
    ul{
      padding: 0;
      list-style: none;
      display: flex;
      align-items: center;
      li{
        a{
          display: flex;
          align-items: center;
          // color: #212121;
          flex-direction: column;
          font-size: 14px;
          padding-right: 20px;
          height: 100%;
          &:hover{
            background-color: #e5e9ef;
          }
          img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }

        }
      }
    }
  }
  .middle {
    // background-color: #f5f5f5; /* 设置背景颜色 */
    height: 100%;
    border-right: #eee 2px solid;
    display: flex;
    align-items: center;
    ul {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-wrap: wrap; /* 允许元素换行 */
      width: 935px;
      height: 66px;
      padding: 0 10px 0 0;
      li {
        // flex: 1; /* 设置元素自动调整大小 */
        // width: 20%; /* 设置元素宽度为容器宽度的20% */
        text-align: center; /* 居中文本 */
        // padding-right: 50px;
        background-color: #f5f5f5;
        border-radius: 5px;
        a {
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #212121;
          // display: block;
          width: 78px;
          height: 28px;
          font-size: 14px;
          &:hover {
            background-color: #e5e9ef;
          }
        }
      }
    }
  }
  .right {
    width: 240px;
    height: 66px;
    display: flex;
    align-items: center;
    ul {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-wrap: wrap; /* 允许元素换行 */
      padding: 0;
      li{
        text-align: center; /* 居中文本 */
        padding: 0 5px;
        a {
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #212121;
          // display: block;
          // width: 72px;
          height: 28px;
          font-size: 14px;
          &:hover {
            background-color: #e5e9ef;
          }
          span {
            padding-left: 5px;
          }
        }
      }
    }
  }
}
</style>
