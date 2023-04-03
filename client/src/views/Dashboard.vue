<template>
  <div>
    <h2 class="text-center m-3 text-light">Dashboard</h2>
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">Marca</th>
          <th scope="col">Quantidade</th>
          <th scope="col">Valor de veículos para venda</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(marca, i) in marcas" :key="i">
          <td>{{ marca.marca }}</td>
          <td>{{ marca.quantidade }}</td>
          <td>{{ marca.montante.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useMarcasStore } from '../stores/marcas-store';
import { recuperaIndicadoresConsolidadosDasMarcas } from '../services/dashboard-service.js'
import type { Indicador } from '../interfaces';

const marcasStore = useMarcasStore()
const marcas = ref<Indicador[]>([])

onMounted(() => {
  recuperaIndicadoresConsolidadosDasMarcas()
    .then(resp => marcas.value = resp)
    .then(() => console.log(marcas.value))
})

</script>

<style>
.table {
  max-width: 800px;
  text-align: center;
  margin: 20px auto;
}
</style>