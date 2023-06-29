import { createApp } from 'vue';
import { setupStore } from './store';
import { setupRouter } from './router';
import App from './App.vue';
import { setupAssets } from './assets';

(async function () {
  const app = createApp(App);
  await Promise.all([setupAssets(), setupStore(app), setupRouter(app)]);
  app.mount('#app');
})();
