<template>
  <GModal class="holiday-modal" v-bind="{ ...$props, ...$attrs }" v-on="$listeners">
    <template v-slot:bg-content="{ close }">
      <GIcon name="x" class="close-icon" @click="close" />
    </template>
    <template v-slot:body>
      <div class="title text--h1">
        {{ title }}
      </div>
      <div class="ingredients">
        <ul>
          <li v-for="(ingredient, index) in ingredients" :key="`ingredient_${index}`">{{ ingredient }}</li>
        </ul>
      </div>
      <div class="steps">
        <ul>
          <li v-for="(ingredient, index) in ingredients" :key="`ingredient_${index}`">{{ ingredient }}</li>
        </ul>
      </div>
      <div class="mocktail">
        {{ mocktail }}
      </div>
      <div class="glassware">
        {{ glassware }}
      </div>
    </template>
  </GModal>
</template>

<script>
import GModal from '@/components/base/GModal.vue';
import GIcon from '@/components/base/GIcon.vue';

export default {
  components: { GModal, GIcon },
  model: {
    prop: 'show',
    event: 'close',
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    ingredients: {
      type: Array,
      default: () => [],
    },
    steps: {
      type: Array,
      default: () => [],
    },
    mocktail: {
      type: String,
      default: '',
    },
    glassware: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.holiday-modal {
  &.modal-bg {
    cursor: pointer;

    ::v-deep .modal {
      color: white;
      background-color: black;
      border-radius: 20px;
    }
  }
  .close-icon {
    position: absolute;
    top: 40px;
    right: 40px;
    width: 40px;
    height: 40px;
    user-select: none;
  }
}
</style>
