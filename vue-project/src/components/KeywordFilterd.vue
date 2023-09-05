<script setup>
import { ref, computed } from 'vue'

const keyword = ref('') // 输入框中的关键字
const dataList = ref([{ keyword: 'John' }, { keyword: 'Alice' }, { keyword: 'Bob' }])

const filteredData = computed(() => {
  const keywordValue = keyword.value.toLowerCase()
  return dataList.value.filter((item) => {
    return item.keyword.toLowerCase().includes(keywordValue)
  })
})
</script>

<template>
  <div>
    <input class="border-2" v-model="keyword" placeholder="输入关键字" />
    <table class="border-2">
      <thead>
        <tr>
          <th>keyword</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredData" :key="item.id">
          <td>{{ item.keyword }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
