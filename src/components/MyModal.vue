<script setup lang="ts">
import MyButtom from '@/components/MyButtom.vue';
import { computed, shallowReactive } from 'vue';

const props = defineProps({
  /**是否显示 */
  show:{
    type: Boolean,
    required: false,
    default: () => {
      return false
    }
  },
  /**标题文本 */
  title:{
    type: String,
    required: false,
    default: () => {
      return '提示'
    }
  },
  /**提示内容 */
  tip:{
    type: String,
    required: false,
    default: () => {
      return '这是提示内容'
    }
  }
  ,
  /**是否显示关闭按钮 */
  showClose:{
    type: Boolean,
    required: false,
    default: () => {
      return true
    }
  }
  ,
  /**是否显示取消按钮 */
  showCancel:{
    type: Boolean,
    required: false,
    default: () => {
      return true
    }
  }
  ,
  /**是否显示确认按钮 */
  showConfirm:{
    type: Boolean,
    required: false,
    default: () => {
      return true
    }
  }
})

const emit = defineEmits<{
  (e:'cancel'): void,
  (e:'confirm'): void,
  (e:'modalClick'): void
}>()

/**触发返回按钮监听事件 */
const cancel = () => {
  emit('cancel')
}

/**触发确认按钮监听事件 */
const confirm = () => {
  emit('confirm')
}


const modalClick = () => {
  emit('modalClick')
}




</script>

<template>
  <div class="content">
    <div class="my-modal" v-if="show" @click.self="modalClick">
      <div class="my-modal-content">
        <div class="my-modal-head">
          <slot name="head">
            <div>{{title}}</div>
          </slot>
        </div>
        <div class="my-modal-center">
          <slot name="center">
            <div>{{tip}}</div>
          </slot>
        </div>
        <div class="my-modal-bottom">
          <slot name="bottom">
            <div>
              <MyButtom v-if="showConfirm" @click="confirm">确认</MyButtom>
              <MyButtom v-if="showCancel" @click="cancel">取消</MyButtom>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content{
  .my-modal{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba($color: #000000, $alpha: 0.5);
    overflow: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 5;
    .my-modal-content{
      background-color: #ffffff;
      border-radius: 4px;
      padding: 10px;
      .my-modal-head {
        min-width: 200px;
        display: flex;
        justify-content: center;
      }
      .my-modal-center{
        min-width: 200px;
        display: flex;
        justify-content: center;
        margin-top: 20px;
      }
      .my-modal-bottom{
        min-width: 200px;
        display: flex;
        justify-content: center;
        margin-top: 20px;
      }
      
    }
  }
}
</style>
