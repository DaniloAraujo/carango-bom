<template>
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
            <tr>
                <td>BMW</td>
                <td>4</td>
                <td>R$ 356.000</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts"></script>

<style scoped>
.table {
    max-width: 800px;
    text-align: center;
    margin: 20px auto;
}
</style>