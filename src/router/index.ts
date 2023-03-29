import { createRouter, type RouteRecordRaw, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }
];

const roteador = createRouter({
    history: createWebHistory(),
    routes: rotas
});

export default roteador;