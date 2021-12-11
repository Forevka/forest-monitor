import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Vuex from '@/views/Vuex.vue'
import Test from '@/views/Test.vue'
import ForestMonitor from '@/views/ForestMonitor.vue';
import News from '@/views/News.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/Axios.vue') // 懒加载 Axios 组件
  },
  {
    path: '/forest-monitor',
    name: 'ForestMonitor',
    component: ForestMonitor
  },
  {
    path: '/news',
    name: 'News',
    component: News
  }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
