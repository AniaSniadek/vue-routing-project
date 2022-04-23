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
@import '../src/assets/styles/main.css';

*,
*:before,
*:after {
  box-sizing: border-box;
}
body {
  padding: 0;
  margin: 0;
  margin-top: 150px;
  background: #eee;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a,
a:visited {
  color: #2c3e50;
}
.container {
  margin: 0 auto;
  max-width: 960px;
}

a {
  text-decoration: none;
  font-weight: bold;
  color: white;
}
</style>
