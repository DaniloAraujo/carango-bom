<template>
  <div>
    <h2 class="text-center m-3 text-light">Cadastrar veículos</h2>
    <ul class="navbar-nav">
      <li class="nav-item p-1 p-1">
        <RouterLink to="/veiculos-lista" class="text-light fs-5"
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
          ref="modeloInput"
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
      <button type="submit" class="btn btn-primary mb-4" @click.prevent="salvar">Salvar</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, defineProps, ref } from 'vue'
import { useMarcasStore } from '../stores/marcas-store.js'
import * as marcasService from '../services/marcas-service.js'
import * as veiculosService from '../services/veiculo-service.js'
import { useVeiculosStore } from '../stores/veiculos-store'
import type { VeiculoForm } from '../interfaces/index.js'
import { useRouter } from 'vue-router'

const marcasStore = useMarcasStore()
const veiculosStore = useVeiculosStore()
const router = useRouter()

const marcas = computed(() => marcasStore.marcas)

const { id } = defineProps(['id'])

const dados = reactive<VeiculoForm>({
    modelo: "",
    ano: 0,
    valor: 0,
    imagemUrl: "",
    marcaId: ""
})

const modeloInput = ref<HTMLElement | null>(null)

const salvar = () => {
    id ? alterar() : cadastrar()
}

const cadastrar = () => {
    veiculosService.cadastraVeiculo(dados)
        .then(resp => {
            dados.modelo = "",
            dados.ano = 0,
            dados.valor = 0,
            dados.imagemUrl = "",
            dados.marcaId = ""

            modeloInput.value!.focus()
        })
}
const alterar = () => {
    veiculosService.alteraVeiculo(dados)
        .then(() => router.push("/veiculos-lista"))
}

onMounted(() => {
console.log("dados::", dados)

marcasService.listaMarcas()
    .then(resp => marcasStore.atualizaMarcas(resp))

    if (id) {
        const veiculo = veiculosStore.veiculos.find(v => v.id === id)

        if (veiculo) {
            dados.id = id
            dados.modelo = veiculo!.modelo,
            dados.ano = veiculo!.ano,
            dados.valor = veiculo!.valor,
            dados.imagemUrl = veiculo!.imagemUrl,
            dados.marcaId = veiculo!.marca.id
        }
    }
})

</script>

<style scoped>
.formulario {
  max-width: 400px;
  margin: 20px auto;
}
</style>