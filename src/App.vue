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
@import 'https://assets.24g.com/public/2022-frontend-test-project/fonts.css';
// Allow element/type selectors, because this is global CSS.
// stylelint-disable selector-max-type

body {
  margin: 0;
  font-family: Brandon Grotesque, Arial, sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

h1,
h2,
p {
  margin: 0;
}

ul,
ol {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
.text--h1 {
  font-family: Writable Story, Arial, sans-serif;
  font-size: 70px;
}
.text--h2 {
  font-size: 21px;
  line-height: 30px;
  letter-spacing: 1.05px;
}
.text--body {
  font-size: 20px;
  line-height: 28px;
}
</style>
