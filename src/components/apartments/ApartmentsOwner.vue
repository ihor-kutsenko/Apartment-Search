<template>
  <section class="apartments-owner">
    <h2 class="apartments-owner__title">Owner information:</h2>
    <p class="apartments-owner__info">{{ owner.name }}</p>
    <p class="apartments-owner__info">tel: {{ owner.phone }}</p>
    <p class="apartments-owner__info">email: {{ owner.email }}</p>
  </section>
</template>

<script>
export default {
  name: 'ApartmentsOwner',
  props: {
    owner: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';
.apartments-owner {
  padding: 20px 40px 30px 20px;
  font-weight: 400;
  line-height: normal;
  background-color: $bg-info-color;

  &__title {
    padding-bottom: 20px;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  &__info {
    font-family: Montserrat Medium;
    font-size: 16px;
  }
}
</style>
