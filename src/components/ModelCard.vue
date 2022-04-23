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

<style lang="scss">
.card {
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  transition: 0.2s ease transform;

  &__text {
    background: #2c3e50;
    color: white;
    display: block;
    border-top: 2px solid #4e6c71;
    padding: 10px;
  }
}

.card:hover {
  transform: scale(1.05);
}
</style>
