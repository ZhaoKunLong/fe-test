<script setup lang="ts">
import { onMounted, ref } from 'vue';
import MyInput from '@/components/MyInput.vue';
import type { User } from '@/types/home'


let inputTxt = ref<string>('')
let itemList = ref<User[]>([
  {
    id: 1,
    name: '张三',
    sex: '男',
    age: 10,
    className: '一班'
  },
  {
    id: 2,
    name: '李四',
    sex: '男',
    age: 11,
    className: '一班'
  },
  {
    id: 3,
    name: '王好好',
    sex: '男',
    age: 12,
    className: '一班'
  },
  {
    id: 4,
    name: '李梅',
    sex: '女',
    age: 12,
    className: '一班'
  }
])


const visbaleUserList = ref<User[]>([])
onMounted(()=>{
  visbaleUserList.value = itemList.value
})
//封装防抖函数
const debounce = (fn:Function,time:number)=>{
  let timeout:number = 0 ;
  if(timeout) clearTimeout(timeout);
  timeout = setTimeout(() => {
      fn();
  }, time);
}

const hadleChange = (msg:string)=>{
  debounce(()=>{
    if(msg.trim() !== ''){
      visbaleUserList.value = itemList.value.filter( item => item.name.indexOf(inputTxt.value) != -1)
    }else{
      visbaleUserList.value =  itemList.value
    }
  },1000)
}

</script>

<template>
  <div class="content">
    <div class="input-button">
      <MyInput placeholder="请输入姓名过滤" type="text" v-model="inputTxt" class="my-input" @change1="hadleChange"></MyInput>
    </div>
    <div>
      <table border="1">
        <caption>用户信息</caption>
        <tr>
          <th>姓名</th>
          <th>性别</th>
          <th>年龄</th>
          <th>班级</th>
        </tr>
        <tr v-for="item in visbaleUserList" :key="item.id.toString()">
          <td>{{item.name}}</td>
          <td>{{item.sex}}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.className }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
