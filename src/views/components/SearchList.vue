<template>
  <div>
    <h4>
      2、请实现一个Vue组件，包含一个输入框和一个表格，输入框中输入关键字后，表格中的数据会根据关键字进行筛选.
    </h4>
    <input type="text" placeholder="查询名称" v-model="searchValue" />
    <ul>
      <li v-for="item in filterList" :key="item.id">{{item.id}}--{{item.name}}--{{item.age}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Avue3SearchList",

  data() {
    return {
      searchValue: "",
      List: [
        { id: 1, name: "小明", age: "12" },
        { id: 2, name: "小红", age: "10" },
        { id: 3, name: "小黑", age: "14" },
        { id: 4, name: "如意", age: "20" },
        { id: 5, name: "吉祥", age: "18" },
      ],
    };
  },

  mounted() {},

  methods: {},
  computed: {
    filterList() {
      // 去出相关地数据
      const { searchValue, List} = this;
      // 过滤后需要显示地数组
      let flist;
      // 对list进行过滤
      flist = List.filter((item) => item.name.indexOf(searchValue) !== -1);
      return flist
    },
  },
};
</script>

<style lang="scss" scoped>
</style>