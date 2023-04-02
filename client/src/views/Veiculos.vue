<template>
  <div>
    <h2 class="text-center m-3 text-light">Cadastrar veículos</h2>
    <ul class="navbar-nav">
      <li class="nav-item p-1 p-1">
        <RouterLink to="/listagem-veiculo" class="text-light fs-5"
          >Gerenciar veiculos</RouterLink
        >
      </li>
    </ul>
    <form class="formulario">
      <!-- Marca -->
      <select
        class="form-select bg-dark text-light mb-4"
        aria-label="Default select example"
        v-model="dados.marcaId"
      >
        <option disabled selected value="">Marca</option>
        <option v-for="marca in marcas" :key="marca.id" :value="marca.id">
            {{ marca.nome }}
        </option>
      </select>

      <!-- Modelo -->
      <div class="form-outline mb-4">
        <label class="form-label text-light" for="modelo">Modelo</label>
        <input
          type="text"
          name="modelo"
          id="modelo"
          class="form-control bg-dark text-light"
          v-model="dados.modelo"
        />
      </div>
      <!-- Modelo -->
      <div class="form-outline mb-4">
        <label class="form-label text-light" for="urlImagem">URL da imagem</label>
        <input
          type="text"
          name="modelo"
          id="urlImagem"
          class="form-control bg-dark text-light"
          v-model="dados.imagemUrl" 
        />
      </div>
      <!-- Ano -->
      <div class="form-outline mb-4">
        <label class="form-label text-light" for="ano">Ano</label>
        <input
          type="number"
          name="ano"
          id="ano"
          class="form-control bg-dark text-light"
          v-model="dados.ano"
        />
      </div>

      <!-- Valor -->
      <div class="form-outline mb-4">
        <label class="form-label text-light" for="valor">Valor</label>
        <input
          type="number"
          name="valor"
          id="valor"
          class="form-control bg-dark text-light"
          v-model="dados.valor"
        />
      </div>

      <!-- Botão submit -->
      <button type="submit" class="btn btn-primary mb-4" @click.prevent="cadastrar">Cadastrar</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue'
import { useMarcasStore } from '../stores/marcas-store.js'
import * as marcasService from '../services/marcas-service.js'
import * as veiculosService from '../services/veiculo-service.js'

const marcasStore = useMarcasStore()
const marcas = computed(() => marcasStore.marcas)

onMounted(() => {
    marcasStore.isMarcasVazio && (
        marcasService.listaMarcas()
            .then(resp => marcasStore.atualizaMarcas(resp))
    )
})

const dados = reactive({
    modelo: "",
    ano: 0,
    valor: 0,
    imagemUrl: "",
    marcaId: ""
})

const cadastrar = () => {
    veiculosService.cadastraVeiculo(dados)
        .then(resp => console.log(resp))
}

</script>

<style scoped>
.formulario {
  max-width: 400px;
  margin: 20px auto;
}
</style>