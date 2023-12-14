import { createApp } from 'vue';

import App from './App.vue';
import router from './routes.js';
import './scss/index.scss';

createApp(App).use(router).mount('#app');
