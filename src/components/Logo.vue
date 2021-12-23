<template>
  <GIcon name="logo" class="logo" />
</template>

<script>
import GIcon from '@/components/base/GIcon.vue';

export default {
  components: {
    GIcon,
  },
};
</script>

<style lang="scss" scoped>
.logo {
  &:hover {
    ::v-deep path {
      fill: white;
    }
  }
}
</style>
