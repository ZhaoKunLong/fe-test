<!--
  * @FileDescription: 首页
  * @Author: hejunfeng
-->
<template>
  <div class="home">
    <div class="title-item" v-for="item in titleList" :key="item.link" @click="toLink(item.link)">{{item.title}}</div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      // 存放标的数组，包含标题文本和跳转路由地址
      titleList: [
        {
          title: '请实现一个Vue组件，包含一个输入框和一个按钮，点击按钮后将输入框中的内容添加到一个列表中。',
          link: '/component1'
        },
        {
          title: '请实现一个Vue组件，包含一个输入框和一个表格，输入框中输入关键字后，表格中的数据会根据关键字进行筛选。',
          link: '/component2'
        },
        {
          title: '请实现一个Vue组件，包含一个轮播图和一个分页器，轮播图中有多张图片，分页器可以切换轮播图中的图片。',
          link: '/component3'
        },
        {
          title: '请实现一个Vue组件，包含一个按钮和一个modal弹框， 点击按钮出现modal框，点击其他部分modal框消失。',
          link: '/component4'
        }
      ]
    }
  },
  methods: {
    /**
     * @description 点击标题跳转对应组件方法
     * @param {String} link 跳转的路由地址
     * @return void
     */
    toLink(link) {
      this.$router.push(link)
    }
  }
}
</script>

<style lang="less">
  .home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    .title-item {
      height: 40px;
      line-height: 40px;
      color: #2985f7;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
