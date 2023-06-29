<script setup lang="ts">
import { ref } from 'vue';

const inputText = ref('');
const list = ref<string[]>([]);

const addItem = () => {
    if(inputText.value.trim() === '') return
    list.value.push(inputText.value);
    inputText.value = '';
};
</script>

<template>
    <div class="container">
        <input v-model="inputText" type="text" placeholder="输入内容" class="input" />
        <button class="button" @click="addItem">添加</button>
        <ul class="list">
            <li v-for="item in list" :key="item" class="list-item">{{ item }}</li>
        </ul>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
}

.input {
    padding: 8px;
    width: 300px;
    margin-right: 8px;
}

.list {
    list-style: none;
    padding: 0;
}

.list-item {
    border-bottom: 1px solid #ddd;
    padding: 8px;
}
</style>
