<script setup lang="ts">
import { useLogin } from "./login-model";
const model = useLogin();
</script>

<template>
  <div>
    <p>Login</p>
    <input
      @input="model.handleChange"
      type="text"
      name="email"
      class="w-32 py-2 px-4 border border-gray-400 rounded-md outline-none"
    />
  </div>

  {{ model.form.value.email }}
</template>
