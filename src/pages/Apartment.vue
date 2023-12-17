<template>
  <main class="apartment-page">
    <Container>
      <div class="apartment-page__wrapper">
        <ApartmentsInfo :apartment="apartment" />
        <div class="apartment-page__additional-info">
          <ApartmentsOwner
            :owner="apartment.owner"
            class="apartment-page__owner"
          />
          <ApartmentsList :reviews="reviewsList" />
        </div>
      </div>
    </Container>
  </main>
</template>

<script>
import Container from '../components/Container/Container.vue';
import ApartmentsInfo from '../components/apartments/ApartmentsInfo.vue';
import ApartmentsOwner from '../components/apartments/ApartmentsOwner.vue';
import ApartmentsList from '../components/reviews/ReviewsList.vue';
import apartments from '../components/apartments/apartmentsList/apartmentsData.js';
import reviewsList from '../components/reviews/reviews.json';

export default {
  name: 'Apartment',
  components: {
    Container,
    ApartmentsInfo,
    ApartmentsOwner,
    ApartmentsList,
  },
  computed: {
    apartment() {
      return apartments.find(
        apartment => apartment.id === this.$route.params.id
      );
    },
    reviewsList() {
      return reviewsList;
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
    align-items: flex-start;
  }

  &__additional-info {
    margin-left: 30px;
    max-width: 350px;
    flex-grow: 0;
    flex-shrink: 1;
  }

  &__owner {
    margin-bottom: 30px;
  }
}
</style>
