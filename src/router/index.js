import { createRouter, createWebHistory } from 'vue-router';
import Todos from '../components/Todos.vue';
import Post from '../components/Post.vue';
import Albums from '../components/Albums.vue';
import Photos from '../components/Photos.vue';
import PhotoDetail from '../components/PhotoDetail.vue'; // Import komponen baru

const routes = [
  { path: '/', redirect: '/todos' },
  { path: '/todos', component: Todos },
  { path: '/posts', component: Post },
  { path: '/albums', component: Albums },
  { path: '/albums/:id', component: Photos, props: true },
  { path: '/photos/:id', component: PhotoDetail, props: true } // Tambahkan rute baru
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
