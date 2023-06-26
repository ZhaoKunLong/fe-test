<template>
  <Page>
    <div class="top">
      <input class="input" type="text" @input="handleChange" v-model="text" placeholder="请输入内容进行筛选">
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

const text = ref<string>('')
const tableList = ref<Array<Line>>([
  { value: '欢迎' },
  { value: '检查' },
  { value: '别忘了' },
  { value: '点赞哦' },
])

const _tableList = [
  { value: '欢迎' },
  { value: '检查' },
  { value: '别忘了' },
  { value: '点赞哦' },
]

const handleChange = () => {
  if (!text.value) {
    tableList.value = _tableList
    return
  }
  tableList.value = tableList.value.filter(item => item.value.search(text.value) != -1)
}
</script>

<style scoped lang="scss">
.top {
  display: flex;
  margin-bottom: 20px;

  .input {
    margin: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: tnum;
    position: relative;
    display: inline-block;
    width: 200px;
    min-width: 0;
    padding: 4px 11px;
    color: #000000d9;
    font-size: 14px;
    line-height: 1.5715;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all .3s;
    margin-right: 20px;
  }
}
</style>