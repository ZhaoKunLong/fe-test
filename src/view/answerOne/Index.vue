<template>
  <Page>
    <div class="top">
      <input class="input" type="text" v-model="text" placeholder="请输入内容进行添加">
      <button class="button" @click="addtableLine()">添加</button>
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
const tableList = ref<Array<Line>>([{ value: '测试' }])
const addtableLine = () => {
  if (!text.value) return
  tableList.value.push({ value: text.value })
}
</script>

<style scoped lang="scss">
.top {
  display: flex;
  margin-bottom: 20px;

  .button {
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

  .input {
    margin: 0;
    width: 200px;
    height: 32px;
    padding: 4px 11px;
    color: #000000d9;
    font-size: 14px;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    margin-right: 20px;
  }
}
</style>