<script setup lang="ts">
import { useRouter, type Router } from 'vue-router'

const router: Router = useRouter()
</script>

<template>
  <span class="go-back">
    <button @click="router.back()">Go back</button>
  </span>
</template>
