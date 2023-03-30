<template>
  <div class="row">
    <header class="col-3">
      <BarraLateral />
    </header>
    
    <main class="col tela-base">
      <Home />
    </main>
  </div>
</template>

<script setup lang="ts">
import BarraLateral from './components/BarraLateral.vue';
import Home from './views/Home.vue';
import Login from '@/views/Login.vue';
import ListagemExclusao from '@/views/ListagemExclusao.vue';
import CadastroExclusao from '@/views/Veiculos.vue';

</script>

<style>
header {
  height: 100vh;
  background-color: #2C3333;
}

.tela-base {
  background-color: #2E4F4F;
}
</style>
