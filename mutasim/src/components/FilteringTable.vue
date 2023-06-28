<template>
  <div class="container">
    <input
      class="input"
      type="text"
      v-model="keyword"
      placeholder="Enter keywords"
    />
    <table class="table">
      <thead>
        <tr>
          <th>Country</th>
          <th>Region</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredItems" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.region }}</td>
        </tr>
        <tr v-if="filteredItems.length === 0">
          <td colspan="2" class="no-results">No results found</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const keyword = ref('');
const items = ref([
  { name: 'Bangladesh', region: 'Asia' },
  { name: 'China', region: 'Asia' },
  { name: 'United States', region: 'North America' },
  { name: 'Canada', region: 'North America' },
  { name: 'Germany', region: 'Europe' },
  { name: 'Australia', region: 'Oceania' },
  { name: 'Brazil', region: 'South America' }
]);

const filteredItems = computed(() => {
  const searchTerm = keyword.value.toLowerCase().trim();
  if (searchTerm === '') {
    return items.value;
  } else {
    return items.value.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchTerm) ||
        item.region.toLowerCase().includes(searchTerm)
      );
    });
  }
});
</script>

<style scoped>
.container {
  width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 10px;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 8px;
  border: 1px solid gray;
}

.table th {
  font-weight: bold;
  text-align: left;
}

.no-results {
  text-align: center;
  color: #888;
}
</style>
