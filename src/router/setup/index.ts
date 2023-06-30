import { createRouter, createWebHistory } from 'vue-router';
import type { App } from 'vue';
import { routes } from '../routes';

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

/**
 * @description: 挂载路由
 * @param {App} app
 * @return {*}
 */
export const setupRouter = async (app: App) => {
  app.use(router);
  await router.isReady();
};
