<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/mustang">Mustang</router-link>
    <router-link to="/ferrari">Ferrari</router-link>
    <router-link to="/lamborghini">Lamborghini</router-link>
    <router-link to="/porsche">Porsche</router-link>
  </div>
  <div class="container">
    <RouterView />
  </div>
</template>

<style>
@import '../src/assets/styles/main.css';
</style>
