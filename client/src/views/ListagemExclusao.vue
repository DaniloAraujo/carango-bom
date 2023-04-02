<template>
  <div>
    <h2 class="text-center m-3 text-light">Veículos</h2>
    <ul class="navbar-nav">
      <li class="nav-item p-1 p-1">
        <RouterLink to="/veiculos" class="text-light fs-5"
          >Cadastrar veiculos</RouterLink
        >
      </li>
    </ul>
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">Marca</th>
          <th scope="col">Modelo</th>
          <th scope="col">Ano</th>
          <th scope="col">Valor</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>BMW</td>
          <td>X1</td>
          <td>2012</td>
          <td>R$ 89.000</td>
          <td>
            <button class="btn btn-sm btn-danger m-1">Deletar</button>
            <button class="btn btn-sm btn-warning m-1">Alterar</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- card -->
    <div v-if="!veiculosStore.isVeiculosVazio" class="cards-container d-flex">
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
          <h5 class="card-title">{{ veiculo.modelo }}</h5>
          <p class="card-text">
            {{
              veiculo.valor.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })
            }}
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
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
  veiculosService
    .buscaVeiculos()
    .then((veiculosResp) => (veiculosStore.veiculos = veiculosResp));
});
</script>

<style scoped>
    .cards-container {
        gap: 1rem
    }
</style>