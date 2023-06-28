<script lang='ts' setup>
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
  <div class="flex gap-10 p-10">
    <div>
      组件一(根据输入的添加到列表末尾)
      <BtnIptList />
    </div>
    <div>
      组件二(根据名称筛选)
      <BtnTable />
    </div>
    <div>
      组件三(轮播图)
      <BtnTable />
    </div>
    <div>
      组件四(弹出框展示)
      <div>
        <button class="btn" @click="visible = !visible">
          展示
        </button>
      </div>
      <Model v-model:visible="visible">
        <template #header>
          头部
        </template>
        内容
        <template #footer>
          <button class="float-right btn" @click="visible = false">
            Close
          </button>
        </template>
      </Model>
    </div>
  </div>
</template>

<style scoped></style>
