import { createRouter, createWebHistory } from "vue-router";
import Login from "../features/auth/Login.vue";

// admin
import LayoutAdmin from "../features/admin/admin-layout/Layout.vue";
import Dashboard from "../features/admin/dasboard/Dasboard.vue";
import Devisi from "../features/admin/devisi/Devisi.vue";
// const Root = {
//   template: `
//     <div>
//       <router-view></router-view>
//     </div>
//   `,
// };

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
        path: "devisi",
        name: "devisi",
        component: Devisi,
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
