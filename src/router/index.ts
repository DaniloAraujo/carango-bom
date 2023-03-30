import { createRouter, type RouteRecordRaw, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import Veiculos from '@/views/Veiculos.vue';
import ListagemExclusao from '@/views/ListagemExclusao.vue';
import Login from '@/views/Login.vue';
import Marcas from '@/views/Marcas.vue';
import GerenciarMarcas from '@/views/GerenciarMarcas.vue';
import Dashboard from '@/views/Dashboard.vue';

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
    },
    {
        path: '/marcas',
        name: 'Marcas',
        component: Marcas
    },
    {
        path: '/editar-marcas',
        name: 'GerenciarMarcas',
        component: GerenciarMarcas
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },

];

const roteador = createRouter({
    history: createWebHistory(),
    routes: rotas
});

export default roteador;