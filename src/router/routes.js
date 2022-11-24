import HomeView from "@/views/home.vue";
export default [
  {
    name: "disclaimer",
    path: "/",
    title: "Disclaimer",
    component: () => import("@/views/disclaimer/index.vue"),
  },
  {
    name: "home",
    path: "/home",
    component: HomeView,
  },
];
