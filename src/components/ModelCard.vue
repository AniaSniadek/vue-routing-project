<script setup lang="ts">
import type { CarModel } from '@/models/CarModel'

const props: {
  model: CarModel.Model
} = defineProps<{
  model: CarModel.Model
}>()
</script>

<template>
  <div class="card">
    <img :src="`/images/${props.model.img}`" :alt="props.model.name" />
    <span class="card__text">
      {{ props.model.name }}
    </span>
  </div>
</template>
