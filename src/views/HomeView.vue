<script setup lang="ts">
import { useJobStore } from "@/stores/jobStore";
import DropZone from "@/components/DropZone.vue";

const store = useJobStore();
</script>

<template>
  <div class="flex justify-center py-8 items-center flex-col gap-20 md:gap-5">
    <div v-for="item in store.items" :key="item.id">
      <DropZone :list="item.list"></DropZone>
    </div>
  </div>
</template>
