<!--
  * @FileDescription: 第四题的组件
  * @Author: hejunfeng
-->
<template>
  <div class="modal" v-show="visible" @click.self="closeModal">
    <div class="modal-box">
      <div class="modal-box-header">
        <div class="title">{{title}}</div>
        <div class="close-btn" @click="closeModal">x</div>
      </div>
      <div class="modal-box-content">
        <slot name="content" />
      </div>
      <div class="modal-box-footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modalView",
  props: {
    // modal显隐
    visible: {
      type: Boolean,
      default: false
    },
    // 标题
    title: {
      type: String,
      default: "标题"
    }
  },
  methods: {
    /**
     * @description 切换图片方法
     * @param index 目标图片的下标
     * @return void
     */
    closeModal() {
      this.$emit("update:visible", false);
    }
  }
};
</script>

<style lang="less">
.modal {
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: #00000099;
  &-box {
    width: 500px;
    height: 300px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &-header {
      height: 32px;
      width: 100%;
      border-bottom: 1px solid #dfe4ed;
      padding: 0 10px;
      line-height: 32px;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      .title {
      }
      .close-btn {
        color: #999;
        cursor: pointer;
      }
    }
    &-content {
      width: calc(100% - 20px);
      height: calc(100% - 92px);
      padding: 10px;
      overflow-y: auto;
    }
    &-footer {
      width: 100%;
      height: 40px;
      padding: 0 10px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      border-top: 1px solid #dfe4ed;
      box-sizing: border-box;
    }
  }
}
</style>
