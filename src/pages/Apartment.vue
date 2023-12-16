<template>
  <main class="apartment-page">
    <Container>
      <div class="apartment-page__wrapper">
        <ApartmentsInfo :apartment="apartment" />
        <ApartmentsOwner
          :owner="apartment.owner"
          class="apartment-page__owner"
        />
      </div>
    </Container>
  </main>
</template>

<script>
import Container from '../components/Container/Container.vue';
import ApartmentsInfo from '../components/apartments/ApartmentsInfo.vue';
import ApartmentsOwner from '../components/apartments/ApartmentsOwner.vue';
import apartments from '../components/apartments/apartmentsList/apartmentsData.js';

export default {
  name: 'Apartment',
  components: {
    Container,
    ApartmentsInfo,
    ApartmentsOwner,
  },
  computed: {
    apartment() {
      return apartments.find(
        apartment => apartment.id === this.$route.params.id
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.apartment-page {
  min-height: 100vh;
  padding-top: 60px;
  padding-bottom: 72px;

  &__wrapper {
    display: flex;
    align-items: start;
  }

  &__owner {
    min-width: 350px;
    margin-left: 30px;
  }
}
</style>
