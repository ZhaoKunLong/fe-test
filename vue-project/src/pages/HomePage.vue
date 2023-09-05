<script setup>
import InputWithButton from '../components/InputWithButton.vue'
import KeywordFilterd from '../components/KeywordFilterd.vue'
import SwiperWithNav from '../components/SwiperWithNav.vue'
import buttonWithModal from '../components/ButtonWithModal.vue'
</script>

<template>
  <div class="flex flex-col gap-5">
    <section>
      <p>
        请实现一个 Vue 组件，包含一个输入框和一个按钮，点击按钮后将输入框中的内容添加到一个列表中。
      </p>
      <InputWithButton />
    </section>
    <section>
      <p>
        请实现一个 Vue
        组件，包含一个输入框和一个表格，输入框中输入关键字后，表格中的数据会根据关键字进行筛选。
      </p>
      <KeywordFilterd />
    </section>
    <section>
      <p>
        请实现一个
        Vue组件，包含一个轮播图和一个分页器，轮播图中有多张图片，分页器可以切换轮播图中的图片。
      </p>
      <SwiperWithNav />
    </section>
    <section>
      <p>
        请实现一个 Vue 组件，包含一个按钮和一个 modal 弹框，点击按钮出现 modal 框，点击其他部分
        modal 框消失。在该组件基础上，使其支持自定义 modal 框内容，头部和底部。
      </p>

      <buttonWithModal />
    </section>

    <p>将上述组件组织在一个 project 内</p>
  </div>
</template>

<style scoped></style>
