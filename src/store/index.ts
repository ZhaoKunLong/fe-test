import type { App } from 'vue';
import { createPinia } from 'pinia';
import { useThemeStore } from './modules';

export const store = createPinia();

export function setupStore(app: App) {
  app.use(store);
  // 初始化主题
  useThemeStore().initTheme();
}

export * from './modules';
