<template>
  <teleport to="body">
    <div class="modal-overlay" @click="closeModal" v-if="show">
      <div class="modal">
        <div class="modal-header">
          <slot name="title">{{ title }}</slot>
        </div>
        <div class="modal-content">
          <slot name="content">{{ message }}</slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">底部</slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
// 支持简单的组件传值方式，也支持slot自定义
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'title'
  },
  message: {
    type: String,
    default: 'content'
  },
})
// 通知父组件修改值，父组件支持用v-model:show绑定
const emits = defineEmits(['update:show']);
// 关闭弹窗
const closeModal = () => {
  emits('update:show', !props.show)
}

</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);

  .modal {
    position: absolute;
    z-index: 9999999;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    // border-radius: 4px;
    // padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    min-width: 40%;

    .modal-header {
      padding: 12px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #000000d9;
      background: #fff;
      border-bottom: 1px solid #f0f0f0;
      border-radius: 2px 2px 0 0;
    }

    .modal-content {
      padding: 24px;
      font-size: 14px;
      // line-height: 1.5715;
      // word-wrap: break-word;
    }

    .modal-footer {
      padding: 12px 16px;
      text-align: right;
      background: transparent;
      border-top: 1px solid #f0f0f0;
      border-radius: 0 0 2px 2px;
    }
  }
}
</style>