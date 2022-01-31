<template>
  <div v-bar class="vuebar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.vuebar {
  &.vb {
    ::v-deep {
      .vb-dragger {
        right: 0;
        // z-index: 5;
        width: 8px;

        .vb-dragger-styler {
          display: block;
          height: 100%;
          background-color: #393c3e;
          border-radius: 20px;
          -webkit-transition: background-color 100ms ease-out, margin 100ms ease-out, height 100ms ease-out;
          transition: background-color 100ms ease-out, margin 100ms ease-out, height 100ms ease-out;
          -webkit-transform: rotate3d(0, 0, 0, 0);
          transform: rotate3d(0, 0, 0, 0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        // .vb-scrolling-phantom {
        //   .vb-dragger {
        //     .vb-dragger-styler {
        //       background-color: #393C3E;
        //     }
        //   }
        // }
      }
      // .vb-dragger-styler {
      //   .vb-dragger {
      //     .vb-dragging {
      //       background-color: rgba(48, 121, 244, 0.5);
      //       margin: 0px;
      //       height: 100%;
      //     }
      //   }
      // }
      // .vb-dragging-phantom {
      //   .vb-dragger {
      //     .vb-dragger-styler {
      //       background-color: rgba(48, 121, 244, 0.5);
      //     }
      //   }
      // }
    }
  }
}
</style>
