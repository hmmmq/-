import { createRouter, createWebHistory } from "vue-router";
import IndexPage from "@/views/IndexPage.vue";
// 引入PG组件

// 路由配置
const routes = [
  { path: "/", component: IndexPage },
  { path: "/:pathMatch(.*)*", component: <div>404</div> },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
