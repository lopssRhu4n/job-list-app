<script lang="ts" setup>
import { useUserStore } from "@/stores/userStore";
import UserInfoLabel from "@/components/UserView/UserInfoLabel.vue";

const store = useUserStore();
</script>

<template>
  <div
    class="flex relative h-[600px] gap-5 w-full max-w-2xl flex-col items-center justify-center md:rounded-lg md:shadow-xl md:bg-white"
  >
    <font-awesome-icon
      icon="fa fa-user"
      class="text-[50px] border border-primary p-10 rounded-full bg-white absolute -top-24 right-[50%] translate-x-[50%]"
    />

    <h1 class="absolute -top-36 text-white text-2xl uppercase">
      {{ store.user[0].text }}
    </h1>

    <div
      v-for="(info, key) in store.user"
      :key="key"
      class="flex items-center pb-2 w-full px-8 max-w-xl border-b border-gray-700 justify-between h-12"
    >
      <UserInfoLabel :text="info.text" :icon="info.icon" :id="key" />
    </div>

    <div class="w-2/5 flex justify-around">
      <a href="https://www.linkedin.com/in/rhuan-lopes-881009259/">
        <font-awesome-icon
          icon="fa-brands fa-linkedin"
          class="text-3xl transition-all hover:text-VeryDarkCyan"
        />
      </a>
      <a href="https://github.com/lopssRhu4n">
        <font-awesome-icon
          icon="fa-brands fa-github"
          class="text-3xl transition-all hover:text-VeryDarkCyan"
        />
      </a>
    </div>
  </div>
</template>
