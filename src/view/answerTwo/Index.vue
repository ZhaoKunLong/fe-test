<template>
  <Page>
    <div class="top">
      <input class="input" type="text" @input="handleInput" v-model="text" placeholder="请输入内容进行筛选">
    </div>
    <div class="content">
      <Table :list="tableList"></Table>
    </div>
  </Page>
</template>

<script lang="ts" setup>
import Page from '@/components/page/Index.vue'
import Table from '@/components/table/Index.vue'
import Line from '@/type/table.ts'
import { ref } from 'vue'
// 输入框的值
const text = ref<string>('')
// 表格绑定数组
const tableList = ref<Array<Line>>([
  { value: '欢迎' },
  { value: '检查' },
  { value: '别忘了' },
  { value: '点赞哦' },
])
// 原始数组
const _tableList = [
  { value: '欢迎' },
  { value: '检查' },
  { value: '别忘了' },
  { value: '点赞哦' },
]
// 输入事件
const handleInput = () => {
  if (!text.value) {
    tableList.value = _tableList
    return
  }
  tableList.value = _tableList.filter(item => item.value.search(text.value.trim()) != -1)
}
</script>

<style scoped lang="scss">
.top {
  display: flex;
  margin-bottom: 20px;

  .input {
    margin: 0;
    width: 200px;
    padding: 4px 11px;
    color: #000000d9;
    font-size: 14px;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    margin-right: 20px;
    height: 32px;
  }
}
</style>