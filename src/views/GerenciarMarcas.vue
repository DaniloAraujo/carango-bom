<template>
    <h2 class="text-center m-3 text-light">Marcas</h2>
    <ul class="navbar-nav">
        <li class="nav-item p-1 p-1">
            <RouterLink to="/marcas" class="text-light fs-5">Marcas cadastradas</RouterLink>
        </li>
    </ul>
    
    <table class="table table-dark table-striped">
        <thead>
            <tr>
                <th scope="col">Marca</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>BMW</td>
            </tr>
        </tbody>
    </table>
    <form class="formulario">
        <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Marca do veículo" aria-label="Recipient's username" aria-describedby="basic-addon2">
        <button class="btn btn-primary" type="button">Cadastrar</button>
</div>
    </form>
</template>

<script setup lang="ts"></script>

<style scoped>
.formulario {
    max-width: 300px;
    
}

.table {
    max-width: 300px;
}
</style>