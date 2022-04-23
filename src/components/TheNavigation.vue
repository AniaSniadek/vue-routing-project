<script setup lang="ts">
import carsData from '@/assets/data.json'
</script>

<template>
  <div class="navigation">
    <router-link to="/">Home</router-link>
    <router-link
      v-for="car in carsData.cars"
      :key="car.id"
      :to="{ name: 'car.view', params: { id: car.id, name: car.link } }"
      >{{ car.name }}</router-link
    >
  </div>
</template>

<style lang="scss">
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 0;
  padding: 30px;
  background: #2c3e50;
  color: white;
  display: flex;
  align-items: center;
  border-bottom: 5px solid #4e6c71;
  z-index: 2;

  a {
    display: inline-block;
    margin-right: 20px;
    color: white !important;
    opacity: 0.7;
    transition: 0.2 ease color;
  }

  a.router-link-active,
  a:hover {
    opacity: 1;
  }
}
</style>
