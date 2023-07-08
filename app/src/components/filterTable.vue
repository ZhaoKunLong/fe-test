<!--
  * @FileDescription: 第二题的组件
  * @Author: hejunfeng
-->
<template>
  <div class="filterTable">
    <!-- 上方输入框 -->
    <div class="input-box">
      <input placeholder="请输入内容" v-model="inputText" class="input-style" />
      <button class="btn" @click="handleFilter">筛选</button>
    </div>
    <!-- 表格 -->
    <div class="table-box">
      <table class="table">
        <!-- 表头 -->
        <tr class="table-header">
          <th
            class="table-header-item"
            v-for="h in option.thList"
            :key="h.prop"
            :style="{ width: `calc(100% / ${option.thList.length})` }"
          >{{ h.label }}</th>
        </tr>
        <!-- 每一行的数据 -->
        <tr class="table-row" v-for="r in tableList" :key="r[option.rowKey]">
          <td
            class="table-row-item"
            :style="{ width: `calc(100% / ${option.thList.length})` }"
            v-for="d in option.thList"
            :key="d.prop + r[option.rowKey]"
          >{{ r[d.prop] }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "filterTableView",
  props: {
    option: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      inputText: "", // 输入框中输入的内容
      tableList: [] // 列表中的数据
    };
  },
  mounted() {
    this.tableList = [...this.option.dataList];
  },
  methods: {
    /**
     * @description 点击筛选按钮
     * @return void
     */
    handleFilter() {
      if (!this.inputText) {
        this.tableList = [...this.option.dataList];
        return;
      }
      this.tableList = this.option.dataList.filter(
        item => item[this.option.filterKey].indexOf(this.inputText) > -1
      );
    }
  }
};
</script>

<style lang="less">
.filterTable {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  .input-box {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 32px;
    .input-style {
      width: calc(100% - 78px);
      border: 1px solid #d9dfea;
      box-sizing: border-box;
      color: #2d2f33;
      height: 32px;
      line-height: 32px;
      outline: 0;
      padding: 0 8px;
      transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .btn {
      display: inline-block;
      width: 70px;
      height: 32px;
      margin-left: 8px;
      line-height: 32px;
      cursor: pointer;
      background: #fff;
      border: 1px solid #b4bccc;
      color: #2d2f33;
      text-align: center;
      box-sizing: border-box;
      transition: 0.1s;
      border-radius: 2px;
    }
  }
  .table-box {
    width: 100%;
    height: calc(100% - 40px);
    overflow-y: auto;
    margin-top: 8px;
    border: 1px solid #b4bccc;
    border-radius: 2px;
    overflow-y: auto;
    .table {
      width: 100%;
      border-spacing: 0;
      &-header {
        width: 100%;
        height: 32px;
        border-bottom: 1px solid #dfe4ed;
        background-color: #f2f5fc;
        &-item {
          height: 100%;
          &:not(:last-child) {
            border-right: 1px solid #dfe4ed;
          }
        }
      }
      &-row {
        width: 100%;
        height: 32px;
        border-bottom: 1px solid #dfe4ed;
        &-item {
          height: 100%;
          &:not(:last-child) {
            border-right: 1px solid #dfe4ed;
          }
        }
      }
    }
  }
}
</style>
