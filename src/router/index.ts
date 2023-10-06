import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import TasksList from '@/views/TasksList.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: TasksList,
  },
  {
    path: '/parametres',
    name: 'parametres',
    component: () => import('../views/SettingsPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
