<template>
  <div class="holiday-card" @mouseenter="isHovering = true" @mouseleave="isHovering = false">
    <vtc-fade mode="in-out" direction="toggle" duration="300" delay="0" group>
      <GThumbnail v-show="isHovering" :src="backSrc" aspectRatio="1:1" key="back" />
      <GThumbnail v-show="!isHovering" :src="frontSrc" aspectRatio="1:1" key="front" />
    </vtc-fade>
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
  },
  data() {
    return {
      isHovering: false,
    };
  },
  computed: {
    currentSrc() {
      if (this.isHovering) {
        return this.backSrc;
      }
      return this.frontSrc;
    },
  },
};
</script>

<style lang="scss" scoped>
.holiday-card {
  position: relative;
  width: 220px;
  height: 220px;
  cursor: pointer;
  .g-thumbnail {
    position: absolute;
    top: 0;
    left: 0;
    ::v-deep .g-thumbnail__wrapper {
      background: none;
    }
  }
}
</style>
