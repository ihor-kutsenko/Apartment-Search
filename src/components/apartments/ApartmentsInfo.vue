<template>
  <article class="apartment-info">
    <div class="apartment-info__title-wrapper">
      <h1 class="apartment-info__title">{{ apartment.title }}</h1>
      <StarRating :rating="apartment.rating" />
    </div>

    <img :src="apartment.imgUrl" alt="" class="apartment-info__photo" />
    <p class="apartment-info__description">{{ apartment.description }}</p>
    <div class="apartment-info__btn">
      <Button @click="handleApartmentsBooking" :loading="loading">Book</Button>
    </div>
  </article>
</template>

<script>
import StarRating from '../starRating/StarRating.vue';
import Button from '../button/Button.vue';

import { bookApartment } from '../../services/orders.js';

export default {
  name: 'ApartmentsInfo',
  components: {
    StarRating,
    Button,
  },
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    async handleApartmentsBooking() {
      const body = {
        apartmentId: this.$route.params.id,
        date: Date.now(),
      };

      try {
        this.loading = true;
        await bookApartment(body);
        this.$notify({
          type: 'success',
          title: 'Order added successfully',
        });
      } catch (error) {
        this.$notify({
          type: 'error',
          title: 'Error',
          text: error.message,
        });
      } finally {
        this.loading = false;
      }
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

  &__btn {
    text-align: center;
  }
}
</style>
