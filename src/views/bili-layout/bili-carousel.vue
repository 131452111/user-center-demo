<script setup lang="ts">
import { ref } from 'vue';
import 蒂蒂 from '@/assets/img/蒂蒂.jpg';
import 甘雨 from '@/assets/img/甘雨.jpg';
import 星宝 from '@/assets/img/星宝.jpg';
import 巫师4 from '@/views/bili-layout/《巫师4》最新中配预告曝光.png';
const images = ref([
  蒂蒂,
  甘雨,
  星宝,
  巫师4
]);

const slideIndex = ref(0);

function moveSlide(n: number) {
  let newIndex = slideIndex.value + n;
  if (newIndex >= images.value.length) {
    newIndex = 0;
  } else if (newIndex < 0) {
    newIndex = images.value.length - 1;
  }
  slideIndex.value = newIndex;
}

function setSlide(n: number) {
  slideIndex.value = n;
}
</script>

<template>
<div class="carousel">
  <div class="carousel-inner" :style="`transform: translateX(-${slideIndex * 100}%)`">
    <div class="carousel-item" v-for="(image, index) in images" :key="index">
      <img :src="image" alt="Image" />
    </div>
  </div>
  <div class="carousel-arrow left" @click="moveSlide(-1)">&#10094;</div>
  <div class="carousel-arrow right" @click="moveSlide(1)">&#10095;</div>
  <div class="carousel-indicators">
    <div
      class="carousel-indicator"
      v-for="(item, index) in images"
      :key="index"
      :class="{ active: index === slideIndex }"
      @click="setSlide(index)"
    ></div>
  </div>
</div>
</template>

<style scoped lang="less">
* {
  font-size: 16px;
}
.carousel {
  position: relative;
  width: 530px;
  height: 380px;
  overflow: hidden;
  margin: auto;
}
.carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item {
  min-width: 100%;
  flex: 0 0 100%;
  img {
    width: 100%;
    display: block;
  }
}

.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  z-index: 10;
}

.carousel-arrow.left {
  left: 10px;
}

.carousel-arrow.right {
  right: 10px;
}

.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.carousel-indicator {
  cursor: pointer;
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
}

.carousel-indicator.active {
  background-color: white;
}
</style>
