import { createRouter, createWebHistory } from "vue-router";
import ProductDashboardView from "../views/ProductDashboardView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: ProductDashboardView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
