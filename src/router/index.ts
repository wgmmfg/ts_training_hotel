import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/login',
      component: () => import('../views/LoginView.vue'),
    },
  ],
  linkActiveClass: 'active',
});

export default router;
