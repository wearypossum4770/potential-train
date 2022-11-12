import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "@/router";
import errorHandler from '@/core/errorHandler'

import "@/assets/css/main.css";

const pinia = createPinia();
const app = createApp(App);
app.use(router).use(pinia).mount("#app");

app.config.errorHandler = errorHandler
