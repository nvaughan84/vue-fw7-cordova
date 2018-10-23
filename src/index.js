/* my-app.js */

// Import Vue
import Vue from 'vue'

import VueRouter from "vue-router"

// Import F7 Bundle
import Framework7 from 'framework7/framework7.esm.bundle.js'

// Import F7-Vue Plugin Bundle (with all F7 components registered)
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js'

import Framework7Styles from 'framework7/css/framework7.css';


// Init F7-Vue Plugin
Framework7.use(Framework7Vue);

// Import Main App component
import App from './app.vue';

// Init App
new Vue({
  el: '#app',
  render: (h) => h(App),
  // ...
});