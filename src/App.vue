<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from '@/views/Home.vue';

export default {
  components: {
    Home,
  },
};
</script>

<style lang="scss">
@import 'https://static-asset-hosting.s3.amazonaws.com/test-projects/2022-frontend/fonts.css';
// Allow element/type selectors, because this is global CSS.
// stylelint-disable selector-max-type

body {
  margin: 0;
  font-family: Brandon Grotesque, Arial, sans-serif;
}

h1 {
  margin: 0;
}
p {
  margin: 0;
}
</style>
