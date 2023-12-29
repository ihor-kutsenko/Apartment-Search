<template>
  <div class="orders-item">
    <img
      class="orders-item__photo"
      :src="order.imgUrl"
      alt=" apartments photo"
    />
    <div class="orders-item__details">
      <div class="orders-item__text">
        <h2 class="orders-item__title">{{ order.title }}</h2>
        <p class="orders-item__location">{{ order.location.city }}</p>
      </div>
      <div class="orders-item__cost">
        <span class="orders-item__price">UAH {{ order.price }}</span> per night
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrdersItem',
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';
.orders-item {
  display: flex;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &__photo {
    display: block;
    width: 45%;
    height: 190px;
    object-fit: cover;
  }

  &__title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  &__location {
    font-family: Montserrat Medium;
    font-size: 16px;
    font-weight: 400;
  }

  &__details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 55%;
    padding: 20px;
    border: 2px solid $bg-info-color;
    border-left: none;
  }

  &__price {
    font-size: 20px;
    font-weight: 700;
  }
}
</style>
