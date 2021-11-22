const { createApp } = require('vue');
import App from './App.vue';
import router from './router';

// .use ใช้router
createApp(App).use(router).mount('#app');
