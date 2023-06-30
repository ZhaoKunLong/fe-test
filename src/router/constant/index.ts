import { RouteKey } from '@/interface';

interface routeConst {
  name: RouteKey; // 路由名称
  path: string; // 路由路径
  title: string; // 路由标题
}

/** 声明的路由名称、路径和标题 */
const routeMap = new Map<RouteKey, routeConst>([
  [
    'root',
    {
      name: 'root',
      path: '/',
      title: 'root',
    },
  ],
  [
    'work-test',
    {
      name: 'work-test',
      path: '/test',
      title: '测试',
    },
  ],
  [
    'login',
    {
      name: 'login',
      path: '/login',
      title: '登录',
    },
  ],
  [
    'not-found',
    {
      name: 'not-found',
      path: '/404',
      title: '页面丢失',
    },
  ],
  [
    'no-permission',
    {
      name: 'no-permission',
      path: '/403',
      title: '无权限',
    },
  ],
  [
    'service-error',
    {
      name: 'service-error',
      path: '/500',
      title: '服务器错误',
    },
  ],
]);

/** 获取 路由 相关属性 */
export const getConstRoute = (key: RouteKey) => routeMap.get(key)!;
export const routeName = (key: RouteKey) => routeMap.get(key)!.name;
export const routePath = (key: RouteKey) => routeMap.get(key)!.path;
export const routeTitle = (key: RouteKey) => routeMap.get(key)!.path;
