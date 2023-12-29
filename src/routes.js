import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from './pages/Login.vue';
import RegistrationPage from './pages/Registration.vue';
import HomePage from './pages/Home.vue';
import ApartmentPage from './pages/Apartment.vue';
import OrdersPage from './pages/Orders.vue';
import NotFoundPage from './pages/NotFound.vue';

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
  },
  {
    path: '/registration',
    component: RegistrationPage,
    name: 'RegistrationPage',
  },
  {
    path: '/apartments/:id',
    component: ApartmentPage,
    name: 'ApartmentPage',
  },
  {
    path: '/orders',
    component: OrdersPage,
    name: 'OrdersPage',
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

export default router;
