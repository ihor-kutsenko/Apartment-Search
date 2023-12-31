import { createRouter, createWebHistory } from 'vue-router';
import NotFoundPage from './pages/NotFound.vue';

const HomePage = () => import('./pages/Home.vue');
const LoginPage = () => import('./pages/Login.vue');
const RegistrationPage = () => import('./pages/Registration.vue');
const ApartmentPage = () => import('./pages/Apartment.vue');
const OrdersPage = () => import('./pages/Orders.vue');

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
