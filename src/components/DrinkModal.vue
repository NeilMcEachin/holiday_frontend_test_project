<template>
  <GModal class="drink-modal" v-bind="{ ...$props, ...$attrs }" v-on="$listeners">
    <template v-slot:bg-content="{ close }">
      <GIcon name="x" class="close-icon" @click.native="close" />
    </template>
    <template v-slot:body>
      <div class="name text--h1">
        {{ name }}
      </div>
      <Vuebar>
        <div class="info">
          <div class="ingredients">
            <h2 class="section-title text--h2">Ingridients</h2>
            <ul class="ingredients__list">
              <li v-for="(ingredient, index) in ingredients" :key="`ingredient_${index}`" class="text--body">
                {{ ingredient }}
              </li>
            </ul>
          </div>
          <GDivider />
          <div class="steps">
            <h2 class="section-title text--h2">How to prepare</h2>
            <ul>
              <li v-for="(step, index) in steps" :key="`step_${index}`" class="steps__list-item">
                <table>
                  <tr>
                    <td class="marker text--body">Step {{ index + 1 }}</td>
                    <td class="directions text--body">
                      {{ step }}
                    </td>
                  </tr>
                </table>
              </li>
            </ul>
          </div>
          <GDivider />
          <div class="mocktail">
            <h2 class="section-title text--h2">Make it a mocktail</h2>
            <div class="text--body">
              {{ mocktail }}
            </div>
          </div>
          <GDivider />
          <div class="glassware">
            <h2 class="section-title text--h2">Glass Recommendation</h2>
            <div class="text--body">
              {{ glassware }}
            </div>
          </div>
        </div>
      </Vuebar>
    </template>
  </GModal>
</template>

<script>
import GModal from '@/components/base/GModal.vue';
import GIcon from '@/components/base/GIcon.vue';
import GDivider from '@/components/base/GDivider.vue';
import Vuebar from '@/components/Vuebar.vue';

export default {
  components: { GModal, GIcon, GDivider, Vuebar },
  inheritAttrs: false,
  model: {
    prop: 'show',
    event: 'close',
  },
  props: {
    name: {
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
.drink-modal {
  &.modal-bg {
    cursor: pointer;
    background-color: rgba(black, 50%);

    ::v-deep .modal {
      width: 100%;
      max-width: 700px;
      max-height: 100vh;
      padding: 40px;
      overflow: hidden;
      color: white;
      background-color: #1f1f1f;
      border-radius: 20px;
      box-shadow: 0 3px 6px #0000004d;

      .modal-body {
        display: flex;
        flex-direction: column;
      }
    }
  }
  .g-divider {
    margin: 25px 0;
  }
  .close-icon {
    position: absolute;
    top: 40px;
    right: 40px;
    width: 40px;
    height: 40px;
    user-select: none;
  }

  .vuebar {
    margin-top: 40px;
  }

  .info {
    max-height: 320px;
    padding-right: 12px;

    .section-title {
      margin-bottom: 15px;
    }
  }

  .ingredients {
    &__list {
      li {
        position: relative;
        padding-left: 20px;
        margin-bottom: 10px;
        &::before {
          position: absolute;
          top: 16px;
          left: 0;
          width: 8px;
          height: 8px;
          content: '';
          border: 1px white solid;
          border-radius: 9999px;
          transform: translateY(-50%);
        }
      }
    }
  }

  .steps {
    &__list-item {
      padding: 0;
      margin-bottom: 10px;
      .marker {
        padding-right: 12px;
        text-transform: uppercase;
        white-space: nowrap;
        vertical-align: top;
      }
    }
  }
}
</style>
