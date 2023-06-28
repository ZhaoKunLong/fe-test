<template>
  <div>
    <h4>3、请实现一个Vue组件，包含一个轮播图和一个分页器，轮播图中有多张图片，分页器可以切换轮播图中的图片.</h4>
    <!-- 轮播图 -->
    <div class="swiper" @mouseleave="mouseleave" @mouseenter="mouseenter">
      <div class="img">
        <img
          @click="linkTo(item.linkUrl)"
          v-for="(item, index) in swipeList"
          :key="item.id"
          :src="item.picUrl"
          alt=""
          v-show="index == currentIndex"
        />
      </div>

      <!--底部小圈圈 -->
      <div class="circle">
        <span
          v-for="(item, index) in swipeList.length"
          :key="index"
          :class="{ current: index == currentIndex }"
          @click="swithToCurrent(index)"
        ></span>
      </div>
      <!-- 上一张 下一张按钮 -->
      <span class="pre" @click="preEvent"> </span>
      <span class="next" @click="nextEvent"> </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    swipeList: Array,
    default: [],
  },

  mounted() {
    const _this = this;
    this.timer = setInterval(function () {
      _this.nextEvent();
    }, 5000);
  },
  data() {
    return {
      currentIndex: 0,
      timer: null,
    };
  },
  methods: {
    // 下一张
    nextEvent() {
      this.currentIndex += 1;
      if (this.currentIndex >= this.swipeList.length) {
        this.currentIndex = 0;
      }
    },

    // 上一张
    preEvent() {
      this.currentIndex -= 1;
      if (this.currentIndex < 0) {
        this.currentIndex = this.swipeList.length - 1;
      }
    },
    //  小圈圈事件
    swithToCurrent(index) {
      this.currentIndex = index;
    },
    //  鼠标离开开启定时器
    mouseleave() {
      const _this = this;
      console.log("鼠标离开了");
      this.timer = setInterval(function () {
        _this.nextEvent();
      }, 5000);
    },
    mouseenter() {
      const _this = this;
      console.log("鼠标进入了");
      this.timer && clearInterval(_this.timer);
    },
    //  点击图片跳转
    linkTo(url) {
      window.location.href = url;
    },
  },
};
</script>

<style>
.swiper {
  width: 500px;
  height: 400px;
  background-color: blanchedalmond;
  position: relative;
}
.swiper .img {
  width: 100%;
  position: relative;
  height: 400px;
  transition: width 2s;
}
.swiper .img img {
  width: 100%;
  height: 400px;
  position: absolute;
  left: 0;
  top: 0;
}
.circle {
  position: absolute;
  bottom: 5px;
  left: 30%;
}
.circle span {
  width: 15px;
  height: 15px;
  background: rgb(158, 158, 157);
  opacity: 0.7;
  display: inline-block;
  margin-left: 15px;
  border-radius: 50%;
}
.circle .current {
  background-color: orange;
}
.pre {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: orange;
  left: 0;
  top: 48%;
}
.next {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: orange;
  top: 48%;
  right: 0;
}
</style>



