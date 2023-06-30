/**
 * @description: 路由懒加载
 * @return {*}
 */
import type { Component } from 'vue';
export const TheLayout = (): Component => import('./layout.vue');
