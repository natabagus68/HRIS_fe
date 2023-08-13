import { createRouter, createWebHistory } from "vue-router";
import Login from "../features/auth/Login.vue";
const Root = {
  template: `
    <div>
      <router-view></router-view>
    </div>
  `,
};

const routes = [
  {
    path: "",
    name: "login-view",
    component: Login,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
