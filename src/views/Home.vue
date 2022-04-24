<script setup lang="ts">
import carsData from '@/assets/data.json'
</script>

<template>
  <div class="home">
    <div class="home__cars">
      <router-link
        v-for="car in carsData.cars"
        :key="car.id"
        :to="{ name: 'car.view', params: { id: car.id, name: car.link } }"
      >
        <h2>{{ car.name }}</h2>
        <img :src="`/images/${car.img}`" :alt="car.name" />
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/colors.scss';

.home {
  padding: 0 15px;

  &__cars {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;

    h2 {
      color: $secondColor;
    }

    img {
      height: 140px;
      width: 210px;
    }
  }
}
</style>
