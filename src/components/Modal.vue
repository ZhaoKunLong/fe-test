<template>
  <transition name="slide-fade">
    <div v-show="showModal" class="modal" @click="clickMask">
      <div class="modal-container" @click.stop="">
        <div v-if="showCloseIcon" class="modal-container-close" @click="cancel">×</div>
        <slot name="header">
          <div class="modal-container-header">
            <div class="modal-container-header-title">{{ title }}</div>
          </div>
        </slot>
        <div class="modal-container-body">
          <slot> </slot>
        </div>
        <slot name="footer">
          <div class="modal-container-footer">
            <button class="cancel" @click="cancel">取消</button>
            <button @click="sure">确定</button>
          </div>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '标题',
  },
  showCloseIcon: {
    type: Boolean,
    default: true,
  },
})
const emit = defineEmits(['sure', 'update:visible'])
const showModal = computed({
  get: () => props.visible,
  set: (value) => {
    emit('update:visible', value)
  },
})
// 取消
const cancel = () => {
  showModal.value = false
}
// 确定
const sure = () => {
  emit('sure')
}
// 点击蒙板
const clickMask = () => {
  cancel()
}
</script>
<style scoped lang="less">
.modal {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.3s;
  z-index: 100;
  &-container {
    background-color: white;
    padding: 15px;
    border-radius: 6px;
    min-width: 400px;
    position: relative;
    &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 40px;
      padding-right: 50px;
      box-sizing: border-box;
      &-title {
        font-size: 24px;
        font-weight: 500;
        flex: 1;
      }
    }
    &-close {
      position: absolute;
      right: 8px;
      top: 8px;
      width: 30px;
      height: 30px;
      font-size: 30px;
      font-weight: 500;
      line-height: 30px;
      text-align: center;
      cursor: pointer;
      color: darkred;
    }
    &-body {
      padding: 20px;
    }
    &-footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 40px;
      .cancel {
        background-color: transparent;
        color: #333;
      }
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
