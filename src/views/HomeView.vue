<script setup lang="ts">
import { useJobStore } from "@/stores/jobStore";
import DropZone from "@/components/DropZone.vue";

const store = useJobStore();
</script>

<template>
  <div v-for="item in store.items" :key="item.id">
    <DropZone :list="item.list"></DropZone>
  </div>
</template>
