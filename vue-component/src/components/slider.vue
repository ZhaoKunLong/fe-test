<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';

// 接收图片数组及轮播定时
const props = defineProps<{
    images: string[];
    interval?: number;
}>();

// 当前轮播图index
const currentIndex = ref(0);

// 定时器句柄
let timer: number;

const changeSlide = (index: number) => {
    currentIndex.value = index;
};

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

// 使用定时器自动轮播
const startTimer = () => {
    timer = setInterval(nextSlide, props.interval);
};

// 清除定时器
const stopTimer = () => {
    clearInterval(timer);
};

// 手动切换时刷新定时器
watch(currentIndex, () => {
    stopTimer();
    startTimer();
});

onMounted(() => {
    startTimer();
});

onUnmounted(() => {
    stopTimer();
});
</script>

<template>
    <div class="carousel">
        <div class="carousel-images" :style="{ transform: `translateX(-${currentIndex * 500}px)` }">
            <div v-for="(image, index) in images" :key="index" class="carousel-image">
                <img :src="image" alt="carousel-image" class="carousel-image-img">
            </div>
        </div>
        <div class="pagination">
            <span v-for="index in images.length" :key="index" class="pagination-item"
                :class="{ active: currentIndex === index - 1 }" @click="changeSlide(index - 1)">
                {{ index }}
            </span>
        </div>
    </div>
</template>
  
<style scoped>
.carousel {
    position: relative;
    width: 500px;
    overflow: hidden;
}

.carousel-images {
    display: flex;
    transition: transform 0.5s ease;
}

.carousel-image {
    width: 500px;
    height: auto;
}

.carousel-image-img {
    width: 500px;
    object-fit: cover;
}

.pagination {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
}

.pagination-item {
    margin: 0 5px;
    cursor: pointer;
    color: gray;
}

.pagination-item.active {
    color: black;
}
</style>