<template>
    <ul class="navbar-nav">
        <li class="nav-item p-1 p-1">
            <RouterLink to="/veiculos" class="text-light fs-5">Cadastrar veiculos</RouterLink>
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
</template>

<script setup lang="ts">

</script>