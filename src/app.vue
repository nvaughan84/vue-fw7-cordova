<!-- app.vue -->
<template>
  <f7-app :params="f7params">
    <!-- Current View/Router, initial page will be loaded from home.vue component -->
    <f7-view main url="/"></f7-view>
  </f7-app>
</template>

<script>
  import routes from './routes.js';

  import HomePage from './pages/homepage.vue';
  import AboutPage from './pages/about.vue'
  import LoginPage from './pages/login.vue'

  export default {
    data() {
      return {
        // Framework7 parameters that we pass to <f7-app> component
        f7params: {
          // Array with app routes
          routes,
          // App Name
          name: 'My App',
          // App id
          id: 'com.myapp.test',
          // ...
        }
      }
    },
    mounted() {
      this.$f7ready((f7) => {
        f7.dialog.alert('Yay');
      });
    }
  }
</script>