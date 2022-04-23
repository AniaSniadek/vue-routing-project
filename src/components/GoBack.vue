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
.go-back {
  display: inline-block;
  margin-bottom: 15px;
  button {
    background-color: #2c3e50;
    border: 1px solid grey;
    border-radius: 10px;
    padding: 8px 15px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: white;
    cursor: pointer;
  }
}
</style>
