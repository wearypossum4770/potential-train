import { createRouter, createWebHistory } from "vue-router";
import routes from "@/router/routes";
const behavior = "smooth";
const sendToAnalytics = (data) => {
  console.log(data);
};
const router = createRouter({
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return { savedPosition, behavior };
    return { top: 0, behavior };
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
// router.afterEach(()=> {})
router.beforeEach((to, _from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
// router.afterEach((to, from, failure) => {
//   if (!failure) sendToAnalytics(to.fullPath)
// })
