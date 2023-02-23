import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: "/", component: () => import("../views/HomeView.vue"), name: "Home" },
        { path: "/services", component: () => import("../views/ServicesView.vue"), name: "Services" },
        { path: "/team", component: () => import("../views/TeamView.vue"), name: "Team" },
        { path: "/contact", component: () => import("../views/ContactView.vue"), name: "Contact" },
    ],
});

export default router;