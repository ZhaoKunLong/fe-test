<script setup lang="ts">
import MySwipper from '@/components/MySwipper.vue';
import type { pictureInfo } from '@/types/home';
import { ref } from 'vue';
const pictures = ref<pictureInfo[]>([
  {src: "https://img0.baidu.com/it/u=1491296277,1329539836&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",alt: "撸起袖子加油干",index: "0",ref: "picture"},
  {src: "https://img2.baidu.com/it/u=141235511,288522525&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=263",alt: "植树造林",index: "1",ref: "picture"},
  {src: "https://img1.baidu.com/it/u=2564747122,3162867613&fm=253&fmt=auto&app=138&f=JPEG?w=888&h=500",alt: "疫情防控常态化",index: "2",ref: "picture"},
  {src: "https://img1.baidu.com/it/u=1221896196,2147882061&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=250",alt: "1FCA0F23.png戴头盔",index: "3",ref: "picture"},
  {src: "https://img1.baidu.com/it/u=3117634844,2583644829&fm=253&fmt=auto&app=138&f=JPEG?w=1024&h=492",alt: "培育文明之魂",index: "4",ref: "picture"},
])
const imageClike = (info: pictureInfo) => {
  alert(`点击了图片   ${info.alt}`)
}
</script>

<template>
  <div>
      <MySwipper
      :picture-list="pictures" 
      :is-auto-play="true"
      :is-show-indicator="true"
      @image-clike="imageClike"
      ></MySwipper>
  </div>
</template>

<style scoped></style>
