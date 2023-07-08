<!--
  * @FileDescription: 第三题的组件
  * @Author: hejunfeng
-->
<template>
  <div class="carousel">
    <!-- 图片 -->
    <div
      class="image-item"
      v-for="(item, index) in imageList"
      :key="index"
      v-show="listIndex === index"
      @mouseover="changeMouse(true)"
      @mouseleave="changeMouse(false)"
    >
      <img :src="item" alt />
    </div>
    <!-- 两侧图标，上一张下一张 -->
    <div class="pre-btn" @click="changePage(prev)">&lt;</div>
    <div class="next-btn" @click="changePage(next)">&gt;</div>
    <!-- 底部切换小圆点按钮 -->
    <div class="bottom-bar">
      <div
        class="bottom-bar-item"
        :class="{'active': listIndex === index}"
        v-for="(item, index) in imageList"
        :key="item"
        @click="changeBtn(index)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "carouselView",
    props: {
      // 图片列表
      imageList: {
        type: Array,
        default: () => []
      }
    },
  data() {
    return {
      listIndex: 0, // 当前图片的下标
      timer: null // 定时器
    };
  },
  computed: {
    // 上一张图片的下标
    prev() {
      if (this.listIndex == 0) {
        return this.imageList.length - 1;
      } else {
        return this.listIndex - 1;
      }
    },
    // 下一张图片的下标
    next() {
      if (this.listIndex == this.imageList.length - 1) {
        return 0;
      } else {
        return this.listIndex + 1;
      }
    }
  },
  mounted() {
    // 开启定时器，循环播放图片
    this.setTimer();
  },
  beforeDestroy() {
    // 销毁组件时，清除定时器
    clearInterval(this.timer);
    this.timer = null;
  },
  methods: {
    /**
     * @description 切换图片方法
     * @param index 目标图片的下标
     * @return void
     */
    changePage(index) {
      this.listIndex = index;
    },
    /**
     * @description 定时器方法，循环播放图片
     * @return void
     */
    setTimer() {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.listIndex++;
        if (this.listIndex == this.imageList.length) {
          this.listIndex = 0;
        }
      }, 8000);
    },
    /**
     * @description 点击下方小圆点
     * @param index 目标图片的下标
     * @return void
     */
    changeBtn(index) {
      this.listIndex = index;
    },
    /**
     * @description 鼠标移入或移出
     * @param mouser true：鼠标移入 false：鼠标移出
     * @return void
     */
    changeMouse(mouser) {
      if (mouser) {
        clearInterval(this.timer);
        this.timer = null;
      } else {
        this.setTimer();
      }
    }
  }
};
</script>

<style lang="less">
.carousel {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  .image-item {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .pre-btn,
  .next-btn {
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    border: 2px solid #999;
    position: absolute;
    top: calc(50% - 15px);
    font-size: 20px;
    font-weight: 900;
    color: #999;
    cursor: pointer;
  }
  .next-btn {
    right: 10px;
  }
  .pre-btn {
    left: 10px;
  }
  .bottom-bar {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    height: 20px;
    &-item {
      width: 10px;
      height: 10px;
      background-color: #fff;
      border: 1px solid #fff;
      border-radius: 5px;
      display: inline-block;
      cursor: pointer;
      &:not(:last-child) {
        margin-right: 5px;
      }
    }
    .active {
      border: 1px solid #f40;
    }
  }
}
</style>
