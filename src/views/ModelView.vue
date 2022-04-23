<script setup lang="ts">
import carsData from '@/assets/data.json'
import type { CarModel } from '@/models/CarModel'
import { type ComputedRef, computed } from 'vue'
import { type RouteLocationNormalizedLoaded, useRoute } from 'vue-router'

const route: RouteLocationNormalizedLoaded = useRoute()
const carId: ComputedRef<number> = computed<number>(() => +route.params.id)
const car: ComputedRef<CarModel.Car> = computed<CarModel.Car>(
  () => carsData.cars.find((car) => car.id === carId.value) as CarModel.Car
)

const modelLink: ComputedRef<string> = computed<string>(() =>
  route.params.model.toString()
)
const model: ComputedRef<CarModel.Model> = computed<CarModel.Model>(
  () =>
    car.value.models.find(
      (model) => model.link === modelLink.value
    ) as CarModel.Model
)
</script>

<template>
  <section>
    <h1>{{ model.name }}</h1>
    <img :src="`/images/${model.img}`" :alt="model.name" />
    <p>{{ model.description }}</p>
  </section>
</template>
