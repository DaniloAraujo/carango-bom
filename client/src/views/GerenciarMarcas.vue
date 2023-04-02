<template>
  <div>
    <h2 class="text-center m-3 text-light">Marcas</h2>
    <!-- <ul class="navbar-nav">
      <li class="nav-item p-1 p-1">
        <RouterLink to="/marcas-lista" class="text-light fs-5"
          >Marcas cadastradas</RouterLink
        >
      </li>
    </ul> -->

    <!-- <table v-if="!id" class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">Marca</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>BMW</td>
        </tr>
      </tbody> -->
    <!-- </table> -->
    <form class="formulario" @submit.prevent="salvar">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Marca"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          v-model="nome"
          ref="elementoMarca"
        />
        <button class="btn btn-primary" type="submit">Salvar</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { onMounted, ref } from "vue";
import { useRouter } from 'vue-router';
import type { Marca } from '../interfaces/index.js';
import * as marcaService from '../services/marcas-service.js'
import { useMarcasStore } from '../stores/marcas-store.js'

const router = useRouter()
const nome = ref("")
const marca = ref<Marca>()
const elementoMarca = ref<HTMLElement | null>(null)
const marcasStore = useMarcasStore()

const { id } = defineProps(['id'])

const salvar = () => {
  !id ? cadastrar() : editar()
}

const cadastrar = () => {
  marcaService.cadastraMarca(nome.value)
  nome.value = ""
  elementoMarca.value!.focus()
}

const editar = () => {
  marcaService.editarMarca({ 
    id: marca.value!.id,
    nome: nome.value
   })
    .then(resp => {
      console.log(resp)
      router.push("/marcas-lista")
    })
}

onMounted(()=> {
  elementoMarca.value!.focus()
  
  id && (marca.value = marcasStore.marcas.find(m => m.id == id))
  id && (nome.value = marcasStore.marcas.find(m => m.id == id)!.nome)
})

</script>

<style scoped>
.formulario {
  max-width: 300px;
}

.table {
  max-width: 300px;
}
</style>