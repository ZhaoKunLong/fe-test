<template>
  <div class="todoList card">
    <div class="header flex a-center">
      <input v-model.trim="content" type="text" @keyup.enter="addList" />
      <button class="btn" :disabled="content === ''" @click="addList">添加</button>
    </div>
    <ul v-if="list.length" class="content">
      <li v-for="(item, index) in list" :key="item.id" class="content-item">{{ index + 1 }}.{{ item.content }}</li>
    </ul>
    <div v-else class="no-content">暂无数据</div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
interface List {
  id: number
  content: string
}
const list = reactive<List[]>([
  {
    id: 1,
    content: '继承',
  },
  {
    id: 2,
    content: '封装',
  },
])
// 添加
const addList = () => {
  if (content.value) {
    list.push({
      id: list.length,
      content: content.value,
    })
    content.value = ''
  }
}
const content = ref('')
</script>
<style scoped lang="less"></style>
