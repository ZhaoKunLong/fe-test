<script setup>
import { ref } from 'vue'

const visible = ref(false)

const showModal = () => {
  visible.value = true
}

const closeModal = () => {
  visible.value = false
}
</script>
;
<template>
  <div>
    <button class="border-2 p-4" @click="showModal">显示Modal框</button>
    <div
      class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-neutral-800 opacity-95"
      @click="closeModal"
      v-if="visible"
    >
      <div class="bg-white p-4 rounded flex flex-col gap-2" @click.stop>
        <section class="flex justify-between">
          <slot name="header">
            <h2>默认标题</h2>
          </slot>
          <span class="cursor-pointer" @click="closeModal">×</span>
        </section>
        <section class="modal-content">
          <slot name="content">
            <p>默认内容</p>
          </slot>
        </section>
        <section class="modal-footer">
          <slot name="footer">
            <button @click="closeModal">这是底部也是关闭</button>
          </slot>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
