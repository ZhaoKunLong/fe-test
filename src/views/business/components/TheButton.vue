<template lang="pug">
button.button_(@click="click") {{text}}
</template>
<script setup lang="ts">

interface Props {
  text?: string
}
const props = withDefaults(defineProps<Props>(), {
  text: '添加'
})

const emits = defineEmits<{
  clickButton: [value: void]
}>()

const click = () => emits('clickButton')
</script>
<style lang="scss">
.button_ {
  position: relative;
  background-color: #2a8b85;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  color: #FFFFFF;
  padding: 10px;
  width: 200px;
  text-align: center;
  -webkit-transition-duration: 0.4s;
  /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
}

.button_:after {
  content: "";
  background: #75f0bf;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px !important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s
}

.button_:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s
}
</style>