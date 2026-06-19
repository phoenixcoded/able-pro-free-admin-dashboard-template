import { createRouter, createWebHistory } from 'vue-router';
import { useUIStore } from '@/stores/ui';

import { routes } from 'vue-router/auto-routes';

// Redirect root to dashboard
const rootRedirect = {
  path: '/',
  redirect: '/dashboard'
};

// 404 Not Found route - catches all undefined paths
const notFoundRoute = {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: () => import('@/pages/maintenance/error404.vue'),
  meta: { requiresAuth: false }
};

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [rootRedirect, ...routes, notFoundRoute],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

router.beforeEach(() => {
  const uiStore = useUIStore();
  uiStore.isLoading = true;
});

router.afterEach(() => {
  const uiStore = useUIStore();
  uiStore.isLoading = false;
});
