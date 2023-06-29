<template lang="pug">
div
  NCard
    NSpace      
      NButton(@click="changeTopic('topicOne')") 题一
      NButton(@click="changeTopic('topicTwo')") 题二
      NButton(@click="changeTopic('topicThree')") 题三
      NButton(@click="changeTopic('topicFour')") 题四
      NButton(@click="switchTheme('dark')") dark
      NButton(@click="switchTheme('light')") light
      NButton(@click="switchTheme('auto')") 跟随系统
    component.content(:is="currentComponent")
</template>
<script lang="ts" setup>
import { onMounted, shallowRef } from 'vue'
import { NCard, NSpace, NButton } from 'naive-ui';
import { useThemeStore } from '@/store'
const { switchTheme } = useThemeStore()
import type { Component } from 'vue';

import TopicOne from './components/TopicOne.vue';
import TopicTwo from './components/TopicTwo.vue'
import TopicThree from './components/TopicThree.vue'
import TopicFour from './components/TopicFour.vue'

const currentComponent = shallowRef<Component>(TopicOne);

interface topicInfo {
  [key: string]: Component
}

const changeTopic = (name: string) => {
  const components: topicInfo = {
    topicOne: TopicOne, topicTwo: TopicTwo, topicThree: TopicThree, topicFour: TopicFour,
  }
  currentComponent.value = components[name]!
}

onMounted(() => {

}) 
</script>
<style lang="scss">
.content {
  min-height: 600px;
  min-width: 600px;
}
</style>