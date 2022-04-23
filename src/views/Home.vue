<script setup lang="ts">
import carsData from '@/assets/data.json'
</script>

<template>
  <div class="home">
    <h1>Cars</h1>
    <div class="destinations">
      <router-link
        v-for="car in carsData.cars"
        :key="car.id"
        :to="{ name: 'car.view', params: { id: car.id } }"
      >
        <h2>{{ car.name }}</h2>
        <img :src="`../src/assets/images/${car.img}`" :alt="car.name" />
      </router-link>
    </div>
  </div>
</template>
