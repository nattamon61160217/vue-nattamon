//  router การกำหนดurl
import {
  createRouter,
  createWebHistory,
}from 'vue-router/dist/vue-router.esm-bundler';
import main from './pages/main.vue';
import detail from './pages/detail.vue';

// ถ้าเข้า path / ปกติคือเข้าหน้า home
const routes = [
  { path: '/', name: 'home', component: main },
  // /device/:id ตามด้วยไอดีที่เข้ามา
  { path: '/device/:id', name: 'device', component: detail },
];

export default createRouter({
  // historyการจำpathเมื่อกดกลับ
  history: createWebHistory(),
  routes,
});
