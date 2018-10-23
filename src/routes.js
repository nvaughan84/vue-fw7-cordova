import HomePage from './pages/homepage.vue';
import AboutPage from './pages/about.vue'
import LoginPage from './pages/login.vue'

export default [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '(.*)',
    component: HomePage
  }
];
