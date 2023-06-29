<script setup lang="ts">
import { ref, computed } from "vue";
// 关键字
const searchInput = ref('');

const props = defineProps<{
    items: User[];
}>();

// 筛选数组
const filteredItems = computed(() => {
    return props.items.filter(item => {
        return item.name.toLowerCase().includes(searchInput.value)||
        item.id.toString().includes(searchInput.value) ||
        item.age.toString().includes(searchInput.value)
    });
});
</script>

<template>
    <div class="container">
        <input v-model="searchInput" placeholder="输入关键字进行筛选" class="input" />
        <table>
            <thead>
                <tr>
                    <th>序号</th>
                    <th>姓名</th>
                    <th>年龄</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in filteredItems" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.age }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

.input {
    padding: 8px;
    width: 100%;
    margin-bottom: 16px;
}
</style>
