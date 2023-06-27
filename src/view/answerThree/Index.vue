<template>
  <Page>
    <div class="carousel">
      <img class="img" :src="imgList[currentImg].src" alt="">
    </div>
    <div class="pagination">
      <div class="pagination-item" :class="currentStyle(index)" @click="paging(index)" v-for="(item, index) in imgList">{{
        index + 1 }}</div>
    </div>
  </Page>
</template>

<script lang="ts" setup>
import Page from '@/components/page/Index.vue'
import { ref, onUnmounted } from 'vue'
import img1 from '@/assets/1.jpg'
import img2 from '@/assets/2.jpg'
import img3 from '@/assets/3.jpg'
import img4 from '@/assets/4.jpg'
// 当前轮播图片下标
const currentImg = ref(0)
// 轮播图片列表
const imgList = [
  {
    src: img1
  },
  {
    src: img2
  },
  {
    src: img3
  },
  {
    src: img4
  },
]
// 当前页样式
const currentStyle = (index: number) => {
  if (index == currentImg.value) return 'current-style'
  else return ''
}
// 点击分页轮播
const paging = (index: number) => {
  currentImg.value = index
}
// 定时器
const interval = setInterval(() => {
  if (currentImg.value >= 3) return currentImg.value = 0
  currentImg.value++
}, 1500)
// 清除定时器，避免内存泄露
onUnmounted(() => clearInterval(interval))
</script>

<style scoped lang="scss">
.carousel {
  display: flex;
  justify-content: center;

  .img {
    width: 70%;
    height: 400px;
    object-fit: contain;
  }
}

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;

  .pagination-item {
    height: 30px;
    width: 30px;
    font-size: 16px;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    display: flex;
    color: #1a1a1aa1;
    cursor: pointer;
    align-items: center;
    justify-content: center;
  }

  .current-style {
    border: 1px solid #0960bd;
  }
}
</style>