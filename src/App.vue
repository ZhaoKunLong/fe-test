<script setup lang="ts">
// import { computed } from 'vue'
// import HelloWorld from './components/HelloWorld.vue';
import { useAppStore, useThemeStore } from '@/store'
// const appStore = useAppStore()
const themeStore = useThemeStore()
// const name = computed(() => themeStore.name)
// console.log(appStore);

import { NConfigProvider } from 'naive-ui';

</script>

<template lang="pug">
n-config-provider(:theme="themeStore.theme")
  router-view
</template>

