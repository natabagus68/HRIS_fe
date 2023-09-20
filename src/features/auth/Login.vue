<script setup lang="ts">
import { TheCard, Input, Button } from "flowbite-vue";
import { useLogin } from "./login-model";
import EyeIcon from "../../common/components/icons/EyeIcon.vue";
import EyeCloseIcon from "../../common/components/icons/EyeCloseIcon.vue";
const model = useLogin();
</script>

<template>
  <div class="w-screen h-screen absolute flex justify-center items-center">
    <the-card class="hover:bg-white w-1/2">
      <h5
        class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white"
      >
        Sign in
      </h5>
      <div class="mt-5 flex flex-col gap-5 justify-center outline-none">
        <Input
          :style="{
            color: 'rgb(75, 85, 99)',
          }"
          placeholder="Email"
          label="Email"
          type="email"
          name="email"
          :value="model.form.value.email"
          :onchange="model.handleChange"
        />
        <div class="relative">
          <button
            class="cursor-pointer block p-2 absolute z-10 top-8 right-2"
            @click="model.passwordEvent"
          >
            <div v-if="model.passwordShow.value === false">
              <EyeCloseIcon :size="20" :class="'text-gray-600'" />
            </div>
            <div v-if="model.passwordShow.value === true">
              <EyeIcon :size="20" :class="'text-gray-600'" />
            </div>
          </button>

          <Input
            :style="{ color: 'rgb(75, 85, 99)' }"
            name="password"
            :value="model.form.value.password"
            :onchange="model.handleChange"
            placeholder="password"
            label="Password"
            :type="model.passwordShow.value === false ? 'password' : 'text'"
          />
        </div>
        <Button class="bg-sky-500 hover:bg-sky-700">Sign in</Button>
      </div>
    </the-card>
  </div>
</template>
