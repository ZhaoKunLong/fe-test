<script setup lang="ts">
import { ref } from 'vue'
import MyButtom from '@/components/MyButtom.vue'
import MyInput from '@/components/MyInput.vue'

// defineProps<{
//   msg: string
// }>()
let inputTxt = ref<string>('')
let itemList = ref<String[]>([])
const addItem = () => {
  if (inputTxt.value) {
    itemList.value.push(inputTxt.value)
    inputTxt.value = ''
  }
}
</script>

<template>
  <div class="content">
    <div class="input-button">
      <MyInput
        placeholder="请输入内容"
        type="text"
        v-model="inputTxt"
        class="my-input"
      ></MyInput>
      <MyButtom @click="addItem">添加</MyButtom>
    </div>
    <div>
      <ul>
        <li v-for="(item, index) in itemList" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
