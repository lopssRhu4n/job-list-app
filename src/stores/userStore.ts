import { defineStore } from "pinia";
import data from "@/util/user.json";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref(data);

  function setInfo(id: number, newInfo: string) {
    user.value[id].text = newInfo;
  }

  return { user, setInfo };
});
