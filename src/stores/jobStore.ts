import { defineStore } from "pinia";
import data from "@/util/data.json";
import { ref } from "vue";

export const useJobStore = defineStore("jobs", () => {
  const items = ref(data);

  return { items };
});
