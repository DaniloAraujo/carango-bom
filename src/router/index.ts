import Veiculos from '@/views/Veiculos.vue';
import ListagemExclusao from '@/views/ListagemExclusao.vue';
import Login from '@/views/Login.vue';
import { createRouter, type RouteRecordRaw, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/veiculos',
        name: 'Veiculos',
        component: Veiculos
    },
    {
        path: '/listagem-veiculo',
        name: 'ListagemVeiculo',
        component: ListagemExclusao
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }

];

const roteador = createRouter({
    history: createWebHistory(),
    routes: rotas
});

export default roteador;
