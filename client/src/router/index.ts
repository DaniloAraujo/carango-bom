import { createRouter, type RouteRecordRaw, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
// import Veiculos from '@/views/Veiculos.vue';
// import ListagemExclusao from '@/views/ListagemExclusao.vue';
// import Login from '@/views/Login.vue';
// import Marcas from '@/views/Marcas.vue';
// import GerenciarMarcas from '@/views/GerenciarMarcas.vue';
// import Dashboard from '@/views/Dashboard.vue';

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            exigeAutenticacao: false
        }
    },
    {
        path: '/veiculos-lista',
        name: 'veiculosLista',
        component: () => import('@/views/ListagemExclusao.vue'),
        meta: {
            exigeAutenticacao: true
        }
    },
    {
        path: '/veiculos',
        name: 'veiculos',
        component: () => import('@/views/Veiculos.vue'),
        meta: {
            exigeAutenticacao: true
        }
    },
    {
        path: '/veiculos/:id',
        name: 'editarVeiculo',
        component: () => import('@/views/Veiculos.vue'),
        meta: {
            exigeAutenticacao: true
        },
        props: true
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
        meta: {
            exigeAutenticacao: false
        }
    },
    {
        path: '/marcas-lista',
        name: 'Marcas',
        component: () => import('@/views/Marcas.vue'),
        meta: {
            exigeAutenticacao: true
        }
    },
    {
        path: '/marcas',
        name: 'cadastrarMarcas',
        component: () => import('@/views/GerenciarMarcas.vue'),
        meta: {
            exigeAutenticacao: true
        }
    },
    {
        path: '/marcas/:id',
        name: 'GerenciarMarcas',
        component: () => import('@/views/GerenciarMarcas.vue'),
        meta: {
            exigeAutenticacao: true
        },
        props: true
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
        meta: {
            exigeAutenticacao: true
        }
    },

];

const roteador = createRouter({
    history: createWebHistory(),
    routes: rotas
});

export default roteador;