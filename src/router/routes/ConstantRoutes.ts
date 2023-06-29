import type { RouteRecordRaw } from 'vue-router';
import { routeName, routePath } from '../constant';
import { TheLogin, NotFound, NotPermission, TheLayout } from '@/views';

/** 固定路由 */
const constantRoutes: RouteRecordRaw[] = [
  {
    name: 'login',
    path: '/login',
    component: TheLogin,
  },
  // 名称、路径随意，不在路由声明里面，只是为各个子路由充当应用Layout布局的桥梁，因此访问该路由时默认重定向到首页
  {
    name: 'Layout',
    path: '/',
    component: TheLayout,
    redirect: { name: routeName('work-test') },
    children: [
      {
        name: routeName('work-test'),
        path: routePath('work-test'),
        component: NotFound,
        meta: {},
      },
      {
        name: routeName('not-found'),
        path: routePath('not-found'),
        component: NotFound,
        meta: {},
      },
      {
        name: routeName('no-permission'),
        path: routePath('no-permission'),
        component: NotPermission,
        meta: {},
      },
    ],
  },
  // 无效路径重定向404
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: routeName('not-found') },
  },
];

export default constantRoutes;
