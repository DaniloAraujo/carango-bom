<template>
  <div>
    <h1 class="text-center p-1 titulo">Carango Bom</h1>
    <nav class="text-center">
      <ul class="navbar-nav">
        <li class="nav-item p-1 p-1">
          <RouterLink to="/login" class="nav-link">Entrar</RouterLink>
        </li>
        <li class="nav-item p-1">
          <RouterLink to="/veiculos" class="nav-link" href="#"
            >Veículos</RouterLink
          >
        </li>
        <li class="nav-item p-1">
          <RouterLink to="/marcas" class="nav-link" href="#">Marcas</RouterLink>
        </li>
        <li class="nav-item p-1">
          <RouterLink to="/dashboard" class="nav-link" href="#"
            >Dashboard</RouterLink
          >
        </li>
        <li class="nav-item p-1" @click="logOff">
          <a class="nav-link" href="#">Sair</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import * as autenticacaoService from '../services/autenticacao-service.js'

const logOff = () => {
    autenticacaoService.logOff()
}

</script>

<style>
.titulo {
  color: #cbe4de;
}

.nav-link {
  color: #cbe4de !important;
}

.nav-link:hover {
  background-color: #0e8388;
  color: #fff !important;
}
</style>