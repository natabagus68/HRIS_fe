<script setup lang="ts">
import { Input, Button } from "flowbite-vue";
import { useLogin } from "./login-model";
import EyeIcon from "../../common/components/icons/EyeIcon.vue";
import EyeCloseIcon from "../../common/components/icons/EyeCloseIcon.vue";
const model = useLogin();
</script>

<template>
  <div class="h-screen w-full flex md:flex-row">
    <div class="hidden md:flex md:w-full h-full items-center justify-center">
      <img
        src="/login/santuy.png"
        alt="Background Image"
        class="w-[700px] h-[466.667px]"
      />
    </div>
    <div
      class="flex flex-col justify-center p-8 w-full md:w-1/2 h-full bg-white"
    >
      <div class="mb-8 text-center md:text-left">
        <img
          src="/logoql.png"
          alt="Logo Perusahaan"
          class="mx-auto mb-4 md:mx-0"
        />
        <h2 class="text-2xl font-bold">Welcome back</h2>
        <span class="text-gray-600">Silahkan masuk ke akun anda</span>
      </div>
      <div
        class="flex flex-col gap-5 justify-center outline-none md:w-[400px] w-full"
      >
        <Input
          :style="{ color: 'rgb(75, 85, 99)' }"
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
        <Button class="bg-sky-500 hover:bg-sky-700 duration-300 w-full"
          >Masuk</Button
        >
      </div>
    </div>
  </div>
</template>
