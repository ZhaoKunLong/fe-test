/*
 * @Author: HS
 * @Email: Xiao.hxj@qq.com
 * @Date: 2023-02-09 18:16:11
 * @LastEditTime: 2023-06-27 16:54:46
 * @FilePath: \demo-hs\vite.config.ts
 * @Description: 文件说明
 * Copyright (c) 2023 by HS, All Rights Reserved.
 */
import { fileURLToPath, URL } from 'node:url';
import { plugins } from './build';

import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins,
  resolve: {
    alias: {
      // import.meta.url 返回模块的绝对的 `file:` URL。
      // url模块中fileURLToPath()函数，返回完全解析的特定于平台的 Node.js 文件路径
      // path模块中dirname()函数，返回路径的目录路径
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 8090,
    host: '0.0.0.0',
    open: true,
  },
});
