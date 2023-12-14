import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/Home.vue';
import ApartmentPage from './pages/Apartment.vue';
import Bar from './pages/Bar.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'HomePage',
  },
  {
    path: '/apartment',
    component: ApartmentPage,
    name: 'ApartmentPage',
  },
  {
    path: '/bar',
    component: Bar,
    name: 'BarPage',
  },
];

const router = createRouter({
  history: createWebHistory('/Apartment-Search/'),
  routes,
});

export default router;
