<template>
  <div class="container">
    <div class="row">
        <input v-model="searchTerm" type="text" class="form-control" placeholder="搜索名称" />
    </div>
    <div >
      
      <table class="table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>名称</th>
            <th>年龄</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in filteredItems" :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
          </tr>
        </tbody>
      </table>
     
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
      items: [
        { id: 1, name: "张三", age: 25 },
        { id: 2, name: "李四", age: 30 },
        { id: 3, name: "王五", age: 35 },
       
      ],
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) =>
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
};
</script>

<style>
.container {
  margin-top: 50px;
}

.form-control {
  border: 2px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  padding: 10px;
  margin-top: 10px;
}

.table-striped {
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
  margin: 3% auto;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  color: #333;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

th,
td {
  padding: 12px 15px;
  border: 1px solid #ccc;
}

th {
  background-color: #f9f9f9;
  font-weight: 600;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

</style>