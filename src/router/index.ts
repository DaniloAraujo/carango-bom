import AppVue from '@/App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "root",
    component: AppVue
    //app aqui provisorio
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})