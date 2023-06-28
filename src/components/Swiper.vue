<script lang='ts' setup>
import { ref } from 'vue'

export interface SwiperItem {
  url: string
  value: number
}

interface Props { list: SwiperItem[] }

const props = defineProps<Props>()

const active = ref<number>(1)
</script>

<template>
  <div class="relative h-full w-full">
    <div class="relative h-full w-full flex overflow-x-hidden">
      <div
        v-for="item, i in props.list" :key="i"
        class="absolute h-full w-full translate-x-100% bg-light-blue-200 transition-transform duration-700"
        :style="{ transform: `translateX(${i + 1 - (active as number)}00%)` }"
      >
        <img class="h-full w-full" :src="item.url">
      </div>
    </div>
    <div class="absolute bottom-5 right-4 z-10 flex gap-2">
      <div
        v-for="item, i in props.list" :key="i" class="h-4 w-4 cursor-pointer border border-#555 rounded-2 bg-#fff"
        :class="{ 'bg-green-400': active === item.value }" @click="active = item.value"
      />
    </div>
  </div>
</template>

<style scoped></style>
