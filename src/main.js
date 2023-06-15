import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { router } from "./router";

const store = createPinia();

createApp(App).use(router).use(store).mount('#app');
