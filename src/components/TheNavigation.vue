<script setup lang="ts">
import carsData from '@/assets/data.json'
</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link v-for="car in carsData.cars" :key="car.id" :to="car.link">{{
      car.name
    }}</router-link>
  </div>
</template>
