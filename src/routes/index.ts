import { createRouter, createWebHistory } from "vue-router";

// 路由数组
let routes = [
  {
    path: '/',
    name: 'layout',
    redirect: '/answerOne',
    component: () => import('@/components/layout/Index.vue'),
    children: [
      {
        path: '/answerOne',
        name: 'answerOne',
        component: () => import('@/view/answerOne/Index.vue')
      },
      {
        path: '/answerTwo',
        name: 'answerTwo',
        component: () => import('@/view/answerTwo/Index.vue')
      },
      {
        path: '/answerThree',
        name: 'answerThree',
        component: () => import('@/view/answerThree/Index.vue')
      },
      {
        path: '/answerFour',
        name: 'answerFour',
        component: () => import('@/view/answerFour/Index.vue')
      },
    ]
  },

  // {
  //   // 配置404页面
  //   path: '/:catchAll(.*)',
  //   name: '404',
  //   component: () => import('@/view/answerOne/Index.vue'),
  // }
]
// 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 导出
export default router 