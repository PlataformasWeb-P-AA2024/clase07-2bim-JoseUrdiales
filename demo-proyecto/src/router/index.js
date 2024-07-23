import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../components/HelloWorld.vue';
import ListaEdificios from '../components/ListaEdificios.vue';


const routes = [
  { path: '/edificios',
  name: 'ListaEdificios',
  component: ListaEdificios },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
