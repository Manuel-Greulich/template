import './bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import { createApp } from 'vue';
import app from "./components/App.vue";
import vuetify from './vuetify';
import router from './router';
import axios from 'axios'
import VueAxios from 'vue-axios';

createApp(app)
  .use(VueAxios, axios)
  .use(vuetify)
  .use(router)
  .mount('#app');
