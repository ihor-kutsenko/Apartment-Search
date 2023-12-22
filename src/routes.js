import { createRouter, createWebHistory } from 'vue-router';

import Login from './pages/Login.vue';
import HomePage from './pages/Home.vue';
import ApartmentPage from './pages/Apartment.vue';
import NotFoundPage from './pages/NotFound.vue';
import Bar from './pages/Bar.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'HomePage',
  },
  {
    path: '/login',
    component: Login,
    name: 'LoginPage',
  },
  {
    path: '/apartments/:id',
    component: ApartmentPage,
    name: 'ApartmentPage',
  },
  {
    path: '/bar',
    component: Bar,
    name: 'BarPage',
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
