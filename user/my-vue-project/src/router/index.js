import { createRouter, createWebHistory } from "vue-router";



// 路由配置
const routes = [
 
  { path: "/:pathMatch(.*)*", component: <div>404</div> },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
