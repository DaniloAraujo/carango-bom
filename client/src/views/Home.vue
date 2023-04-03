<template>
    <div class="veiculos-view-container">
      <h2 class="text-center m-3 text-light">Veículos a venda</h2>
      <table class="table table-dark table-striped text-center">
        <thead>
          <tr>
            <th scope="col">modelo</th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="veiculo in veiculos" :key="veiculo.id">
            <td>{{ veiculo.modelo }}</td>
            <td>R$ {{ veiculo.valor }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed, onMounted } from "vue";
  import { useVeiculosStore } from "../stores/veiculos-store.js";
  import * as veiculosService from "../services/veiculo-service.js";
  
  const veiculosStore = useVeiculosStore();
  const veiculos = computed(() => veiculosStore.veiculos);
  
  onMounted(() => {
    veiculosService.buscaVeiculos()
      .then(veiculosResp => veiculosStore.veiculos = veiculosResp);
  });
  </script>
  
  <style>
  </style>