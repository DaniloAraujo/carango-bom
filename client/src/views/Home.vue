<template>
    <div class="veiculos-view-container">
      <h2 class="text-center m-3 text-light">Veículos a venda</h2>
      <!-- card -->
      <div v-if="!veiculosStore.isVeiculosVazio" class="cards-container d-flex flex-wrap">
        <div
          v-for="veiculo in veiculos"
          :key="veiculo.id"
          class="card bg-dark text-light"
          style="width: 18rem"
        >
          <img
            :src="veiculo.imagemUrl"
            class="card-img-top"
            :alt="`imagem de um ${veiculo.marca} ${veiculo.modelo}`"
          />
          <div class="card-body">
            <h5 class="card-title">{{ veiculo.marca.nome }} - {{ veiculo.modelo }}</h5>
            <p class="card-text">
              {{
                veiculo.valor.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              }}
            </p>
          </div>
        </div>
      </div>
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
  
  <style scoped>
      .cards-container {
          gap: .6rem
      }
  
  </style>