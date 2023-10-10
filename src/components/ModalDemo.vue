<template>
  <div class="modalDemo">
    <button @click="visable1 = true">打开默认modal</button>
    <button @click="visable2 = true">打开自定义modal</button>
    <Modal v-model:visible="visable1" title="默认modal" />
    <Modal v-model:visible="visable2">
      <template #header>自定义头部区域</template>
      <div>
        <p>主内容区域</p>
        <p>主内容区域</p>
        <p>主内容区域</p>
        <p>主内容区域</p>
        <p>主内容区域</p>
      </div>
      <template #footer>自定义底部区域</template>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Modal from './Modal.vue'
const visable1 = ref(false)
const visable2 = ref(false)
</script>
<style scoped lang="less">
.modalDemo {
  padding: 20px 0;
}
</style>
