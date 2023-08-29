<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { pictureInfo } from '@/types/home'

const props = defineProps({
  /**图片列表 */
  pictureList: {
    type: Array<pictureInfo>
  },
  /** 显示指示点 */
  isShowIndicator: {
    type: Boolean,
    require: false,
    default: () => {
      return true
    }
  },
  /** 自动播放 */
  isAutoPlay: {
    type: Boolean,
    require: false,
    default: () => {
      return true
    }
  }
})

const emits = defineEmits<{
  (e: 'imageClike', info: pictureInfo): void
}>()

const imageClike = (item: pictureInfo) => {
  emits('imageClike', item)
}

const pictures = ref([
  {src: "https://img0.baidu.com/it/u=1491296277,1329539836&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",alt: "撸起袖子加油干",index: "0",ref: "picture",},
  {src: "https://img2.baidu.com/it/u=141235511,288522525&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=263",alt: "植树造林",index: "1",ref: "picture",},
  {src: "https://img1.baidu.com/it/u=2564747122,3162867613&fm=253&fmt=auto&app=138&f=JPEG?w=888&h=500",alt: "疫情防控常态化",index: "2",ref: "picture",},
  {src: "https://img1.baidu.com/it/u=1221896196,2147882061&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=250",alt: "1FCA0F23.png戴头盔",index: "3",ref: "picture",},
  {src: "https://img1.baidu.com/it/u=3117634844,2583644829&fm=253&fmt=auto&app=138&f=JPEG?w=1024&h=492",alt: "培育文明之魂",index: "4",ref: "picture",},
])


const myul = ref<HTMLUListElement>()
const picture = ref<HTMLLIElement[]>()
const currentIndex = ref(0)

onMounted(() => {
  console.log(myul.value!.offsetLeft)
  console.log(picture.value![1].offsetLeft)
  const liEl = picture.value![0].cloneNode(true)
  myul.value?.appendChild(liEl)
})

/**
 * 向后轮播
 * @param index  图片索引
 * @param mount  图片数量
 */
const goNextPicture = (index: number = 0,mount: number) => {
  const timer = setInterval(()=>{
    myul.value!.style.left = Math.abs(myul.value!.offsetLeft - 10) > picture.value![1].offsetLeft * index ? -picture.value![1].offsetLeft * index +'px' : myul.value!.offsetLeft - 10 + 'px'
    if(Math.abs(myul.value!.offsetLeft)  >=  picture.value![1].offsetLeft * index){
      clearInterval(timer)
    }
    if(Math.abs(myul.value!.offsetLeft)  >=  picture.value![1].offsetLeft * mount){
      myul.value!.style.left = '0px'
    }
    
  },1)
}

/**
 * 向前轮播
 * @param index  图片索引
 * @param mount  图片数量
 */
const goPrePicture = (index: number , mount: number) => {
  const timer = setInterval(()=>{
    myul.value!.style.left = myul.value!.offsetLeft + 10 > -picture.value![1].offsetLeft * index ? -picture.value![1].offsetLeft * index +'px' : myul.value!.offsetLeft + 10 + 'px'
    if(Math.abs(myul.value!.offsetLeft)  <=  picture.value![1].offsetLeft * index){
      clearInterval(timer)
    }
    
  },1)
}

const intervalTimer = ref(0)
/**
 * 自动播放
 * @param current 当前图片索引
 */
const autoPlay = (current: number) => {
  if(!props.isAutoPlay) return
  let t = current
  intervalTimer.value = setInterval(() => {
    t++
    goNextPicture(t,pictures.value.length)
    if(t % pictures.value.length == 0){
      t = 0
    }
    currentIndex.value = t
  },3000)
}
onMounted(() => {
  autoPlay(currentIndex.value)
})


const handleOptionClick = (index: number) => {
  if(index === currentIndex.value) return

  index > currentIndex.value ? goNextPicture(index,pictures.value.length) : goPrePicture(index,pictures.value.length)
  currentIndex.value = index
}

const handleMouseover = () => {
  clearInterval(intervalTimer.value)
}
const handleMouseLeave = () => {
  autoPlay(currentIndex.value)
}

</script>

<template>
   <div class="outest" @mouseover="handleMouseover" @mouseleave="handleMouseLeave" >
    <!-- 主要图片 -->
    <ul ref="myul">
      <li v-for="e of pictureList" :key="e.index" :ref="e.ref" @click="imageClike(e)">
        <img :src="e.src" :alt="e.alt" />
      </li>
    </ul>
    <!-- 底部小圆圈的设置 -->
    <div class="mydiv" v-if="isShowIndicator">
      <div class="empty-cicle" v-for="(e,index) in pictures" :key="e.index" ref="cicle" :class="{active:currentIndex == index}"  @click="handleOptionClick(index)"></div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.outest {
  width: 600px;
  height: 400px;
  border: 2px rgb(115, 170, 243) solid;
  border-radius: 5px;
  padding: 0px;
  position: absolute;
  overflow: hidden;
  cursor: pointer;
  background-color: bisque;
  /** 轮播图片设置 */
  ul {
    position: relative;
    margin: 0px;
    padding: 0px;
    width: calc(6 * 100%);
    height: 100%;
    li {
      width: calc(1 / 6 * 100%);
      height: 100%;
      list-style: none;
      float: left;
      img {
          width: 100%;
          height: 100%;
      }
    }
  }
  .mydiv {
    width: 100%;
    height: 30px;
    position: absolute;
    bottom: 0px;
    z-index: 4;
    display: flex;
    align-self: center;
    justify-content: center;
    .empty-cicle {
      display: inline-block;
      width: 20px;
      height: 10px;
      background-color: rgba($color: #000000, $alpha: 0.4);
      border-radius: 90px;
      z-index: 4;
      margin-right: 5px;
      
    }
    .active{
      background-color: #000000;
    }
  }
}
  
</style>
