import { createWebHistory, createRouter } from "vue-router";

import AppList from "@/pages/Applist/index.vue";
import Home from "@/pages/Home/index.vue";
import ServiceDetail from "@/pages/ServiceDetail/index.vue";
import NotFound from "@/pages/NotFound/index.vue";

const routes = [
  {
    path: "/",
    redirect: "/appList",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/appList",
    component: AppList,
  },
  {
    path: "/serviceDetail",
    component: ServiceDetail,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
