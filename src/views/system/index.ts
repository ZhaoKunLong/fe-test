/**
 * @description: 路由懒加载
 * @return {*}
 */
import type { Component } from 'vue';
export const TheLogin = (): Component => import('./login/index.vue');
export const NotPermission = (): Component => import('./exception/403.vue');
export const NotFound = (): Component => import('./exception/404.vue');
export const TheError = (): Component => import('./exception/500.vue');
