import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import HotelListing from "./pages/HotelListing.vue";
import { createRouter, createWebHistory } from "vue-router";
import ManagerDashboard from "./pages/admin/ManagerDashboard.vue";
import Reservations from "./pages/admin/Reservations.vue";
import GuestRegister from "./pages/GuestRegister.vue";
import GuestLogin from "./pages/GuestLogin.vue";
import AdminRegister from "./pages/admin/ManagerRegister.vue";
import AdminLogin from "./pages/admin/managerLogin.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: GuestLogin,
  },
  {
    path: "/register",
    name: "register",
    component: GuestRegister,
  },
  {
    path: "/Hotels",
    name: "hotels",
    component: HotelListing,
  },

  {
    path: "/managerDashboard",
    name: "dashboard",
    component: ManagerDashboard,
  },
  {
    path: "/manager",
    name: "adminlogin",
    component: AdminLogin,
  },

  {
    path: "/managerregister",
    name: "adminregister",
    component: AdminRegister,
  },
  {
    path: "/reservation",
    name: "reservation",
    component: Reservations,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
