<template>
    <h1 class="text-center p-1 titulo">Carango Bom</h1>
    <nav class="text-center">
        <ul class="navbar-nav">
            <li class="nav-item p-1 p-1">
                <RouterLink to="/login" class="nav-link">Entrar</RouterLink>
            </li>
            <li class="nav-item p-1">
                <RouterLink to="/veiculos" class="nav-link" href="#">Veículos</RouterLink>
            </li>
            <li class="nav-item p-1">
                <a class="nav-link" href="#">Sair</a>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">

</script>

<style>
.titulo {
    color: #CBE4DE;
}

.nav-link {
    color:  #CBE4DE !important;
}

.nav-link:hover {
    background-color: #0E8388;
    color: #fff !important;
}
</style>