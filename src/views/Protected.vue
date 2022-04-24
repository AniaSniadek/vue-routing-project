<script setup lang="ts">
import { type Router, useRouter } from 'vue-router'

const router: Router = useRouter()

function logout(): void {
  sessionStorage.removeItem('user')
  router.push({ name: 'login' })
}
</script>

<template>
  <section class="protected">
    <h1>Protected page</h1>
    <button @click="logout">Logout</button>
  </section>
</template>
<style lang="scss">
@import '@/assets/styles/colors.scss';

.protected {
  padding: 0 15px;
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
