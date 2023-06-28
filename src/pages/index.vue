<script lang='ts' setup>
import { reactive, ref } from 'vue'

interface SwiperItem {
  url: string
  value: number
}
const visible = ref(false)
const swiperList = reactive<SwiperItem[]>([
  {
    url: getImageUrl('img1'),
    value: 1,
  },
  {
    url: getImageUrl('img2'),
    value: 2,
  },
  {
    url: getImageUrl('img3'),
    value: 3,
  },
  {
    url: getImageUrl('img4'),
    value: 4,
  },
])

function getImageUrl(name: string) {
  return new URL(`../assets/swiper/${name}.jpg`, import.meta.url).href
}
</script>

<template>
  <div class="w-f grid grid-cols-3 grid-rows-3 h-full gap-5 p-5">
    <div>
      组件一(根据输入的添加到列表末尾)
      <BtnIptList />
    </div>
    <div>
      组件二(根据名称筛选)
      <BtnTable />
    </div>
    <div>
      组件四(弹出框展示)
      <div>
        <button class="btn" @click="visible = !visible">
          展示
        </button>
      </div>
      <Model v-model:visible="visible">
        <template #header>
          头部
        </template>
        内容
        <template #footer>
          <button class="float-right btn" @click="visible = false">
            Close
          </button>
        </template>
      </Model>
    </div>
    <div class="col-span-3 row-span-2 px-50">
      <div>组件三(轮播图)</div>
      <div class="h-[calc(100%-30px)] w-full">
        <Swiper :list="swiperList" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
