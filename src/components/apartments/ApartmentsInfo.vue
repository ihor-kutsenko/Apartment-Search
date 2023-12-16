<template>
  <article class="apartment-info">
    <div class="apartment-info__title-wrapper">
      <h1 class="apartment-info__title">{{ apartment.title }}</h1>
      <StarRating :rating="apartment.rating" />
    </div>

    <img :src="apartment.imgUrl" alt="" class="apartment-info__photo" />
    <p class="apartment-info__description">{{ apartment.description }}</p>
  </article>
</template>

<script>
import StarRating from '../starRating/StarRating.vue';

export default {
  name: 'ApartmentsInfo',
  components: {
    StarRating,
  },
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.apartment-info {
  &__title-wrapper {
    display: flex;
  }

  &__title {
    margin-bottom: 20px;
    margin-right: 20px;
    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
  }

  &__photo {
    margin-bottom: 30px;
  }

  &__description {
    margin-bottom: 24px;
    font-family: Montserrat Medium;
    font-size: 16px;
    font-weight: 500;
  }
}
</style>
