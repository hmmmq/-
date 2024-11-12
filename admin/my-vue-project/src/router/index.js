import { createRouter, createWebHistory } from "vue-router";

// 引入PG组件

import LoginPage from "@/views/LoginPage.vue";
import UserPage from "@/views/UserPage.vue";

// 路由配置
const routes = [
  {
    path: "/user",
    name: "UserPage",
    component: UserPage,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  { path: "/:pathMatch(.*)*", component: <div>404</div> },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
