<template>
  <div class="continer card">
    <div class="header flex a-center">
      <input v-model.trim="content" type="text" @keyup.enter="sure" />
      <button class="btn" @click="sure">搜索</button>
    </div>
    <div class="content">
      <table>
        <thead>
          <tr>
            <th style="width: 80px; flex: none"></th>
            <th>姓名</th>
            <th>年龄</th>
            <th>日期</th>
            <th>地址</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in nowTableDate" :key="index">
            <td style="width: 80px; flex: none">{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.address }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
interface Table {
  name: string
  age: number
  address: string
  date: string
}
const sure = () => {
  nowTableDate.value = tableData.filter((item) => JSON.stringify(item).includes(content.value))
}
const content = ref<string>('')
const tableData: Table[] = [
  {
    name: 'John Brown',
    age: 18,
    address: 'New York No. 1 Lake Park',
    date: '2016-10-03',
  },
  {
    name: 'Jim Green',
    age: 24,
    address: 'London No. 1 Lake Park',
    date: '2016-10-01',
  },
  {
    name: 'Joe Black',
    age: 30,
    address: 'Sydney No. 1 Lake Park',
    date: '2016-10-02',
  },
  {
    name: 'Jon Snow',
    age: 26,
    address: 'Ottawa No. 2 Lake Park',
    date: '2016-10-04',
  },
]
const nowTableDate = ref<Table[]>(tableData)
</script>
<style scoped lang="less">
table {
  vertical-align: auto;
  width: 100%;
  border: 1px solid #e8e8e8;
  border-radius: 3px;
  transition: 0.2s;
  box-sizing: border-box;
}
thead th {
  padding: 10px 0;
  background-color: #e8e8e8;
}
tr {
  display: flex;
  th,
  td {
    flex: 1;
    padding: 5px 2px;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 1px solid #dfdfdf;
  }
}
</style>
