const custom = require('../node_modules/@vue/cli-service/webpack.config.js');
const path = require('path');
module.exports = {
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  babel: async (options) => ({
    ...options,
    plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-private-methods'],
  }),
  framework: '@storybook/vue',
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  webpackFinal: async (config) => {
    return {
      ...config,
      module: { ...config.module, rules: custom.module.rules },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '/src/'),
          vue: 'vue/dist/vue.js',
        },
      },
    };
  },
};
