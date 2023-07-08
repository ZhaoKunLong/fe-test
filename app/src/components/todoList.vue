<!--
  * @FileDescription: 第一题的组件
  * @Author: hejunfeng
-->
<template>
  <div class="todoList">
    <!-- 上方输入框 -->
    <div class="input-box">
      <input placeholder="请输入内容" v-model="inputText" class="input-style" />
      <button class="btn" @click="handleAdd">添加</button>
    </div>
    <div class="list-box">
      <!-- 列表 -->
      <div class="list-box-item" v-for="(item, index) in dataList" :key="item.key">
        <div class="left-text">{{item.text}}</div>
        <div class="right-btn">
          <button class="link-btn" @click="handleDel(index)">删除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "todoListView",
  data() {
    return {
      inputText: "", // 输入框中输入的内容
      // 列表中的数据
      dataList: []
    };
  },
  methods: {
    /**
     * @description 点击添加按钮
     * @return void
     */
    handleAdd() {
      this.dataList.push({
        text: this.inputText,
        key: Date.parse(new Date())
      });
      this.inputText = "";
    },
    /**
     * @description 点击删除按钮
     * @return void
     */
    handleDel(index) {
      this.dataList.splice(index, 1);
    }
  }
};
</script>

<style lang="less">
.todoList {
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
  .list-box {
    width: 100%;
    height: calc(100% - 40px);
    margin-top: 8px;
    border: 1px solid #b4bccc;
    border-radius: 2px;
    overflow-y: auto;
    &-item {
      display: flex;
      justify-content: space-between;
      height: 32px;
      line-height: 32px;
      padding: 0 4px;
      width: calc(100% - 8px);
      &:not(last-child) {
        border-bottom: 1px solid #b4bccc;
      }
      .left-text {
        width: 80%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: left;
      }
      .right-btn {
        .link-btn {
          color: #2985f7;
          font-size: 14px;
          border: 0;
          background-color: transparent;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
