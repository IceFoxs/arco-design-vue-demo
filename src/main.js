import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import App from './App.vue';
import './style.css';
import '@arco-design/web-vue/dist/arco.css';
import '@arco-design/web-vue/dist/arco-vue-icon.js';
import '@arco-design/web-vue/dist/arco-vue.js';

const app = createApp(App);
app.use(ArcoVue);
app.mount('#app');

//createApp(App).mount('#app')
