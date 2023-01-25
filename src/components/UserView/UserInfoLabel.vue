<script lang="ts" setup>
import { useUserStore } from "@/stores/userStore";
import { ref } from "vue";

const store = useUserStore();
const editText = ref("");

const props = defineProps<{
  icon: string;
  text: string;
  id: number;
}>();

const changeInfo = () => {
  if (editText.value != "") {
    store.setInfo(props.id, editText.value);
    return;
  }

  alert("Texto de edição não pode estar vazio");
};

const editMode = ref(false);
</script>

<template>
  <font-awesome-icon :icon="props.icon" class="text-xl text-VeryDarkCyan" />

  <h2 class="text-gray-800" v-if="!editMode">{{ props.text }}</h2>

  <transition name="fade" mode="out-in">
    <form @submit.prevent v-if="editMode" class="h-full py-1">
      <input
        type="text"
        class="h-full outline-none mr-2 border-VeryDarkCyan border px-2"
        v-model="editText"
        :placeholder="props.text"
      />
      <button
        @click="changeInfo"
        class="transition-all hover:bg-white p-1 rounded-md"
      >
        Edit
      </button>
    </form>
  </transition>
  <button
    class="p-2 transition-all hover:bg-primary hover:text-white rounded-md"
    @click="editMode = !editMode"
  >
    <font-awesome-icon icon="fa fa-pen-to-square" class="text-sm" />
  </button>
</template>
