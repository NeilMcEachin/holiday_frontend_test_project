// import 'https://static-asset-hosting.s3.amazonaws.com/test-projects/2022-frontend/fonts.css';
// import Vue from 'vue';
// import VueTransitionCollection from 'vue-transition-collection';
// import 'animate.css/animate.min.css';
// Vue.use(VueTransitionCollection);
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
