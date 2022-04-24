<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavigation from './components/TheNavigation.vue'
</script>

<template>
  <TheNavigation />
  <div class="container">
    <RouterView />
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/colors.scss';

*,
*:before,
*:after {
  box-sizing: border-box;
}
body {
  padding: 0;
  margin: 0;
  margin-top: 150px;
  background: $background;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $secondColor;
}
.container {
  margin: 0 auto;
  max-width: 1100px;
}

a {
  text-decoration: none;
  font-weight: bold;
}
</style>
