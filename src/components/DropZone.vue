<script setup lang="ts">
import { useJobStore } from "@/stores/jobStore";
import JobCard from "./JobCard.vue";

const props = defineProps<{
  list: number;
}>();

const store = useJobStore();

const onDrop = (event: any, list: number) => {
  const itemId = event.dataTransfer.getData("itemID");
  const item = store.items.find((item) => item.id == itemId);
  if (item) item.list = list;
};
</script>
<template>
  <div
    class="drop-zone min-h-[50px]2"
    @drop="onDrop($event, props.list)"
    @dragenter.prevent
    @dragover.prevent
  >
    <JobCard :list="props.list" />
  </div>
</template>
