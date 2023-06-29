import type { RouteRecordRaw } from 'vue-router';

/**
 * https://zhuanlan.zhihu.com/p/356662885
 * Record ts高级类型 将一个类型的所有属性值都映射到另一个类型上并创造一个新的类型.
 * 导入路由模块
 */

export type ImportRouteModules = Record<string, { default: RouteRecordRaw; [key: string]: any }>;

/** 声明所有路由key */
export type RouteKey =
  // 框架路由
  | 'root'
  | 'login'
  | 'not-found'
  | 'no-permission'
  | 'service-error'
  // 自定义路由
  | 'home'
  | 'work-test';
