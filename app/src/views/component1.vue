<!--
  * @FileDescription: 第一题的页面 todoList
  * @Author: hejunfeng
-->
<template>
  <div class="component1">
    <div class="title">本题使用todoList案例进行演示。<button class="link-btn" @click="toHome()">返回首页</button></div>
    <todoList class="todoList-box" />
  </div>
</template>

<script>
import todoList from '@/components/todoList.vue'
export default {
  name: 'component1View',
  components: {
    todoList
  },
  data() {
    return {
    }
  },
  methods: {
    /**
     * @description 点击返回首页
     * @return void
     */
    toHome() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less">
  .component1 {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    .title {
      margin-bottom: 20px;
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
    .todoList-box {
      width: 300px;
      height: 500px;
    }
  }
</style>
