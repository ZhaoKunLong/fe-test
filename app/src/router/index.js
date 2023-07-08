import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    // 首页
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    // 请实现一个Vue组件，包含一个输入框和一个按钮，点击按钮后将输入框中的内容添加到一个列表中
    path: '/component1',
    name: 'component1',
    component: () => import('../views/component1.vue')
  },
  {
    // 请实现一个Vue组件，包含一个输入框和一个表格，输入框中输入关键字后，表格中的数据会根据关键字进行筛选。
    path: '/component2',
    name: 'component2',
    component: () => import('../views/component2.vue')
  },
  {
    // 请实现一个Vue组件，包含一个轮播图和一个分页器，轮播图中有多张图片，分页器可以切换轮播图中的图片。
    path: '/component3',
    name: 'component3',
    component: () => import('../views/component3.vue')
  },
  {
    // 请实现一个Vue组件，包含一个按钮和一个modal弹框， 点击按钮出现modal框，点击其他部分modal框消失。
    path: '/component4',
    name: 'component4',
    component: () => import('../views/component4.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
