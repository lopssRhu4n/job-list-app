<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <header
    class="w-full flex items-center px-4 h-44 bg-primary bg-no-repeat sm:bg-header-desk bg-center bg-cover bg-header-mob"
  >
    <font-awesome-icon icon="fa fa-home" class="text-3xl" />
  </header>
  <main
    class="w-full flex justify-center py-8 items-center flex-col gap-20 md:gap-5 bg-background"
  >
    <RouterView />
  </main>
</template>
