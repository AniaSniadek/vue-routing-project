<script setup lang="ts">
import { useRouter, type Router } from 'vue-router'

const router: Router = useRouter()
</script>

<template>
  <span class="go-back">
    <button @click="router.back()">Go back</button>
  </span>
</template>

<style lang="scss">
@import '@/assets/styles/colors.scss';

.go-back {
  display: inline-block;
  margin-bottom: 15px;
  button {
    background-color: $mainColor;
    border: 1px solid $secondColor;
    border-radius: 10px;
    padding: 8px 15px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: $secondColor;
    font-weight: 500;
    cursor: pointer;
  }
}
</style>
