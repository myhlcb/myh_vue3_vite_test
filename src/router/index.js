import { createRouter, createWebHashHistory } from 'vue-router';
import { mainStore } from '../store';
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
    // children: [
    // {
    //   path: '/index',
    //   name: 'index',
    //   component: () => import('../views/home/content/index/index.vue'),
    // },
    // {
    //   path: '/finance',
    //   name: 'finance',
    //   component: () => import('../views/home/content/finance/index.vue'),
    // },
    // ],
  },
];
const router = new createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach(async (to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    if (mainStore() && mainStore().nav.length === 0) {
      // 获取请求
      let res = await getData();
      // 缓存对象
      mainStore().setNav(res.data);
      const navData = fn(res);
      router.addRoute(navData);
      next({ path: to.path });
    } else {
      next();
    }
  }
});
// mock
function getData() {
  return {
    data: [
      {
        path: '/index',
        name: 'index',
      },
      {
        path: '/finance',
        name: 'finance',
      },
    ],
  };
}
function fn(res) {
  const list = res.data;
  let homeRoutes = routes.filter((v) => v.path === '/home')[0];
  homeRoutes.children = [];
  list.forEach((item) => {
    homeRoutes.children.push({
      path: item.path,
      name: item.name,
      component: () => import(`../views/home/content/${item.name}/index.vue`),
    });
  });
  return homeRoutes;
}
export default router;
