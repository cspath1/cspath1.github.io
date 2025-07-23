import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/Home.vue";
import About from "../views/about/About.vue";
import Portfolio from "../views/portfolio/Portfolio.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: 'portfolio',
      children: [
        {
          path: 'portfolio',
          name: 'portfolio',
          component: Portfolio
        },
        {
          path: 'about',
          name: 'about',
          component: About
        }
      ]
    },
  ]
});

export default router;