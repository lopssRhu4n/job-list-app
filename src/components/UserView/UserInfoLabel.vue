<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps<{
  icon: string;
  text: string;
}>();

const editMode = ref(false);
</script>

<template>
  <font-awesome-icon :icon="props.icon" class="text-xl text-VeryDarkCyan" />
  <h2 class="text-gray-800" v-if="!editMode">{{ props.text }}</h2>
  <input
    type="text"
    class="h-full outline-none border border-primary shadow-sm px-2"
    :placeholder="props.text"
    v-if="editMode"
  />
  <button
    class="p-2 transition-all hover:bg-primary hover:text-white rounded-md"
    @click="editMode = !editMode"
  >
    <font-awesome-icon icon="fa fa-pen-to-square" class="text-sm" />
  </button>
</template>
