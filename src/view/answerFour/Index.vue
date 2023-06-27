<template>
  <Page>
    <div class="top">
      <button class="button" @click="showModal = true">点击弹出modal</button>
      <Modal v-model:show="showModal">
        <template v-slot:title>标题</template>
        <template v-slot:content>我是内容</template>
        <template v-slot:footer>底部</template>
      </Modal>
    </div>
  </Page>
</template>

<script lang="ts" setup>
import Page from '@/components/page/Index.vue'
import Modal from '@/components/modal/Index.vue'
import { ref } from 'vue'

const showModal = ref(false)

</script>

<style scoped lang="scss">
.top {
  text-align: center;

  .button {
    line-height: 1.5715;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    border: 1px solid transparent;
    box-shadow: 0 2px #00000004;
    cursor: pointer;
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    touch-action: manipulation;
    height: 32px;
    padding: 4px 15px;
    font-size: 14px;
    border-radius: 2px;
    color: #000000d9;
    border-color: #d9d9d9;
    background: #fff;
  }
}
</style>