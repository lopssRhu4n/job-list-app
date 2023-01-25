import { defineStore } from "pinia";
import data from "@/util/user.json";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref(data);

  return { user };
});
