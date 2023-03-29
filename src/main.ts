import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import roteador from './router'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const app = createApp(App);

app.use(createPinia());
app.use(roteador);

app.mount('#app');
