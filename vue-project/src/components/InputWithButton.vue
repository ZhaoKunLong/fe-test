<!-- eslint-disable vue/require-v-for-key -->
<script setup>
import { reactive, ref } from 'vue'
const message = ref('')
const list = reactive([])
function additem() {
  list.push(message.value)
}
</script>

<template>
  <div class="flex gap-5">
    <form @submit.prevent="additem">
      <div class="flex gap-2">
        <input class="border-2" v-model="message" placeholder="输入内容" />
        <input class="border-2" type="submit" />
      </div>
    </form>
    <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside marker:text-blue-400">
      <li v-for="item in list">{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
