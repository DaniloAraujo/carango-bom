<template>
  <div>
    <h2 class="text-center m-3 text-light">Gerenciar marcas</h2>
    <ul class="navbar-nav">
      <li class="nav-item p-1 p-1">
        <RouterLink to="/marcas" class="text-light fs-5">
          Adicionar marcas
        </RouterLink>
      </li>
    </ul>
    <table class="table table-dark table-striped text-center">
      <thead>
        <tr>
          <th scope="col">Marca</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="marcasStore.isMarcasVazio">
          <td colspan="2">Ainda não há marcas cadastradas</td>
        </tr>
        <tr v-for="marca in marcas" :key="marca.id">
          <td>{{ marca.nome }}</td>
          <td>
            <button class="btn btn-sm btn-danger m-1" @click="deletar(marca)">Deletar</button>
            <RouterLink :to="`/marcas/${marca.id}`" class="btn btn-sm btn-warning m-1">Alterar</RouterLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Marca } from "../interfaces";
import { onMounted } from "vue";
import * as marcasService from "../services/marcas-service.js";
import { useMarcasStore } from "../stores/marcas-store.js";

const marcasStore = useMarcasStore()
const marcas = computed(() => marcasStore.marcas)

onMounted(() => {
  marcasService.listaMarcas()
    .then(marcasResp => {
      marcasStore.atualizaMarcas(marcasResp)
    })
});

const deletar = (marca: Marca) => {
  if (confirm(`Deseja realmente deletar a marca ${marca.nome}?`)) {
    marcasService.excluiMarca(marca.id)
      .then(resp => {
        marcasStore.marcas = marcasStore.marcas.filter(m => m.id !== marca.id)
      })
  }
} 
</script>


<style>
.table {
  max-width: 800px;
  text-align: center;
  margin: auto;
}
</style>