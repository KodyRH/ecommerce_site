import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Pages/Home.vue';
import Products from '../Pages/Products.vue'
import Cart from '../Pages/Cart.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/cart', component: Cart }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
