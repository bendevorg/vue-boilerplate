import Vue from 'vue';
import './plugins/vuetify';
import './plugins/vue_cookie';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
