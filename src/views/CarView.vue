<script setup lang="ts">
import router from '@/router'
import { computed, type ComputedRef } from '@vue/reactivity'
import { useRoute, type RouteLocationNormalizedLoaded } from 'vue-router'
import carsData from '@/assets/data.json'

const route: RouteLocationNormalizedLoaded = useRoute()
const carId: ComputedRef<number> = computed<number>(() => +route.params.id)
const car = computed(() => carsData.cars.find((car) => car.id === carId.value))
</script>

<template>
  <section class="destination">
    <h1>{{ car?.name }}</h1>
    <div class="destination-details">
      <img :src="`../src/assets/images/${car.img}`" :alt="car.name" />
      <p>{{ car?.description }}</p>
    </div>
  </section>
</template>
