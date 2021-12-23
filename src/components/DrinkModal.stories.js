import DrinkModal from '@/components/DrinkModal.vue';

export default {
  title: 'Molecules/DrinkModal',
  component: DrinkModal,
};

const Template = (args, { argTypes }) => ({
  components: { DrinkModal },
  props: Object.keys(argTypes),
  template: '<DrinkModal v-bind="$props"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  show: true,
  title: 'El Gregorita',
  ingredients: [
    '2 oz. of homemade jalapeño-infused tequila (preferably Casamigos with a jalapeño and its seeds infused for about 10 hours)',
    '1 oz. Triple Sec',
    '1 oz. simple syrup',
    '1 oz. fresh lime juice',
    'Sliced limes',
    'Rock salt',
  ],
  steps: [
    'Dip the rim of your glass in freshly squeezed lime juice and then dip the glass rim in rock salt',
    'Fill glass halfway with ice before adding all of your ingredients',
    'Stir and enjoy!',
  ],
  mocktail: 'Infuse Topo Chico with jalapeño and replace tequila above, keep the rest the same.',
  glassware:
    "A rocks glass (a.k.a. an old fashioned glass or a lowball glass) will do the trick, hell a solo cup will work. It's the liquid that's gold!",
};
