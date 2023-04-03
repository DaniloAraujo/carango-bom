<template>
  <div class="row">
    <header class="col-2">
      <BarraLateral />
    </header>
    
    <main class="col ps-3 bg-dark">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import BarraLateral from './components/BarraLateral.vue'

import { useUsuarioStore } from './stores/usuario-store.js'
import { RouterView, useRouter } from 'vue-router'
import * as autenticacaoService from './services/autenticacao-service.js'
import axios from 'axios';

const usuarioStore = useUsuarioStore()
console.log(autenticacaoService.getPapeis())

const router = useRouter()
router.beforeEach((to: any, from: any) => {
  if (to.meta.exigeAutenticacao) {
    const token = autenticacaoService.recuperaToken()

    if (!token) {
      return { name: "Login" }
    }
  }
})

axios.interceptors.request.use(config => {
  const token = autenticacaoService.recuperaToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

axios.interceptors.response.use(resp => {
  console.log("RESP::", resp)
  
  return resp
}, e => {
  console.log("ERRO RESP::", e)

  if(e.response.status == 401) {
    autenticacaoService.logOff()
    usuarioStore.logoff()

    router.push("/login")
  }
})

</script>

<style>
header {
  background-color: #262A56;
  min-height: 100vh;
}

.row > * {
  padding-right: 0 !important;
}

.row {
  --bs-gutter-x: 0 !important;
}
</style>
