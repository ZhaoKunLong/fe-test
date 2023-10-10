<template>
  <div class="carousel card">
    <div class="carousel-content">
      <ul v-if="list.length" ref="ulDom" :style="{ transform: `translateX(calc(-100% * ${carouselIndex}))` }">
        <li v-for="(item, index) in list" :key="index" :style="{ backgroundColor: item }">
          {{ (index === list.length - 1 ? 0 : index) + 1 }}
        </li>
      </ul>
    </div>
    <div class="arrow">
      <div class="arrow-item left" @click="switchCarousel(-1)">{{ '<' }}</div>
      <div class="arrow-item right" @click="switchCarousel(1)">{{ '>' }}</div>
    </div>
    <div v-if="list.length" class="point">
      <div
        v-for="item in list.length - 1"
        :key="item"
        :class="{ active: carouselIndex === item - 1 }"
        class="point-item"
        @click="clickPoint(item - 1)"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { getColor, throttle } from '@/utiles'

const list = ref<string[]>([])
const carouselIndex = ref(0)
const ulDom = ref<HTMLElement | null>(null)
const timer = ref<any>(null)
// 点击切换
const clickArrow = (num: number) => {
  if (num === -1 && carouselIndex.value === 0) {
    ulDom.value && (ulDom.value.style.transition = 'none')
    carouselIndex.value = list.value.length - 1
    setTimeout(() => {
      ulDom.value && (ulDom.value.style.transition = 'all 0.5s ease-in-out')
      carouselIndex.value += num
    })
  } else if (num === 1 && carouselIndex.value === list.value.length - 2) {
    carouselIndex.value += num
    setTimeout(() => {
      ulDom.value && (ulDom.value.style.transition = 'none')
      carouselIndex.value = 0
      setTimeout(() => {
        ulDom.value && (ulDom.value.style.transition = 'all 0.5s ease-in-out')
      }, 50)
    }, 400)
  } else {
    carouselIndex.value += num
  }
}

const clickArrowThrottle = throttle(clickArrow, 300)
const switchCarousel = (num: number) => {
  clearCarousel()
  clickArrowThrottle(num)
}
const clickPoint = (num: number) => {
  clearCarousel()
  carouselIndex.value = num
}
const clearCarousel = () => {
  if (timer.value) {
    clearInterval(timer.value)
  }
}
onMounted(() => {
  //生成随机颜色数组
  for (let i = 0; i < 6; i++) {
    list.value.push(getColor())
  }
  list.value.push(list.value[0])
  timer.value = setInterval(() => {
    clickArrowThrottle(1)
  }, 3000)
})
onBeforeUnmount(() => {
  clearCarousel()
})
</script>
<style scoped lang="less">
.carousel {
  position: relative;
  width: 90%;
  margin: 20px auto;
  cursor: pointer;
  height: 500px;
  box-sizing: border-box;
  &:hover {
    .arrow-item {
      opacity: 1;
    }
  }
  &-content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 10px;
    ul {
      height: 100%;
      display: flex;
      transition: all 0.5s ease-in-out;
      li {
        min-width: 100%;
        height: 500px;
        font-size: 20px;
        text-align: center;
        line-height: 500px;
      }
    }
  }

  .arrow {
    &-item {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 50px;
      height: 50px;
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 26px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.8s ease-in-out;
      opacity: 0;
    }
    .left {
      left: -25px;
    }
    .right {
      right: -25px;
    }
  }
  .point {
    position: absolute;
    left: 50%;
    bottom: 50px;
    display: flex;
    cursor: pointer;
    &-item {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: azure;
      transition: all 0.4s ease-in;
      &:hover {
        transform: scale(1.4);
        background-color: rgb(213, 237, 237);
      }
    }
    .point-item + .point-item {
      margin-left: 5px;
    }
    .active {
      transform: scale(1.4);
      background-color: rgb(213, 237, 237);
    }
  }
}
</style>
