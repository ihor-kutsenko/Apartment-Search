<template>
  <div class="star-rating">
    <span
      v-for="index in starLimit"
      :key="index"
      class="star star--outlined"
    ></span>
    <div class="star-rating__colored" :style="ratingWidthStyle">
      <span
        v-for="index in starLimit"
        :key="index"
        class="star star--colored"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StarRating",
  props: {
    rating: {
      type: Number,
      default: 0,
    },
    starLimit: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    ratingWidth() {
      return (this.rating / this.starLimit) * 100;
    },
    ratingWidthStyle() {
      return `width: ${this.ratingWidth}%;`;
    },
  },
};
</script>

<style lang="scss" src="./StarRating.scss" scoped></style>
