<script setup lang="ts">
import MyButtom from '@/components/MyButtom.vue';
import MyModal from '@/components/MyModal.vue';
import { ref } from 'vue';

const isShowModal = ref(false)
const showModal = () => {
  isShowModal.value = true
}

const handleCancel = () =>{
  isShowModal.value = false
  alert('点击了取消按钮')
}

const handleConfirm = () =>{
  alert('点击了确认按钮')
}

const handleModalClick = () => {
  isShowModal.value = false
}


</script>

<template>
  <div class="content">
    <div class="input-button">
      <MyButtom @click="showModal">显示</MyButtom>
    </div>
    <MyModal :show="isShowModal" tip="这里是提示内容，也可自定义" @cancel="handleCancel" @confirm="handleConfirm" @modal-click="handleModalClick"></MyModal>
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
