<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { useRouter, type Router } from 'vue-router'

const router: Router = useRouter()

const username: Ref<string> = ref<string>('')
const password: Ref<string> = ref<string>('')

function onSubmit(): void {
  if (username.value === 'admin' && password.value === 'admin') {
    sessionStorage.setItem('user', username.value)
    router.push({ name: 'protected' })
  } else {
    alert('Invalid login or password! Try: admin')
  }
}
</script>

<template>
  <div class="login">
    <form class="login__form" @submit.prevent="onSubmit">
      <h1>Login</h1>
      <label for="username">Username</label>
      <input
        v-model="username"
        type="text"
        name="username"
        class="login__input"
      />
      <label for="password">Password</label>
      <input
        v-model="password"
        type="text"
        name="password"
        class="login__input"
      />
      <button class="login__btn" type="submit">Login</button>
    </form>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/colors.scss';

.login {
  &__form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
  }
  &__input {
    border: 1px solid $secondColor;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
  }
  &__btn {
    background-color: $secondColor;
    color: $white;
    font-weight: 500;
    padding: 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
}
</style>
