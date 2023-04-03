<template>
  <div>
    <img src="../../images/logo-carango.jpeg" alt="logo" class="img-fluid">
    <nav class="text-center">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink to="/login" class="nav-link">Entrar</RouterLink>
        </li>
        <li class="nav-item" @click="logOff">
          <a class="nav-link border-bottom" href="#">Sair</a>
        </li>
        <li class="nav-item mt-1">
          <RouterLink to="/" class="nav-link">Inicio</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/veiculos-lista" class="nav-link"
            >Veículos</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink to="/marcas-lista" class="nav-link" href="#">Marcas</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/dashboard" class="nav-link" href="#"
            >Dashboard</RouterLink
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import * as autenticacaoService from "../services/autenticacao-service.js";

const logOff = () => {
  autenticacaoService.logOff();
};
</script>

<style>
.titulo {
  color: #cbe4de;
}

.nav-link {
  color: #cbe4de !important;
}

.nav-link:hover {
  background-color: #B8621B;
  color: #fff !important;
}
</style>