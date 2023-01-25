<script setup lang="ts">
import { useJobStore } from "@/stores/jobStore";
import { defineProps } from "vue";
const props = defineProps<{
  list: number;
}>();

const store = useJobStore();

const getList = (list: number) => {
  return store.items.filter((item) => item.list == list);
};

const startDrag = (event: DragEvent, item: any) => {
  console.log(event, item);
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("itemID", item.id);
  }
};
</script>

<template>
  <div
    v-for="item in getList(props.list)"
    class="relative shadow-xl border-l-4 rounded-md border-l-primary w-80 flex flex-col bg-white p-5 md:w-[960px] md:flex-row md:justify-between md:items-center"
    :key="item.id"
    draggable="true"
    @dragstart="startDrag($event, item)"
  >
    <img
      :src="item.logo"
      class="h-12 w-12 -top-4 left-1 absolute md:hidden"
      alt=""
    />

    <div class="hidden md:block mr-3">
      <img :src="item.logo" alt="" />
    </div>
    <div
      class="border-b-[0.5px] relative py-4 border-b-gray-400 md:flex md:border-b-0 md:w-5/12 md:gap-x-5 flex-wrap md:gap-y-1"
    >
      <h3 class="text-primary font-bold">{{ item.company }}</h3>
      <div
        v-if="item.new"
        class="w-16 text-sm pt-1 text-center absolute right-[45%] top-[12px] font-bold bg-primary text-white rounded-2xl md:static"
      >
        NEW!
      </div>
      <div
        v-if="item.featured"
        class="text-sm pt-1 absolute w-24 right-[8%] top-[12px] text-white text-center rounded-xl font-bold bg-VeryDarkCyan md:static"
      >
        FEATURED
      </div>
      <h2
        class="font-bold transition-all cursor-pointer hover:text-primary md:w-full"
      >
        {{ item.position }}
      </h2>
      <div>
        <small class="text-gray-400 mx-1 font-bold text-xs">{{
          item.postedAt
        }}</small>
        <small class="text-gray-400 mx-1 font-bold text-xs">{{
          item.contract
        }}</small>
        <small class="text-gray-400 mx-1 font-bold text-xs">{{
          item.location
        }}</small>
      </div>
    </div>
    <div
      class="flex flex-row py-4 gap-x-[2%] flex-wrap md:flex-nowrap gap-y-5 md:w-1/2 md:justify-end"
    >
      <span
        class="bg-background transition-all hover:bg-primary hover:text-white cursor-pointer rounded-md h-10 p-2 font-bold text-primary"
      >
        {{ item.role }}</span
      >
      <span
        class="bg-background transition-all hover:bg-primary hover:text-white cursor-pointer rounded-md h-10 p-2 font-bold text-primary"
      >
        {{ item.level }}</span
      >
      <span
        v-for="lang in item.languages"
        class="bg-background transition-all hover:bg-primary hover:text-white cursor-pointer rounded-md h-10 p-2 font-bold text-primary"
        :key="lang"
        >{{ lang }}</span
      >
      <span
        v-for="tool in item.tools"
        class="bg-background transition-all hover:bg-primary hover:text-white cursor-pointer rounded-md h-10 p-2 font-bold text-primary"
        :key="tool"
        >{{ tool }}</span
      >
    </div>
  </div>
</template>
