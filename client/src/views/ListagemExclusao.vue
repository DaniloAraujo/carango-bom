<template>
  <div class="veiculos-view-container">
    <h2 class="text-center m-3 text-light">Veículos</h2>
    <ul class="navbar-nav">
      <li class="nav-item p-1 p-1">
        <RouterLink to="/veiculos" class="text-light fs-5"
          >Cadastrar veiculos</RouterLink
        >
      </li>
    </ul>
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
          <button @click="deletar(veiculo)" class="btn btn-sm btn-danger m-1">Deletar</button>
          <RouterLink :to="`/veiculos/${veiculo.id}`" class="btn btn-sm btn-warning m-1">Alterar</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useVeiculosStore } from "../stores/veiculos-store.js";
import * as veiculosService from "../services/veiculo-service.js";
import type { Veiculo } from "../interfaces/index.js";

const veiculosStore = useVeiculosStore();
const veiculos = computed(() => veiculosStore.veiculos);

const deletar = (veiculo: Veiculo) => {
    if (confirm(`Deseja realmente deletar o veículo ${veiculo.modelo}?`)) {
        veiculosService.excluiVeiculo(veiculo.id)
            .then(() => veiculosStore.veiculos = veiculosStore.veiculos.filter(v => v.id != veiculo.id))
    }
}

onMounted(() => {
  veiculosService.buscaVeiculos()
    .then(veiculosResp => veiculosStore.veiculos = veiculosResp);
});
</script>

<style>
    .cards-container {
        gap: .6rem
    }

</style>