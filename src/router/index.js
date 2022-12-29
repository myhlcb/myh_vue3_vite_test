import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
  { path: '/', redirect: '/login' },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue'),
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('../views/home/content/index/index.vue'),
      },
      {
        path: '/finance',
        name: 'finance',
        component: () => import('../views/home/content/finance/index.vue'),
      },
    ],
  },
];
const router = new createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
