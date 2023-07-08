<!--
  * @FileDescription: 第二题的页面
  * @Author: hejunfeng
-->
<template>
  <div class="component2">
    <div class="title">本题使用名单查询案例进行演示。<button class="link-btn" @click="toHome()">返回首页</button></div>
    <filterTable class="filterTable-box" :option="option" />
  </div>
</template>

<script>
import filterTable from '@/components/filterTable.vue'
export default {
  name: 'component2View',
  components: {
    filterTable
  },
  data() {
    return {
        option: { // 传入表格的参数
            rowKey: 'id', // 表格数据的key
            filterKey: 'name', // 筛选的数据项
            dataList: [{ // 表格的数据
                name: '张雨绮',
                age: 23,
                id: 1
            },
            {
                name: '李现',
                age: 29,
                id: 2
            },
            {
                name: '王祖蓝',
                age: 25,
                id: 3
            },
            {
                name: '刘德华',
                age: 50,
                id: 4
            },
            {
                name: '宋丹丹',
                age: 38,
                id: 5
            },
            {
                name: '张卫健',
                age: 30,
                id: 6
            },
            {
                name: '张靓颖',
                age: 25,
                id: 7
            },
            {
                name: '李佳航',
                age: 40,
                id: 8
            },
            {
                name: '蔡徐坤',
                age: 20,
                id: 9
            },
            {
                name: '刘诗诗',
                age: 30,
                id: 10
            },
            {
                name: '杨幂',
                age: 20,
                id: 11
            }],
            thList: [{ // 表头数据
                label: '姓名',
                prop: 'name'
            },
            {
                label: '年龄',
                prop: 'age'
            }]
        }
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
  .component2 {
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
    .filterTable-box {
      width: 300px;
      height: 400px;
    }
  }
</style>
