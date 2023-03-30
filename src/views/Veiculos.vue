<template>
    <h2 class="text-center m-3 text-light">Cadastrar veículos</h2>
    <ul class="navbar-nav">
        <li class="nav-item p-1 p-1">
            <RouterLink to="/listagem-veiculo" class="text-light fs-5">Gerenciar veiculos</RouterLink>
        </li>
    </ul>
    <form class="formulario">
        <!-- Marca -->
        <select class="form-select bg-dark text-light mb-4" aria-label="Default select example">
            <option disabled selected>Marca</option>
            <option value="1">BMW</option>
        </select>

        <!-- Modelo -->
        <div class="form-outline mb-4">
            <label class="form-label text-light" for="modelo">Modelo</label>
            <input type="text" name="modelo" id="modelo" class="form-control bg-dark text-light" />
        </div>

        <!-- Ano -->
        <div class="form-outline mb-4">
            <label class="form-label text-light" for="ano">Ano</label>
            <input type="text" name="ano" id="ano" class="form-control bg-dark text-light" />
        </div>

        <!-- Valor -->
        <div class="form-outline mb-4">
            <label class="form-label text-light" for="valor">Valor</label>
            <input type="text" name="valor" id="valor" class="form-control bg-dark text-light">
        </div>

        <!-- Botão submit -->
        <button type="submit" class="btn btn-primary mb-4">Cadastrar</button>
    </form>
</template>

<script setup lang="ts"></script>

<style scoped>
.formulario {
    max-width: 400px;
    margin: 20px auto;
}
</style>