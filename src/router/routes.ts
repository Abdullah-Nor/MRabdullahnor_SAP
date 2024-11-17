import { RouteRecordRaw } from 'vue-router';
import { IRouteMeta } from './route.meta';
import LoginPage from 'src/pages/auth/LoginPage.vue';

declare module 'vue-router' {
  interface RouteMeta extends IRouteMeta {
    description?: string;
    keywords?: string[];
    role?: string | string[];
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: '/get-started',
    name: 'get-started',
    component: () => import('layouts/GetStartedLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/GetStartedPage.vue'),
      },
    ],
  },
  {
    path: '/auth',
    component: () => import('layouts/PlainLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: LoginPage,
        meta: {
          anonygmous: true,
        },
      },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/IndexPage.vue'),
        meta: {
          requiresLogin: true,
          menu: 'Home',
          title: 'Home Page',
          icon: 'home',
        },
      },
      {
        path: 'student',
        component: () => import('pages/students/StudentsPage.vue'),
        meta: {
          menu: 'Student',
          title: 'Student Page',
          icon: 'person',
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
