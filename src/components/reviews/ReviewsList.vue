<template>
  <section class="reviews">
    <div class="reviews__heading">
      <h2 class="reviews__title">Total rating</h2>
      <div class="reviews__rating">
        <span>{{ amountOfReviews }} reviews</span>
        <Rating :rating="totalRating" />
      </div>
    </div>
    <ReviewsItem
      v-for="review in currentReviews"
      :key="review.author"
      :review="review"
    />
    <button class="reviews__show-more" @click="toggleReviews">
      {{ buttonText }}
    </button>
  </section>
</template>

<script>
import ReviewsItem from './ReviewsItem.vue';
import Rating from '../starRating/StarRating.vue';
export default {
  name: 'ReviewsList',
  components: {
    ReviewsItem,
    Rating,
  },
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      reviewsLimit: 2,
    };
  },
  computed: {
    totalRating() {
      const total = this.reviews.reduce(
        (acc, review) => acc + review.rating,
        0
      );
      return total / this.reviews.length;
    },
    amountOfReviews() {
      return this.reviews.length;
    },
    currentReviews() {
      return this.reviews.slice(0, this.reviewsLimit);
    },
    buttonText() {
      return this.reviewsLimit === this.reviews.length
        ? 'Hide'
        : 'Read more ...';
    },
  },
  methods: {
    toggleReviews() {
      if (this.reviewsLimit === this.reviews.length) {
        this.reviewsLimit = 2;
        return;
      }
      this.reviewsLimit = this.reviews.length;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';
.reviews {
  font-family: Montserrat;

  &__heading {
    padding: 20px 20px 10px 20px;
    background-color: $bg-info-color;
  }

  &__title {
    margin-bottom: 7px;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
  }

  &__rating {
    display: flex;
    justify-content: space-between;
    font-family: Montserrat Medium;
    font-size: 16px;
    font-weight: 400;
  }

  &__show-more {
    margin-top: 20px;
    padding: 10px 20px;
    width: 100%;
    font-family: Montserrat Medium;
    font-size: 16px;
    font-weight: 400;
    background-color: $bg-info-color;
  }
}
</style>
