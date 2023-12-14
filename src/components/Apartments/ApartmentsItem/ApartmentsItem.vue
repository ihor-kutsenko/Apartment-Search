<template>
  <div class="apartments-item" @click.native="handleItemClick">
    <div class="apartments-item__inner">
      <img :src="imgSrc" alt="" class="apartments-item__photo" />
      <div class="apartments-item__content">
        <p class="apartments-item__description">{{ description }}</p>
        <div class="apartments-item__rating">
          <StarRating :rating="rating" />
        </div>
        <div class="apartments-item__price">UAH {{ price }}</div>
        <router-link
          :to="{ name: 'ApartmentPage' }"
          class="apartments-item__link"
        ></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from '../../starRating/StarRating.vue';
export default {
  name: 'ApartmentsItem',
  components: {
    StarRating,
  },
  props: {
    description: {
      type: String,
      default: '',
    },
    rating: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    imgSrc: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleItemClick() {
      console.log('item clicked');
    },
  },
};
</script>

<style lang="scss" src="./ApartmentsItem.scss" scoped></style>
