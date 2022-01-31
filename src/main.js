import Vue from 'vue';
import VueTransitionCollection from 'vue-transition-collection';
import VueMasonry from 'vue-masonry-css';
import Vuebar from 'vuebar';
import App from './App.vue';
import router from './router';
import store from './store';
import 'animate.css/animate.compat.css';

Vue.use(VueTransitionCollection);
Vue.use(VueMasonry);

Vue.use(Vuebar);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
