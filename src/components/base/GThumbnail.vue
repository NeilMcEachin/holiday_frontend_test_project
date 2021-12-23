<template>
  <div class="g-thumbnail">
    <div class="g-thumbnail__wrapper" :class="[assetTypeName, { disabled }]">
      <div class="aspect-box" ref="thumbnail"></div>
      <div v-if="showThumbnail" class="preview" :style="{ backgroundImage: `url(${assetImageUrl})` }"></div>
      <!-- <template v-else-if="showIcon">
        <IconVideo v-if="assetTypeName === 'video'" class="icon video" />
        <IconPDF v-else-if="assetTypeName === 'pdf'" class="icon pdf" />
        <IconWebsite v-else-if="assetTypeName === 'website'" class="icon website" />
        <IconImage v-else-if="assetTypeName === 'image'" class="icon image" />
        <IconPresentation v-else-if="assetTypeName === 'presentation'" class="icon presentation" />
      </template> -->
    </div>
    <div v-if="badge" class="badge sublines" :class="badge.toLowerCase().replace(' ', '-')">{{ badge }}</div>
  </div>
</template>

<script>
// import IconVideo from '@/assets/icons/icon_video.svg';
// import IconPDF from '@/assets/icons/icon_pdf.svg';
// import IconWebsite from '@/assets/icons/icon_website.svg';
// import IconImage from '@/assets/icons/icon_image.svg';
// import IconPresentation from '@/assets/icons/icon_ppt.svg';

/**
 * @version 0.1.1
 */
export default {
  // TODO maybe add a loading state for images
  name: 'g-thumbnail',
  components: {
    // IconPDF,
    // IconVideo,
    // IconWebsite,
    // IconImage,
    // IconPresentation,
  },
  props: {
    src: {
      type: String,
      default: null,
    },
    badge: {
      type: String,
      default: null,
    },
    assetType: {
      type: String,
      default: null,
    },
    aspectRatio: {
      type: String,
      default: '16:9',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showIcon: false,
      showThumbnail: !!this.src,
      placeholderSrc: 'https://picsum.photos/200?blur=10',
      imageSrc: null,
      imageLoading: false,
      imageFailed: false,
    };
  },
  computed: {
    assetTypeName() {
      return this.assetType?.toLowerCase();
    },
    assetImageUrl() {
      if (!this.imageSrc) return this.placeholderSrc;
      return this.imageSrc;
    },
  },
  mounted() {
    if (this.assetType && !this.src) {
      this.showThumbnail = false;
      this.showIcon = true;
    }
    if (this.aspectRatio) {
      const { thumbnail } = this.$refs;
      if (thumbnail) {
        const ratio = this.aspectRatio.split(':');
        thumbnail.style.paddingBottom = `${(ratio[1] / ratio[0]) * 100}%`;
      }
    }
    if (this.src) {
      this.loadImageSrc();
    }
  },
  methods: {
    loadImageSrc() {
      const img = new Image();
      const _this = this;
      function onLoad() {
        _this.imageLoading = false;
        _this.imageSrc = this.src;
        _this.showIcon = false;
        _this.showThumbnail = true;
        img.removeEventListener('load', this.onLoad);
      }
      img.addEventListener('load', onLoad);
      img.addEventListener('error', () => {
        this.imageFailed = true;
      });
      this.imageFailed = false;
      this.imageLoading = true;
      this.showIcon = true;
      this.showThumbnail = false;
      img.src = this.src;
    },
  },
};
</script>

<style lang="scss" scoped>
.g-thumbnail {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  width: 100%;
  max-width: 250px;
  overflow: hidden;
  &__wrapper {
    color: white;
    background: rgb(34, 193, 195);
    background: linear-gradient(142deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 81%);

    /** Asset Type Specific styles */
    // &.pdf {}
    // &.video {}
    // &.website {}
    &.image {
      fill: none;
      stroke: currentColor;
      stroke-width: 6px;
    }
    // &.presentation {}
    &.disabled {
      opacity: 0.5;
    }
  }

  .badge {
    position: absolute;
    top: 0;
    left: 0;
    padding: 5px 10px;
    font-size: 1.5em;
    color: white;
    background-color: rgb(131, 212, 179);
  }

  .preview {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    max-width: 35%;
    max-height: 55%;
    fill: currentColor;
    transform: translate(-50%, -50%);
    &.image,
    &.presentation {
      text {
        font-family: inherit;
        font-weight: bold;
        text-transform: uppercase;
      }
    }
  }
}
</style>
