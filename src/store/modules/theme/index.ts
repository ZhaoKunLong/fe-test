import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { store } from '@/store';
import { darkTheme } from 'naive-ui';
import type { GlobalTheme } from 'naive-ui';
import { useDark } from '@vueuse/core';
import { useDarkMode } from '@/composables/common/TheTheme';

/**
 * @description: 组合式 API
 * @param {*} defineStore
 * @return {*}
 */

type themeType = 'dark' | 'light' | 'auto';

const useThemeStore = defineStore('theme-store', () => {
  const theme = ref<null | GlobalTheme>(null);
  const isDark = useDark();

  function initTheme() {
    const localTheme: themeType = (localStorage.getItem('localTheme') as themeType) || 'light';
    switchTheme(localTheme);
  }

  function switchTheme(newTheme: themeType) {
    if ((newTheme == 'auto' && isDark.value) || newTheme == 'dark') {
      theme.value = darkTheme;
      useDarkMode().addDarkClass();
    } else {
      theme.value = null;
      useDarkMode().removeDarkClass;
    }
    localStorage.setItem('localTheme', newTheme);
  }

  watch(isDark, () => {
    initTheme();
  });
  return { theme, isDark, initTheme, switchTheme };
});

export default useThemeStore;
