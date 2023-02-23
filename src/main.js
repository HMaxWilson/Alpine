import { createApp } from "vue";
import { createPinia } from "pinia";
import VueSplide from "@splidejs/vue-splide";
import App from "./App.vue";
import router from "./router";

import "./assets/css/tailwind.css";
import "./assets/css/main.css";
import '@splidejs/splide/dist/css/splide.min.css';

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(VueSplide);

app.mount("#app");