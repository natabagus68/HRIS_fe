<script setup lang="ts">
import { TheCard } from "flowbite-vue";
import { useLogin } from "./login-model";
const model = useLogin();
</script>

<template>
  <div>
    <the-card
      href="#"
      variant="horizontal"
      img-src="https://flowbite.com/docs/images/blog/image-4.jpg"
      img-alt="Desk"
    >
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        Noteworthy technology acquisitions 2021
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </the-card>
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
