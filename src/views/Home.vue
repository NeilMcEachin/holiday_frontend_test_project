<template>
  <Page class="home">
    <DrinkModal v-model="showModal" v-bind="activeDrink" />
    <h1 class="title text--h1">Welcome Holiday Text</h1>
    <p class="description text--body">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus odio ac ante malesuada feugiat. Mauris
      pretium, nulla ac imperdiet suscipit, nibh enim pellentesque sapien, ut hendrerit dolor sapien gravida lacus.
    </p>
    <input type="checkbox" v-model="showCardBacks" name="" id="" @change="flipAllCards" />
    <div class="drinks">
      <DrinkCard
        v-for="drink in drinks"
        :key="drink.id"
        :frontSrc="drink.images.front"
        :backSrc="drink.images.back"
        :flipped="isFlipped(drink.id)"
        @click.native="showDrinkDetails(drink)"
      />
    </div>
  </Page>
</template>

<script>
import Page from '@/templates/Page.vue';
import DrinkCard from '@/components/DrinkCard.vue';
import drinks from '@/data/drinks.json';
import DrinkModal from '@/components/DrinkModal.vue';

export default {
  components: {
    Page,
    DrinkCard,
    DrinkModal,
  },
  data() {
    return {
      drinks: drinks.drinks,
      activeDrink: null,
      showModal: false,
      flippedCards: [],
      flipCards: false,
      showCardBacks: false,
    };
  },
  methods: {
    flipAllCards() {
      let index = 0;
      const setFlipped = () => {
        if (index >= this.drinks.length || index < 0) {
          clearInterval(setFlipped);
          return;
        }
        if (this.showCardBacks) {
          this.flippedCards.push(this.drinks[index].id);
          index += 1;
        } else {
          this.flippedCards.pop();
          index -= 1;
        }
      };
      clearInterval(setFlipped);
      setInterval(setFlipped, 300);
      setFlipped();
    },
    isFlipped(id) {
      return this.flippedCards.includes(id);
    },
    showDrinkDetails(drink) {
      this.activeDrink = drink;
      this.showModal = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding: 110px 0;
  color: white;
  .title {
    margin-bottom: 30px;
  }
  .description {
    max-width: 630px;
    margin-bottom: 50px;
  }

  .drink-card {
    position: relative;
    transition: transform 0.3s ease-out;
    &:hover {
      transform: translateY(-10px);
    }
  }

  .drinks {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr 1fr 1fr 1fr;
    gap: 30px 30px;
    max-width: 100%;

    @include bp-md-tablet {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @include bp-lg-laptop {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .drink-card {
      width: 150px;
      height: 150px;
      @include bp-md-tablet {
        width: 180px;
        height: 180px;
      }
      @include bp-lg-laptop {
        width: 220px;
        height: 220px;
      }
    }
  }
}
</style>
