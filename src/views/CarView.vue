<script setup lang="ts">
import { RouterView } from 'vue-router'
import { computed, type ComputedRef } from '@vue/reactivity'
import { useRoute, type RouteLocationNormalizedLoaded } from 'vue-router'
import type { CarModel } from '@/models/CarModel'
import carsData from '@/assets/data.json'
import ModelCard from '../components/ModelCard.vue'

const route: RouteLocationNormalizedLoaded = useRoute()
const carId: ComputedRef<number> = computed<number>(() => +route.params.id)
const car: ComputedRef<CarModel.Car> = computed<CarModel.Car>(
  () => carsData.cars.find((car) => car.id === carId.value) as CarModel.Car
)
</script>

<template>
  <section class="destination">
    <h1>{{ car?.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${car.img}`" :alt="car.name" />
      <p>{{ car?.description }}</p>
    </div>
  </section>
  <section class="experiences">
    <h2>{{ car.name }} models</h2>
    <div class="cards">
      <router-link
        v-for="model in car.models"
        :key="model.name"
        :to="{ name: 'model.view', params: { model: model.link } }"
      >
        <ModelCard :model="model" />
      </router-link>
    </div>
    <RouterView />
  </section>
</template>
