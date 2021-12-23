<template>
  <component v-if="svgComponent" :is="svgComponent" class="g-icon" :class="[`icon--${name}`, mode, variant]" />
</template>

<script>
import icons from '@/assets/icons';
/**
 * Icons are used to add meaning and improve accessibility.
 * @version 1.0.0
 */
export default {
  name: 'GIcon',
  props: {
    /**
     * The name of the icon.
     */
    name: {
      type: String,
      required: true,
    },
    mode: {
      type: String,
      default: 'light',
    },
    variant: {
      type: String,
      default: null,
    },
  },
  computed: {
    svgComponent() {
      const icon = icons[this.name];
      if (!icon) {
        return false;
      }
      return icon.render ? icon : icon.default;
    },
  },
};
</script>

<style lang="scss" scoped>
.g-icon {
  display: inline-block;
  font-size: 1.5rem;
  // color: $text-color-dark;
  vertical-align: -0.15em;
  fill: currentColor;
  transition: fill 200ms ease-in-out;

  // &.icon {
  //   &--asset_image {
  //     g {
  //       fill: $text-color-dark;
  //     }
  //     &.dark {
  //       g {
  //         fill: $text-color-light;
  //       }
  //     }
  //   }
  // }
  // &.icon--upload_icon {
  //   width: 18px;
  //   height: 22.5px;
  // }

  // &.icon--x_icon {
  //   width: 16px;
  //   height: 16px;
  // }
}
</style>
