<template>
  <div class="carousel-container">
    <div class="carousel">
      <transition name="fade">
        <img
          :src="currentImage"
          :key="currentImage"
          alt="Carousel Image"
          class="carousel-image"
        />
      </transition>
    </div>
    <div class="pager">
      <ul>
        <li
          v-for="(image, index) in images"
          :key="index"
          :class="{ active: index === activeIndex }"
          @click="changeImage(index)"
        >
          <img :src="image" alt="Pager Image" class="pager-image" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const images = ref([
  './images/image1.png',
  './images/image2.png',
  './images/image3.png',
  './images/image4.png'
]);

const activeIndex = ref(0);
let timer = null;

const changeImage = (index) => {
  activeIndex.value = index;
  resetTimer();
};

const currentImage = computed(() => images.value[activeIndex.value]);

const startTimer = () => {
  timer = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % images.value.length;
  }, 3000);
};

const resetTimer = () => {
  clearInterval(timer);
  startTimer();
};

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<style>
.carousel-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carousel {
  width: 400px;
  height: 300px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.pager {
  display: flex;
  justify-content: center;
}

.pager ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.pager li {
  display: inline-block;
  margin: 0 5px;
  cursor: pointer;
}

.pager li.active {
  border: 2px solid green;
  border-style: dashed;
}

.pager-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
}
</style>
