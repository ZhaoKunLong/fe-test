<template>
  <div>
    <input v-model="newItem" type="text" placeholder="请添加" />
    <button @click="addItem">添加</button>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: "",
      items: [],
    };
  },
  methods: {
    addItem() {
      if (this.newItem !== "") {
        this.items.push(this.newItem);
        this.newItem = "";
      }
    },
  },
};
</script>
