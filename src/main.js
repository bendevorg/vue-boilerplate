import Vue from 'vue';
import vuetify from './plugins/vuetify';
import './plugins/analytics';
import './plugins/vue_cookie';
import App from './App';
import router from './router';
import store from './store';
import 'roboto-fontface/css/roboto/roboto-fontface.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
