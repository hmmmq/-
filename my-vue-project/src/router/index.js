import { createRouter, createWebHistory } from "vue-router";

// 引入PG组件
import HomePage from "@/views/HomePage.vue";

// 路由配置
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },

  { path: "/:pathMatch(.*)*", component: <div>404</div> },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
