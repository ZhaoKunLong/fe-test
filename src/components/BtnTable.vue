<script lang='ts' setup>
import { computed, reactive, ref } from 'vue'

const ipt = ref('')
const labels = [
  '名字',
  '年龄',
  '性别',
]
const list = reactive([{
  name: '张三',
  age: 12,
  male: '男',
},
{
  name: '李四',
  age: 17,
  male: '女',
},
{
  name: '李五',
  age: 17,
  male: '女',
},
])

const computedList = computed(() => {
  return list.filter((item) => {
    return item.name.includes(ipt.value)
  })
})

function hanldeFilterFn() {
}
</script>

<template>
  <div>
    <div>
      <input v-model="ipt" type="text" class="mr-5px border border-dark-50 px-3 py-5px outline-dark-300">
      <button class="transition-all btn active:scale-96" @click="hanldeFilterFn">
        筛选
      </button>
      <table>
        <thead class="border-b border-#e5e5e5">
          <th v-for="item, i in labels" :key="i" class="min-w-20">
            {{ item }}
          </th>
        </thead>
        <tbody>
          <tr v-for="item, i in computedList" :key="i" class="border-b border-#e5e5e5">
            <td v-for="item2, i2 of item" :key="i2" class="text-center">
              {{ item2 }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
