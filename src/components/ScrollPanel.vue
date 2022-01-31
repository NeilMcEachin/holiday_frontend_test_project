<template>
  <div class="p-scrollpanel p-component">
    <div class="p-scrollpanel-wrapper">
      <div ref="content" class="p-scrollpanel-content" @scroll="moveBar" @mouseenter="moveBar">
        <slot></slot>
      </div>
    </div>
    <div ref="xBar" class="p-scrollpanel-bar p-scrollpanel-bar-x" @mousedown="onXBarMouseDown"></div>
    <div ref="yBar" class="p-scrollpanel-bar p-scrollpanel-bar-y" @mousedown="onYBarMouseDown"></div>
  </div>
</template>

<script>
import DomHandler from '@/components/utils/DomHandler';

export default {
  name: 'ScrollPanel',
  initialized: false,
  documentResizeListener: null,
  documentMouseMoveListener: null,
  documentMouseUpListener: null,
  frame: null,
  scrollXRatio: null,
  scrollYRatio: null,
  isXBarClicked: false,
  isYBarClicked: false,
  lastPageX: null,
  lastPageY: null,
  mounted() {
    if (this.$el.offsetParent) {
      this.initialize();
    }
  },
  updated() {
    if (!this.initialized && this.$el.offsetParent) {
      this.initialize();
    }
  },
  beforeUnmount() {
    this.unbindDocumentResizeListener();

    if (this.frame) {
      window.cancelAnimationFrame(this.frame);
    }
  },
  methods: {
    initialize() {
      this.moveBar();
      this.bindDocumentResizeListener();
      this.calculateContainerHeight();
    },
    calculateContainerHeight() {
      const containerStyles = getComputedStyle(this.$el);
      const xBarStyles = getComputedStyle(this.$refs.xBar);
      const pureContainerHeight = DomHandler.getHeight(this.$el) - parseInt(xBarStyles.height, 10);

      if (containerStyles['max-height'] !== 'none' && pureContainerHeight === 0) {
        if (
          this.$refs.content.offsetHeight + parseInt(xBarStyles.height, 10) >
          parseInt(containerStyles['max-height'], 10)
        ) {
          this.$el.style.height = containerStyles['max-height'];
        } else {
          this.$el.style.height = `${
            this.$refs.content.offsetHeight +
            parseFloat(containerStyles.paddingTop) +
            parseFloat(containerStyles.paddingBottom) +
            parseFloat(containerStyles.borderTopWidth) +
            parseFloat(containerStyles.borderBottomWidth)
          }px`;
        }
      }
    },
    moveBar() {
      /* horizontal scroll */
      const totalWidth = this.$refs.content.scrollWidth;
      const ownWidth = this.$refs.content.clientWidth;
      const bottom = (this.$el.clientHeight - this.$refs.xBar.clientHeight) * -1;

      this.scrollXRatio = ownWidth / totalWidth;

      /* vertical scroll */
      const totalHeight = this.$refs.content.scrollHeight;
      const ownHeight = this.$refs.content.clientHeight;
      const right = (this.$el.clientWidth - this.$refs.yBar.clientWidth) * -1;

      this.scrollYRatio = ownHeight / totalHeight;

      this.frame = this.requestAnimationFrame(() => {
        if (this.scrollXRatio >= 1) {
          DomHandler.addClass(this.$refs.xBar, 'p-scrollpanel-hidden');
        } else {
          DomHandler.removeClass(this.$refs.xBar, 'p-scrollpanel-hidden');
          this.$refs.xBar.style.cssText = `width:${Math.max(this.scrollXRatio * 100, 10)}%; left:${
            (this.$refs.content.scrollLeft / totalWidth) * 100
          }%;bottom:${bottom}px;`;
        }

        if (this.scrollYRatio >= 1) {
          DomHandler.addClass(this.$refs.yBar, 'p-scrollpanel-hidden');
        } else {
          DomHandler.removeClass(this.$refs.yBar, 'p-scrollpanel-hidden');
          this.$refs.yBar.style.cssText = `height:${Math.max(this.scrollYRatio * 100, 10)}%; top: calc(${
            (this.$refs.content.scrollTop / totalHeight) * 100
          }% - ${this.$refs.xBar.clientHeight}px);right:${right}px;`;
        }
      });
    },
    onYBarMouseDown(e) {
      this.isYBarClicked = true;
      this.lastPageY = e.pageY;
      DomHandler.addClass(this.$refs.yBar, 'p-scrollpanel-grabbed');
      DomHandler.addClass(document.body, 'p-scrollpanel-grabbed');

      this.bindDocumentMouseListeners();
      e.preventDefault();
    },
    onXBarMouseDown(e) {
      this.isXBarClicked = true;
      this.lastPageX = e.pageX;
      DomHandler.addClass(this.$refs.xBar, 'p-scrollpanel-grabbed');
      DomHandler.addClass(document.body, 'p-scrollpanel-grabbed');

      this.bindDocumentMouseListeners();
      e.preventDefault();
    },
    onDocumentMouseMove(e) {
      if (this.isXBarClicked) {
        this.onMouseMoveForXBar(e);
      } else if (this.isYBarClicked) {
        this.onMouseMoveForYBar(e);
      } else {
        this.onMouseMoveForXBar(e);
        this.onMouseMoveForYBar(e);
      }
    },
    onMouseMoveForXBar(e) {
      const deltaX = e.pageX - this.lastPageX;
      this.lastPageX = e.pageX;

      this.frame = this.requestAnimationFrame(() => {
        this.$refs.content.scrollLeft += deltaX / this.scrollXRatio;
      });
    },
    onMouseMoveForYBar(e) {
      const deltaY = e.pageY - this.lastPageY;
      this.lastPageY = e.pageY;

      this.frame = this.requestAnimationFrame(() => {
        this.$refs.content.scrollTop += deltaY / this.scrollYRatio;
      });
    },
    onDocumentMouseUp() {
      DomHandler.removeClass(this.$refs.yBar, 'p-scrollpanel-grabbed');
      DomHandler.removeClass(this.$refs.xBar, 'p-scrollpanel-grabbed');
      DomHandler.removeClass(document.body, 'p-scrollpanel-grabbed');

      this.unbindDocumentMouseListeners();
      this.isXBarClicked = false;
      this.isYBarClicked = false;
    },
    requestAnimationFrame(f) {
      const frame = window.requestAnimationFrame || this.timeoutFrame;
      return frame(f);
    },
    refresh() {
      this.moveBar();
    },
    scrollTop(value) {
      let scrollTop = value;
      const scrollableHeight = this.$refs.content.scrollHeight - this.$refs.content.clientHeight;
      if (scrollTop > scrollableHeight) {
        scrollTop = scrollableHeight;
      } else if (scrollTop <= 0) {
        scrollTop = 0;
      }
      this.$refs.contentscrollTop = scrollTop;
    },
    bindDocumentMouseListeners() {
      if (!this.documentMouseMoveListener) {
        this.documentMouseMoveListener = (e) => {
          this.onDocumentMouseMove(e);
        };

        document.addEventListener('mousemove', this.documentMouseMoveListener);
      }

      if (!this.documentMouseUpListener) {
        this.documentMouseUpListener = (e) => {
          this.onDocumentMouseUp(e);
        };

        document.addEventListener('mouseup', this.documentMouseUpListener);
      }
    },
    unbindDocumentMouseListeners() {
      if (this.documentMouseMoveListener) {
        document.removeEventListener('mousemove', this.documentMouseMoveListener);
        this.documentMouseMoveListener = null;
      }

      if (this.documentMouseUpListener) {
        document.removeEventListener('mouseup', this.documentMouseUpListener);
        this.documentMouseUpListener = null;
      }
    },
    bindDocumentResizeListener() {
      if (!this.documentResizeListener) {
        this.documentResizeListener = () => {
          this.moveBar();
        };

        window.addEventListener('resize', this.documentResizeListener);
      }
    },
    unbindDocumentResizeListener() {
      if (this.documentResizeListener) {
        window.removeEventListener('resize', this.documentResizeListener);
        this.documentResizeListener = null;
      }
    },
  },
};
</script>

<style>
.p-scrollpanel-wrapper {
  position: relative;
  z-index: 1;
  float: left;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.p-scrollpanel-content {
  position: relative;
  box-sizing: border-box;
  width: calc(100% + 18px);
  height: calc(100% + 18px);
  padding: 0 18px 18px 0;
  overflow: scroll;
}

.p-scrollpanel-bar {
  position: relative;
  z-index: 2;
  cursor: pointer;
  background: #c1c1c1;
  border-radius: 3px;
  opacity: 0;
  transition: opacity 0.25s linear;
}

.p-scrollpanel-bar-y {
  top: 0;
  width: 9px;
}

.p-scrollpanel-bar-x {
  bottom: 0;
  height: 9px;
}

.p-scrollpanel-hidden {
  visibility: hidden;
}

.p-scrollpanel:hover .p-scrollpanel-bar,
.p-scrollpanel:active .p-scrollpanel-bar {
  opacity: 1;
}

.p-scrollpanel-grabbed {
  user-select: none;
}
</style>
