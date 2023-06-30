<template lang="pug">
div.modal-backdrop(v-if="modelValue" @click="close")
  div(@click.stop).modal
    div.modal-header
      slot(name="header") 我是头咯
    div.modal-body 
      slot
    div.modal-footer()
      slot(name="footer") 我是脚咯
</template>
<script lang="ts" setup>
const props = defineProps({
  modelValue: Boolean
})
const emit = defineEmits<{
  'update:modelValue': [modelValue: boolean]
}>()
const close = (e: Event) => {
  e.preventDefault();
  emit('update:modelValue', false)
}
</script>

<style lang="scss">
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: #fff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  width: 700px;
}

.modal-header {
  border-bottom: 1px solid #eee;
  color: #313131;
  justify-content: space-between;
  padding: 15px;
  display: flex;
}

.modal-footer {
  border-top: 1px solid #eee;
  justify-content: flex-end;
  padding: 15px;
  display: flex;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
  min-height: 20px;
}
</style>