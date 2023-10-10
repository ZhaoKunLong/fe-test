<template>
  <div class="home">
    <div class="title">1.请实现一个Vue组件，包含一个输入框和一个按钮，点击按钮后将输入框中的内容添加到一个列表中。</div>
    <ToddoList />
    <div class="title">2.请实现一个Vue组件，包含一个输入框和一个表格，输入框中输入关键字后，表格中的数据会根据关键字进行筛选。</div>
    <FilterTable />
    <div class="title">3.请实现一个Vue组件，包含一个轮播图和一个分页器，轮播图中有多张图片，分页器可以切换轮播图中的图片。</div>
    <Carousel />
    <div class="title">
      4.请实现一个Vue组件，包含一个按钮和一个modal弹框， 点击按钮出现modal框，点击其他部分modal框消失。 -
      在该组件基础上，使期支持自定义modal框内容，头部和底部。
    </div>
    <ModalDemo />
  </div>
</template>

<script setup lang="ts">
import ToddoList from '@/components/ToddoList.vue'
import FilterTable from '@/components/FilterTable.vue'
import Carousel from '@/components/Carousel.vue'
import ModalDemo from '@/components/ModalDemo.vue'
</script>
<style scoped lang="less">
.home {
  .title {
    font-weight: 400;
    color: #000;
    font-size: 20px;
    line-height: 28px;
  }
}
</style>
