<template>
  <main class="main">
    <Container>
      <ApartmentFilterForm @submit="handleFilter" class="apartments-filter" />
      <p v-if="!filteredApartments.length">No apartments found</p>
      <ApartmentsList v-else :items="filteredApartments" />
    </Container>
  </main>
</template>

<script>
import Container from '../components/container/Container.vue';
import ApartmentFilterForm from '../components/apartments/apartmentFilterForm/ApartmentFilterForm.vue';
import ApartmentsList from '../components/apartments/apartmentsList/ApartmentsList.vue';
import { getApartmentsList } from '../services/apartmentsAPI';

export default {
  name: 'Homepage',
  components: {
    Container,
    ApartmentFilterForm,
    ApartmentsList,
  },
  data() {
    return {
      apartments: [],
      filters: {
        city: '',
        price: '',
      },
    };
  },
  async created() {
    try {
      this.apartments = await getApartmentsList();
    } catch (error) {
      console.error('Error fetching apartments:', error);
    }
  },
  computed: {
    filteredApartments() {
      // Use Array.filter to apply the filters
      return this.apartments.filter(apartment => {
        const cityFilter =
          !this.filters.city || apartment.location.city === this.filters.city;
        const priceFilter =
          !this.filters.price || apartment.price >= Number(this.filters.price);

        return cityFilter && priceFilter;
      });
    },
  },
  methods: {
    handleFilter(filter) {
      this.filters = { ...this.filters, ...filter };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/index.scss';

.apartments-filter {
  margin-top: 60px;
  margin-bottom: 40px;
}

.main {
  min-height: 100vh;
}
</style>
