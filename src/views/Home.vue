<template>
  <Page class="home">
    <DrinkModal v-model="showModal" />
    <h1 class="title text--h1">Welcome Holiday Text</h1>
    <p class="description text--body">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus odio ac ante malesuada feugiat. Mauris
      pretium, nulla ac imperdiet suscipit, nibh enim pellentesque sapien, ut hendrerit dolor sapien gravida lacus.
    </p>
    <div class="drinks">
      <HolidayCard
        v-for="drink in drinks"
        :key="drink.id"
        :frontSrc="drink.images.front"
        :backSrc="drink.images.back"
        @click.native="showModal = true"
      />
    </div>
  </Page>
</template>

<script>
import Page from '@/templates/Page.vue';
import HolidayCard from '@/components/HolidayCard.vue';
import drinks from '@/data/drinks.json';
import DrinkModal from '@/components/DrinkModal.vue';

export default {
  components: {
    Page,
    HolidayCard,
    DrinkModal,
  },
  data() {
    return {
      drinks: drinks.drinks,
      showModal: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  color: white;
  .text--h1 {
    font-family: Writeable Story, Arial, sans-serif;
    font-size: 70px;
  }
  .text--body {
    font-size: 20px;
    line-height: 28px;
  }
  .title {
    margin-bottom: 30px;
  }
  .description {
    max-width: 630px;
    margin-bottom: 50px;
  }

  .holiday-card {
    position: relative;
    transition: transform 0.3s ease-out;
    &:hover {
      transform: translateY(-10px);
    }
  }

  .drinks {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: 1fr 1fr 1fr 1fr;
    gap: 30px 30px;
    max-width: 100%;
  }
}
</style>
