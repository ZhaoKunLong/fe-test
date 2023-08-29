<script setup lang="ts">
defineProps<{
  placeholder: string
  modelValue: string
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', msg: string): void
  (e: 'change1', msg: string): void
}>()

const change = (e: Event) => {
  emits('update:modelValue', (e.target as HTMLInputElement).value)
  emits('change1', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <input
    :placeholder="placeholder"
    type="text"
    :value="modelValue"
    class="my-input"
    @input="change"
  />
</template>

<style scoped lang="scss">
.my-input {
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
}
</style>
