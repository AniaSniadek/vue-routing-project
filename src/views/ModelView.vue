<script setup lang="ts">
import carsData from '@/assets/data.json'
import type { CarModel } from '@/models/CarModel'
import { type ComputedRef, computed, onMounted } from 'vue'
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

onMounted((): void => {
  scrollToModelView()
})

function scrollToModelView(): void {
  const element: HTMLElement | null = document.getElementById('model-view')
  setTimeout(() => {
    element?.scrollIntoView({ behavior: 'smooth' })
  }, 100)
}
</script>

<template>
  <section class="model-view" id="model-view">
    <h1>{{ model.name }}</h1>
    <img :src="`/images/${model.img}`" :alt="model.name" />
    <p>{{ model.description }}</p>
  </section>
</template>

<style lang="scss">
.model-view {
  margin-top: 50px;
  img {
    float: left;
    margin: 0 15px 15px 15px;
    border-radius: 5px;
  }
}
</style>
