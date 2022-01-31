// import 'https://assets.24g.com/public/2022-frontend-test-project/fonts.css';
// import Vue from 'vue';
// import VueTransitionCollection from 'vue-transition-collection';
// import 'animate.css/animate.min.css';
// Vue.use(VueTransitionCollection);
// eslint-disable
import '@/main.js';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
