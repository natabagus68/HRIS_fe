<script setup lang="ts">
import BookIcon from "./icons/BookIcon.vue";
const { name, to } = defineProps(["name", "to", "icon"]);
</script>

<template>
  <div class="py-2.5 pl-3.5">
    <RouterLink :to="to">
      <h1 class="text-white flex items-center gap-3">
        <slot>
          <BookIcon />
        </slot>
        {{ name.toUpperCase() }}
      </h1>
    </RouterLink>
  </div>
</template>
