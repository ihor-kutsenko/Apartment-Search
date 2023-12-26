import { createApp } from 'vue';

import App from './App.vue';
import router from './routes.js';
import Notifications from '@kyvg/vue3-notification';
import store from './store/store.js';
import './scss/index.scss';

createApp(App).use(router).use(Notifications).use(store).mount('#app');
