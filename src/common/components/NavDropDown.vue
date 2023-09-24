<script setup>
import {
  Accordion,
  AccordionPanel,
  AccordionHeader,
  AccordionContent,
} from "flowbite-vue";
import BookIcon from "./icons/BookIcon.vue";
import ChevronRight from "./icons/ChevronRight.vue";
import { ref } from "vue";
const { name } = defineProps(["name"]);
const active = ref(false);
</script>

<template>
  <div class="w-full pl-4">
    <div
      class="py-2.5 flex items-center gap-24 cursor-pointer"
      @click="active = !active"
    >
      <h1 class="text-white flex items-center gap-3">
        <BookIcon />
        {{ name.toUpperCase() }}
      </h1>
      <div
        class="duration-150"
        :class="active == true ? '-rotate-90' : 'rotate-0'"
      >
        <ChevronRight />
      </div>
    </div>
    <div class="flex flex-col" v-if="active == true">
      <slot></slot>
    </div>
  </div>
</template>
