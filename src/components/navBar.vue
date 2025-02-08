<script setup lang="ts">

</script>

<template>
<div class="bili-header-banner_inner">
  <div class="left-entry">
    <ul class="nav_ul">
      <li><a href="/" class="toHome"><img src="@/../public/logo.jpg" alt=""><span>首页</span></a></li>
      <li><a href="#"><span>番剧</span></a></li>
      <li><a href="#"><span>直播</span></a></li>
      <li><a href="#"><span>游戏中心</span></a></li>
      <li><a href="#"><span>会员购</span></a></li>
      <li><a href="#"><span>漫画</span></a></li>
      <li><a href="#"><span>赛事</span></a></li>
      <li><a href="#"><el-icon color="#eee"><Download /></el-icon><span>下载客户端</span></a></li>
    </ul>
  </div>
  <div class="bili-herder_inp">
    <form action="#" class="bili-header-form">
      <div class="bili-header_input"><input type="text" name="" id="" placeholder="请输入内容"></div>
      <div class="bili-header_searchicon">
        <a href="#" style="display: flex; justify-content: center;align-items: center">
          <el-icon size="17px"><Search style="margin-top: 5px" /></el-icon>
        </a>
      </div>
    </form>
  </div>
  <div class="right-entry">
    <ul class="nav_ul">
        <li><a href="#" class="a_avatar">
          <img src="@/../public/logo.jpg" alt="" class="avatar">
        </a></li>
        <li class="bili_vip">
          <a href="#">
          <el-icon size="20px" color="#18191c"><MilkTea /></el-icon>
          <span>大会员</span>
          </a>
        </li>
        <li>
          <a href="#">
            <el-icon size="20px" color="#18191c"><Message /></el-icon>
            <span>消息</span>
          </a>
        </li>
        <li>
          <a href="/biliDynamic">
            <el-icon size="20px" color="#18191c"><BellFilled /></el-icon>
            <span>动态</span>
          </a>
        </li>
        <li>
          <a href="/github">
            <el-icon size="20px" color="#18191c"><Star /></el-icon>
            <span>收藏</span>
          </a>
        </li>
        <li>
          <a href="#">
            <el-icon size="20px" color="#18191c"><Message /></el-icon>
            <span>历史</span>
          </a>
        </li>
        <li>
          <a href="#">
            <el-icon size="20px" color="#18191c"><Message /></el-icon>
            <span>创作中心</span>
          </a>
        </li>
        <li>
          <button>
            <el-icon color="#18191c" size="17px"><Upload /></el-icon>
            <span>投稿</span>
          </button>
        </li>
      </ul>
  </div>
</div>
</template>

<style scoped lang="less">
* {
  font-size: 14px;
}
.bili-header-banner_inner {
  display: flex;
  background-color: rgba(255, 255, 255, 0.1 ); /* 红色，透明度为10% */
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: start;
  /* padding: 0 14px; */
  align-items: center;
  justify-content: space-evenly;
}
.left-entry {
  width: 458px;
  line-height: 64px;
  li {
    a {
      img {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 5px;
      }
    }
  }
}
.nav_ul {
  display: flex;
  justify-content: space-evenly;
  font-size: 14px;
  list-style: none;
  padding: 0;
  margin: 0;
  span {
          color: #18191c;
        }
}
.nav_ul li a{
  text-decoration: none;
}
.toHome{
  display: flex;
  align-items: center;
  justify-content: center;
}
.bili-herder_inp {
  .bili-header-form {
    background-color: #f1f2f3;
    line-height: 40px;
    height: 40px;
    width: 461px;
    display: flex;
    align-items: center;
    justify-self: start;
    border-radius: 10px;
  }
  .bili-header_searchicon {
    /* background-color: aquamarine; */
    display: inline-block;
    margin: 0 auto;
    padding-top: 5px;
    text-align: center;
    line-height: 32px;
    width: 32px;
    height: 32px;
    border-radius: 7px;
  }
  .bili-header_searchicon:hover{
    background-color: rgb(227,229,231);
  }
  .bili-header_input input {
    width: 372px;
    height: 34px;
    line-height: 20px;
    border-radius: 5px;
    border: none;
    margin-left: 20px;
    background-color: #f1f2f3;
  }
}
.right-entry {
  // padding: 0 24px;
  width: 458px;
  height: 50px;
  ul {
    height: 50px;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          vertical-align: middle;
          padding-right: 5px;
        }
        span {
          margin-top: 3px;
        }
      }
      button {
        width: 90px;
        height: 40px;
        background-color: #fb7299;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        border: none;
        cursor: pointer; // 鼠标放上去变成小手
        span {
          margin-left: 5px;
        }
      }
    }
  }
}
</style>

