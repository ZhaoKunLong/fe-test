<template>
  <div>
    <input class="searchInput" v-model="newItem" type="text" placeholder="请添加" />
    <button class="searchButton" @click="addItem">添加</button>
    <ul class="searchUl">
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

<style>

.searchButton {
  background-color: #03A9F4;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
}

.searchInput{
  border: 2px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  padding: 10px;
}

.searchUl{
  border: 2px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  padding: 10px;
  margin-top: 10px;
}

.searchUl li{
  margin: 10px 0;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  list-style: none;
}

.container {
  margin-top: 50px;
}
</style>