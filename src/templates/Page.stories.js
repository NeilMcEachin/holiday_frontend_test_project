import Page from '@/templates/Page.vue';

export default {
  title: 'Templates/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args, { argTypes }) => ({
  components: { Page },
  props: Object.keys(argTypes),
  template: '<Page v-bind="$props"/>',
});

export const Desktop = Template.bind({});
Desktop.args = {};
Desktop.paramters = {
  // viewport: {
  //   defaultViewport: 'Tablet',
  // },
};

export const Tablet = Template.bind({});
Tablet.args = {};
Tablet.parameters = {
  viewport: {
    defaultViewport: 'tablet',
  },
};

export const Mobile = Template.bind({});
Mobile.args = {};
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};
