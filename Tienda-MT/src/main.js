import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";

import Incio from "./Pages/Inicio.vue";
import Nosotros from "./Pages/Nosotros.vue";
import Catalogo from "./Pages/Catalogo.vue";
import Contacto from "./Pages/Contacto.vue";

const routes = [
    { path: "/", component: Incio },
    { path: "/nosotros", component: Nosotros },
    { path: "/catalogo", component: Catalogo },
    { path: "/contacto", component: Contacto },
  ];


  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  const app = createApp(App);
  
  app.use(router);
  
  app.mount("#app");
  