import { createRouter, createWebHashHistory } from "vue-router";

import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import Posts from "../pages/Posts.vue";
import Users from "../pages/Users.vue";
import Gallery from "../pages/Gallery.vue";
import Footer from "../components/Footer.vue";


const routes = [
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Footer,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/users',
    name: 'users',
    component: Users,
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts,
  },

  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery,
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;