import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/user",
      name: "user",
      component: () => import("@/views/userView.vue"),
    },
    {
      path: "/dev",
      name: "dev",
      component: () => import("@/views/devView.vue"),
    },
  ],
});

export default router;
