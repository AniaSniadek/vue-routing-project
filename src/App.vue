<script setup lang="ts">
import { RouterView } from 'vue-router'
import carsData from '../src/assets/data.json'
</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link v-for="car in carsData.cars" :key="car.id" :to="car.link">{{
      car.name
    }}</router-link>
  </div>
  <div class="container">
    <RouterView />
  </div>
</template>

<style>
@import '../src/assets/styles/main.css';
</style>
