<template>
  <div class="page">
    <Logo class="logo" />
    <slot></slot>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue';

export default {
  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  min-height: 100vh;
  background-image: url('https://static-asset-hosting.s3.amazonaws.com/test-projects/2022-frontend/bg_mobile.png');
  background-position: top center;
  background-size: cover;

  @include bp-md-tablet {
    background-image: url('https://static-asset-hosting.s3.amazonaws.com/test-projects/2022-frontend/bg_tablet.png');
  }

  @include bp-xl-desktop {
    background-image: url('https://static-asset-hosting.s3.amazonaws.com/test-projects/2022-frontend/bg_desktop.png');
  }

  .logo {
    position: absolute;
    top: 30px;
    left: 30px;
    max-width: 70px;

    @include bp-md-tablet {
      top: 40px;
      left: 50px;
      max-width: 100px;
    }

    @include bp-xl-desktop {
      top: 50px;
      left: 50px;
      max-width: 100px;
    }
  }
}
</style>
