<!--
  * @FileDescription: 第四题的页面 component4
  * @Author: hejunfeng
-->
<template>
  <div class="component4">
    <button class="link-btn" @click="toHome">返回首页</button>
    <button class="btn" @click="showModal(true)">点击展示弹框</button>
    <modal ref="modal" :visible.sync="visible" title="弹框组件">
      <template slot="content">
        这是弹框内容这是弹框内容这是弹框内容这是弹框内容这是弹框内容这是弹框内容这是弹框内容这是弹框内容这是弹框内容这是弹框内容这是弹框内容这是弹框内容这是弹框内容这是弹框内容这是弹框内容这是弹框内容这是弹框内容这是弹框内容这是弹框内容这是弹框内容这是弹框内容这是弹框内容这是弹框内容这是弹框内容
      </template>
      <template slot="footer">
        <button class="btn" @click="showModal(false)">关闭</button>
      </template>
    </modal>
  </div>
</template>

<script>
import modal from "@/components/modal.vue";
export default {
  name: "component4View",
  components: {
    modal
  },
  data() {
    return {
      // 传入轮播图组件的图片
      visible: false
    };
  },
  methods: {
    /**
     * @description 点击返回首页
     * @return void
     */
    toHome() {
      this.$router.go(-1);
    },
    /**
     * @description 控制弹框显隐
     * @param show true:显示 false: 隐藏
     * @return void
     */
    showModal(show) {
      this.visible = show
    }
  }
};
</script>

<style lang="less">
.component4 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
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
  .btn {
    display: inline-block;
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
    padding: 0 16px;
  }
  .modal-box {
    width: 500px;
    height: 300px;
  }
}
</style>
