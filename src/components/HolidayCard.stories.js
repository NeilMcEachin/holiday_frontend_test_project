import HolidayCard from '@/components/HolidayCard.vue';

export default {
  title: 'Molecules/HolidayCard',
  component: HolidayCard,
};

const Template = (args, { argTypes }) => ({
  components: { HolidayCard },
  props: Object.keys(argTypes),
  template: '<HolidayCard v-bind="$props"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  frontSrc: 'https://static-asset-hosting.s3.amazonaws.com/test-projects/2022-frontend/card1_front.png',
  backSrc: 'https://static-asset-hosting.s3.amazonaws.com/test-projects/2022-frontend/card1_back.png',
};
