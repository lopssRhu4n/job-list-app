<script setup lang="ts">
import { ref } from "vue";
import { RouterView, RouterLink } from "vue-router";

const showDrawer = ref(false);
</script>

<template>
  <transition name="fade">
    <div
      v-if="showDrawer"
      class="h-screen z-20 bg-white w-2/5 fixed top-0 right-0 flex py-8 gap-[25%] transition-all items-center flex-col md:w-1/6"
    >
      <button
        class="hover:bg-primary transition-all w-full h-20 hover:text-VeryDarkCyan"
        @click="showDrawer = !showDrawer"
      >
        <font-awesome-icon icon="fa fa-bars" class="text-3xl" />
      </button>
      <div class="flex h-2/6 justify-center gap-2 flex-col w-full items-center">
        <RouterLink
          class="w-full h-12 transition-all hover:bg-primary hover:text-VeryDarkCyan flex items-center justify-center"
          to="/"
        >
          <font-awesome-icon icon="fa fa-home" class="text-xl" />
        </RouterLink>
        <RouterLink
          class="w-full h-12 transition-all hover:bg-primary hover:text-VeryDarkCyan flex items-center justify-center"
          to="/user"
        >
          <font-awesome-icon icon="fa fa-user-tie" class="text-xl" />
        </RouterLink>
        <RouterLink
          class="w-full h-12 transition-all hover:bg-primary hover:text-VeryDarkCyan flex items-center justify-center"
          to="/dev"
        >
          <font-awesome-icon icon="fa fa-code" class="text-xl" />
        </RouterLink>
      </div>
    </div>
  </transition>
  <transition name="fade-blur">
    <div
      v-if="showDrawer"
      class="h-screen transition-all w-screen fixed z-10 bg-gray-400 opacity-30"
    ></div>
  </transition>

  <header
    class="w-full flex items-center justify-end px-8 h-[20%] bg-primary bg-no-repeat sm:bg-header-desk bg-center bg-cover bg-header-mob"
  >
    <button
      v-if="!showDrawer"
      class="p-4 rounded-lg transition-all hover:bg-background"
      @click="showDrawer = !showDrawer"
    >
      <font-awesome-icon icon="fa fa-bars" class="text-3xl" />
    </button>
  </header>

  <main
    class="w-full min-h-[80%] flex justify-center py-8 items-center flex-col gap-20 md:gap-5 bg-background"
  >
    <RouterView />
  </main>
</template>
