<template>
  <div class="reviews-heading">
    <ReviewsAvatar class="reviews-heading__avatar" />
    <div class="reviews-heading__content">
      <span class="reviews-heading__author">{{ author }}</span>
      <Rating :rating="rating" />
    </div>
  </div>
</template>

<script>
import Rating from '../starRating/StarRating.vue';
import ReviewsAvatar from './ReviewsAvatar.vue';
export default {
  name: 'ReviewsHeading',
  components: {
    Rating,
    ReviewsAvatar,
  },
  props: {
    author: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.reviews-heading {
  display: flex;
  align-items: center;

  &__avatar {
    margin-right: 18px;
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__author {
    font-size: 18px;
    font-weight: 700;
  }
}
</style>
