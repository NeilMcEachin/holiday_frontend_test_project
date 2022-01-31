<template>
  <transition :name="transitionName">
    <div v-if="show" class="modal-bg" :class="`type--${type}`" @click.self="closeFromMask">
      <slot name="bg-content" v-bind="{ close }" />
      <section
        class="modal"
        :class="`type--${type}`"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle" v-if="hasHeaderSlot">
          <slot name="header" v-bind="{ close }"></slot>
        </header>
        <div class="modal-body" id="modalDescription">
          <slot name="body" v-bind="{ close }"></slot>
        </div>
        <footer class="modal-footer" v-if="hasFooterSlot">
          <slot name="footer"></slot>
        </footer>
      </section>
    </div>
  </transition>
</template>

<script>
/**
 * @version 0.0.1
 */
export default {
  name: 'g-modal',
  model: {
    prop: 'show',
    event: 'close',
  },
  props: {
    /** disable closing by clicking on overlay outside of modal */
    disableClosingOnMask: {
      type: Boolean,
      default: false,
    },
    show: {
      type: Boolean,
      default: false,
    },
    disableScrolling: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'modal',
      validator(value) {
        return ['modal', 'drawer'].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    hasHeaderSlot() {
      return !!this.$slots.header;
    },
    hasFooterSlot() {
      return !!this.$slots.footer;
    },
    transitionName() {
      // if (this.$mq === 'sm') return 'modal-fade';
      // if (this.type === 'modal') return 'modal-fade';
      // if (this.type === 'drawer') return 'modal-slide';
      return 'modal-float';
    },
  },
  methods: {
    closeFromMask() {
      if (this.disableClosingOnMask) return;
      this.close();
    },
    close() {
      this.$emit('close');
    },
  },
  watch: {
    show(open) {
      function disableScroll() {
        document.body.style.overflow = 'hidden';
      }

      function enableScroll() {
        document.body.style.overflow = 'auto';
      }

      if (this.disableScrolling) {
        if (open) {
          disableScroll();
        } else {
          enableScroll();
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/* stylelint-disable -- Reason for disabling stylelint. */
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
.modal-slide-enter,
.modal-slide-leave-to {
  opacity: 0;

  .modal {
    transform: translateX(100%);
  }
}
.modal-slide-enter-to,
.modal-slide-leave {
  opacity: 1;
  .modal {
    transform: translateX(0);
  }
}
.modal-slide-enter-active,
.modal-slide-leave-active {
  transition: opacity 0.5s ease;

  .modal {
    transition: transform 0.5s ease;
  }
}

.modal-float-enter,
.modal-float-leave-to {
  opacity: 0;

  .modal {
    opacity: 0;
    transform: translateY(-30px);
  }
}
.modal-float-enter-to,
.modal-float-leave {
  opacity: 1;
  .modal {
    opacity: 1;
    transform: translateY(0);
  }
}
.modal-float-enter-active {
  transition: opacity 0.5s ease;

  .modal {
    transition: transform 0.75s ease, opacity 0.75s ease-out;
  }
}
.modal-float-leave-active {
  transition: opacity 0.35s ease;

  .modal {
    transition: transform 0.35s ease, opacity 0.35s ease-out;
  }
}
.modal-bg {
  background-color: rgba(black, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99999;

  &.type--drawer {
    justify-content: flex-end;
    @include bp-lg-laptop {
      top: 0;
      bottom: 0;
    }
  }
  .modal {
    background-color: #fff;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    padding: 35px;
    // width: percentage($number: 225 / 375);

    &.type--drawer {
      width: 100%;
      height: 100%;
      max-width: 420px;
      @include bp-md-tablet {
        box-sizing: border-box;
      }
    }
    &.type--modal {
      width: 50%;
      @include bp-md-tablet {
        box-sizing: border-box;
      }
    }
    .modal-header {
      display: flex;
    }

    .modal-header {
      padding-bottom: 25px;
      justify-content: space-between;
    }

    .modal-body {
      position: relative;
    }
    .modal-footer {
      margin-top: auto;
    }
  }
}
</style>
