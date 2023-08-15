import { createRouter, createWebHistory } from "vue-router";
import Login from "../features/auth/Login.vue";

// admin
import LayoutAdmin from "../features/admin/admin-layout/Layout.vue";
import Dashboard from "../features/admin/dasboard/Dasboard.vue";
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

  {
    path: "/admin",
    name: "layout admin",
    component: LayoutAdmin,
    children: [
      {
        path: "",
        name: "dashboard",
        component: Dashboard,
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
