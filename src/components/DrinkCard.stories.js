import DrinkCard from '@/components/DrinkCard.vue';

export default {
  title: 'Molecules/DrinkCard',
  component: DrinkCard,
};

const Template = (args, { argTypes }) => ({
  components: { DrinkCard },
  props: Object.keys(argTypes),
  template: '<DrinkCard v-bind="$props"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  frontSrc: 'https://assets.24g.com/public/2022-frontend-test-project/card1_front.png',
  backSrc: 'https://assets.24g.com/public/2022-frontend-test-project/card1_back.png',
};
