/*
 * @Author: HS
 * @Email: Xiao.hxj@qq.com
 * @Date: 2023-02-09 18:16:11
 * @LastEditTime: 2023-02-09 19:19:40
 * @FilePath: \demo-hs\env.d.ts
 * @Description: 为 import.meta.env 提供类型定义: https://cn.vitejs.dev/guide/env-and-mode.html#env-files
 * Copyright (c) 2023 by HS, All Rights Reserved.
 */
/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
