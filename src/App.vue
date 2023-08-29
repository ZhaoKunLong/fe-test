<script setup lang="ts">
import MyButtom from '@/components/MyButtom.vue';
import InputAndButton from './views/InputAndButton.vue';
import InputAndTable from './views/InputAndTable.vue';
import SwipperPage from './views/SwipperPage.vue';
import ButtonAndModal from './views/ButtonAndModal.vue';
</script>

<template>
  <div>
    <div>
      <div style="margin-bottom: 10px;">测试组件一</div>
      <InputAndButton></InputAndButton>
    </div>
    <div style="margin-top: 20px;">
      <div style="margin-bottom: 10px;">测试组件二</div>
      <InputAndTable></InputAndTable>
    </div>
    <div style="margin-top: 20px;height: 400px;">
      <div style="margin-bottom: 10px;">测试组件三</div>
      <SwipperPage></SwipperPage>
    </div>
    <div style="margin-top: 100px; margin-bottom: 20px;">
      <div style="margin-bottom: 10px;">测试组件四</div>
      <ButtonAndModal></ButtonAndModal>
    </div>
  </div>
</template>

<style scoped></style>
