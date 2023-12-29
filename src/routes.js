import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from './pages/Login.vue';
import RegistrationPage from './pages/Registration.vue';
import HomePage from './pages/Home.vue';
import ApartmentPage from './pages/Apartment.vue';
import OrdersPage from './pages/Orders.vue';
import NotFoundPage from './pages/NotFound.vue';

import store from './store/store.js';

const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'HomePage',
  },
  {
    path: '/login',
    component: LoginPage,
    name: 'LoginPage',
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: '/registration',
    component: RegistrationPage,
    name: 'RegistrationPage',
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: '/apartments/:id',
    component: ApartmentPage,
    name: 'ApartmentPage',
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/orders',
    component: OrdersPage,
    name: 'OrdersPage',
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/:catchAll(.*)',
    component: NotFoundPage,
    name: 'NotFoundPage',
  },
];

const router = createRouter({
  history: createWebHistory('/Apartment-Search/'),
  routes,
});

router.beforeEach((to, from, next) => {
  const isLogin = store.getters['auth/isLogin'];

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLogin) {
      next({ name: 'LoginPage' });
    }
  }

  if (to.matched.some(record => record.meta.hideForAuth)) {
    if (isLogin) {
      next({ name: 'HomePage' });
    }
  }

  next();
});

export default router;
