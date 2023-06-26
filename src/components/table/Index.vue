<template>
  <div class="page">
    <table class="table-box">
      <tr>
        <th>序号</th>
        <th>输入框的值</th>
      </tr>
      <tr v-for="(item, index) in list">
        <td>{{ index }}</td>
        <td>{{ item.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts" setup>
import Line from '@/type/table.ts'

defineProps({
  list: Array<Line>,
});

</script>

<style scoped lang="scss">
.page {
  .table-box {
    width: 100%;

  }

  table,
  td,
  th {
    padding: 10px;
    border: 1px solid #f0f0f0;
    border-collapse: collapse;
    font-size: 14px;
  }

  th {
    background-color: #fafafa;
    color: #000000d9;
    font-weight: 400;

  }

  td {
    text-align: center;
    color: rgba(31, 29, 29, 0.9);
  }



}
</style>