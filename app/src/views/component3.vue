<!--
  * @FileDescription: 第一题的页面 carousel
  * @Author: hejunfeng
-->
<template>
  <div class="component3">
    <div class="title">
      <button class="link-btn" @click="toHome()">返回首页</button>
    </div>
    <carousel class="carousel-box" :imageList="imageList" />
  </div>
</template>

<script>
import carousel from "@/components/carousel.vue";
export default {
  name: "component3View",
  components: {
    carousel
  },
  data() {
    return {
      // 传入轮播图组件的图片
      imageList: [
        "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg",
        "https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg",
        "https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg"
      ]
    };
  },
  methods: {
    /**
     * @description 点击返回首页
     * @return void
     */
    toHome() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less">
.component3 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  .title {
    margin-bottom: 20px;
    .link-btn {
      color: #2985f7;
      font-size: 14px;
      border: 0;
      background-color: transparent;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .carousel-box {
    width: 500px;
    height: 300px;
  }
}
</style>
