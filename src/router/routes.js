export default [
  {
    name: "disclaimer",
    path: "/",
    component: () => import("@/views/disclaimer/index.vue"),
  },
  {
    name: "home",
    path: "/home",
    component: () => import("@/views/home.vue"),
  },
];
