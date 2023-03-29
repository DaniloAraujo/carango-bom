<template>
  <div class="row">
    <header class="col-3 bg-success">
      <BarraLateral />
    </header>
  
    <main class="col">
      <!-- <Home /> -->
      <Login />
    </main>
  </div>
</template>

<script setup lang="ts">
import BarraLateral from './components/BarraLateral.vue';
import Home from './views/Home.vue';
import Login from './views/Login.vue';

</script>

<style>
header {
  height: 100vh;
}
</style>
