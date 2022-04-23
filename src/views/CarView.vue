<script setup lang="ts">
import { RouterView } from 'vue-router'
import { computed, type ComputedRef } from '@vue/reactivity'
import { useRoute, type RouteLocationNormalizedLoaded } from 'vue-router'
import type { CarModel } from '@/models/CarModel'
import carsData from '@/assets/data.json'
import ModelCard from '../components/ModelCard.vue'
import GoBack from '../components/GoBack.vue'

const route: RouteLocationNormalizedLoaded = useRoute()
const carId: ComputedRef<number> = computed<number>(() => +route.params.id)
const car: ComputedRef<CarModel.Car> = computed<CarModel.Car>(
  () => carsData.cars.find((car) => car.id === carId.value) as CarModel.Car
)
</script>

<template>
  <section class="car-view">
    <GoBack />
    <h1>{{ car?.name }}</h1>
    <div class="car-view__details">
      <img :src="`/images/${car.img}`" :alt="car.name" />
      <p>{{ car?.description }}</p>
    </div>
  </section>
  <section class="models">
    <h2>{{ car.name }} models</h2>
    <div class="models__cards">
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

<style lang="scss">
.car-view {
  &__details {
    display: flex;
    gap: 30px;
    align-items: center;

    img {
      border-radius: 4px;
      border: 3px solid white;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    }
  }
}

.models {
  padding-top: 30px;
  padding-bottom: 60px;
  margin-top: 30px;
  border-top: 1px solid #d4d4d4;
  box-shadow: 0px -1px #fbfbfb;

  img {
    width: 250px;
    height: 150px;
    object-fit: cover;
    display: block;
  }

  &__cards {
    display: flex;
    gap: 20px;
    text-align: center;
  }
}
</style>
