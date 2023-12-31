import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProfileView from "../views/ProfileView.vue";
import CouponView from "../views/CouponView.vue";
import HistoryView from "../views/HistoryView.vue";
import StoreView from "../views/StoreView.vue";
import MenuView from "../views/MenuView.vue";

const routes: Array<RouteRecordRaw> = [
  /*
  {
    path: "",
    name: "Home",
    component: HomeView,
  },
  */
  {
    path: "/store/:storeID",
    name: "store",
    props: true,
    component: StoreView,

    children: [
      { path: "menu", component: MenuView },
      { path: "profile", component: ProfileView },
      { path: "coupon", component: CouponView },
      { path: "history", component: HistoryView },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
