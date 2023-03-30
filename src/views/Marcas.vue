<template>
    <h2 class="text-center m-3 text-light">Gerenciar marcas</h2>
    <ul class="navbar-nav">
        <li class="nav-item p-1 p-1">
            <RouterLink to="/editar-marcas" class="text-light fs-5">Adicionar marcas</RouterLink>
        </li>
    </ul>
    <table class="table table-dark table-striped text-center">
        <thead>
            <tr>
                <th scope="col">Marca</th>
                <th scope="col">Ações</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>BMW</td>
                <td>
                    <button class="btn btn-sm btn-danger m-1">Deletar</button>
                    <button class="btn btn-sm btn-warning m-1">Alterar</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts"></script>

<style scoped>
.table {
    max-width: 350px;
}
</style>