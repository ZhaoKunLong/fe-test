<template>
  <div class="container">
    <h1 class="title">Input Box</h1>
    <form @submit.prevent="addItem">
      <input
        class="input"
        type="text"
        v-model="formData"
        placeholder="Enter an item"
      />
      <button class="button">Add Item</button>
    </form>
    <ul class="list">
      <li v-for="(item, index) in itemList" :key="index" class="list-item">
        <span>{{ index + 1 }}.</span>{{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const itemList = ref([]);
const formData = ref('');

const addItem = () => {
  if (formData.value === '') {
    alert('Enter an item');
  } else {
    itemList.value.push(formData.value);
    formData.value = '';
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
  border: 1px solid green;
}

.input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 10px;
  margin-top: 10px;
}

.button {
  padding: 8px 16px;
  background: blue;

  color: #fff;
  border: none;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
  transition: ease-in-out 0.5s;
}

.button:hover {
  background: rgb(9, 9, 142);
}

.list {
  list-style-type: none;
  padding: 10px 0;
}

.list span {
  margin-right: 6px;
}

.list-item {
  margin-bottom: 5px;
}
</style>
