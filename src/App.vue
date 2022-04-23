<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavigation from './components/TheNavigation.vue'
</script>

<template>
  <TheNavigation />
  <div class="container">
    <RouterView />
  </div>
</template>

<style>
@import '../src/assets/styles/main.css';
</style>
