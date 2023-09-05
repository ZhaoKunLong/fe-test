<!-- eslint-disable vue/require-v-for-key -->
<script setup>
const imgSrc = ['/slide/au.jpg', '/slide/hongkong.jpg', '/slide/malta.jpg']
import { ref } from 'vue'
const left = ref(0)
const container = ref('null')

function handleclick(index, e) {
  document.querySelector('.active').classList.remove('active')
  e.target.classList.add('active')
  return (container.value.style.left = -600 * index + 'px')
}
</script>

<template>
  <div class="relative w-[600px] h-[400px] overflow-hidden">
    <div
      ref="container"
      class="transition-[left] duration-500 flex absolute"
      :style="{ left: left + 'px' }"
    >
      <template v-for="item in imgSrc">
        <img :src="item" class="w-[600px] h-[400px] object-cover shrink-0" />
      </template>
    </div>
    <ul class="flex gap-2 absolute top-[90%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <template v-for="(item, index) in imgSrc">
        <li
          @click="handleclick(index, $event)"
          class="rounded w-9 h-3 bg-white"
          :class="{ active: index == 0 }"
        ></li>
      </template>
    </ul>
  </div>
</template>

<style scoped>
.active {
  background-color: rgb(103, 176, 50);
}
</style>
