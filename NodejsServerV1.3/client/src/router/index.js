import { createRouter, createWebHistory } from "vue-router";//import funtion from vue
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",//main parh name
    component: HomeView,
  },
  {
    path: "/create",
    name: "Create",//creat path name
    component: () =>
      import("../views/Create.vue"),
  },
  {
    path: "/update/:id",
    name: "Update",
    component: () =>//update path name
      import("../views/Update.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),//web history creater
  routes,//use our router to create a web site history
});

export default router
