

<template>
  <div class="carousel">
    <div class="carousel-inner">
      <div class="carousel-item" v-for="(item, index) in items" :key="index" :class="{ active: index === currentIndex }">
        <img :src="item.src" :alt="item.alt">
      </div>
    </div>
    <div class="carousel-indicators">
      <button v-for="(item, index) in items" :key="index" :class="{ active: index === currentIndex }" @click="currentIndex = index"></button>
    </div>
  </div>
</template>

<script>


import home1 from '@/assets/home1.png'
import home2 from '@/assets/home2.png'
import home3 from '@/assets/home3.png'

export default {
  data() {
    return {
      items: [
        { src: home1, alt: 'Slide 1' },
        { src: home2, alt: 'Slide 2' },
        { src: home3, alt: 'Slide 3' },
      ],
      currentIndex: 0,
    };
  },
};
</script>

<style>
.carousel {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.carousel-inner {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.carousel-item.active {
  opacity: 1;
}

.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.carousel-indicators button {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border: none;
  border-radius: 50%;
  background-color: #ccc;
  cursor: pointer;
}

.carousel-indicators button.active {
  background-color: #333;
}
</style>