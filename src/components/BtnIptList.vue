<script lang='ts' setup>
import { reactive, ref } from 'vue'

const list = reactive([
  '第一条', '第二条',
])

const ipt = ref('')

function handleAdd() {
  list.push(ipt.value)
  resetIpt()
}

function resetIpt() {
  ipt.value = ''
}
</script>

<template>
  <div>
    <input v-model="ipt" type="text" class="mr-5px border border-dark-50 px-3 py-5px outline-dark-300">
    <button class="my-3 btn" @click="handleAdd">
      添加
    </button>
  </div>
  <div v-for="item, i in list" :key="i">
    {{ item }}
  </div>
</template>

<style scoped></style>
