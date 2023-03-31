<template>
  <section class="vh-100">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong">
            <form @submit.prevent="autenticaUsuario" class="card-body p-5 text-center bg-dark rounded">
              <h3 class="mb-5 text-light">Sign in</h3>

              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="typeEmailX-2"
                  class="form-control form-control-lg"
                  v-model="email"
                />
                <label class="form-label text-light" for="typeEmailX-2">Email</label
                >
              </div>

              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="typePasswordX-2"
                  class="form-control form-control-lg"
                  v-model="senha"
                />
                <label class="form-label text-light" for="typePasswordX-2"
                  >Senha</label
                >
              </div>

              <button class="btn btn-primary btn-lg" type="submit">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { autentica } from '../services/autenticacao-service.js'
import { useUsuarioStore } from '../stores/useUsuarioStore.js'
import { useRouter } from 'vue-router'

const email = ref("")
const senha = ref("")
const usuarioStore = useUsuarioStore()

const router = useRouter()

function autenticaUsuario() {
    autentica(email.value, senha.value, usuarioStore)
      .then(() => router.push("/dashboard"))
      .catch(e => {
        alert("Algo deu errado na autenticação ;(")
        console.log('fetchErr::', e)
      })
}

</script>

<style>
</style>