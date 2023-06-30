<template lang="pug">
div
  TheModel(v-model="modal")
    template(#footer)
      TheButton( @clickButton="modal = false" text="close")
  TheButton( @clickButton="modal = true" text="open")
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import TheModel from './TheModal.vue'
import TheButton from './TheButton.vue';
const modal = ref<boolean>(false)
</script>