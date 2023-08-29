<script setup lang="ts"></script>

<template>
  <button class="my-button">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.my-button {
  height: 40px;
  line-height: 40px;
  margin-left: 10px;
  background-color: #409eff;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  border: solid 0px #409eff;
  border-radius: 4px;
  padding: 0 14px;
}
.my-button:focus,
.my-button:hover {
  background: #66b1ff;
  border-color: #66b1ff;
}
.my-button:active {
  background: #3a8ee6;
}
</style>
