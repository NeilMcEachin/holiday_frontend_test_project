<template>
  <div class="drink-card" @mouseenter="isHovering = true" @mouseleave="isHovering = false">
    <!-- <vtc-fade mode="in-out" direction="toggle" duration="300" delay="0" group> -->
    <div class="flip-card-inner" :class="{ flipped }">
      <GThumbnail class="drink-card__front" :src="frontSrc" aspectRatio="1:1" />
      <GThumbnail class="drink-card__back" :src="backSrc" aspectRatio="1:1" />
    </div>
    <!-- </vtc-fade> -->
  </div>
</template>

<script>
import GThumbnail from '@/components/base/GThumbnail.vue';

export default {
  components: {
    GThumbnail,
  },
  props: {
    frontSrc: {
      type: String,
      default: null,
    },
    backSrc: {
      type: String,
      default: null,
    },
    flipped: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isHovering: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.drink-card {
  position: relative;
  width: 220px;
  height: 220px;
  cursor: pointer;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */

  /* This container is needed to position the front and back side */
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease;
    transform-style: preserve-3d;

    &.flipped {
      transform: rotateY(180deg);
    }
  }

  /* Do an horizontal flip when you move the mouse over the flip box container */
  &:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  .g-thumbnail {
    position: absolute;
    top: 0;
    left: 0;
    // width: 100%;
    // height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    ::v-deep .g-thumbnail__wrapper {
      background: none;
    }
  }
  &__back {
    transform: rotateY(180deg);
  }
}
</style>
