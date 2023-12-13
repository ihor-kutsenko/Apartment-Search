<template>
  <header></header>

  <main>
    <Container>
      <ApartmentFilterForm @submit="handleFilter" class="apartments-filter" />
      <ApartmentsList :items="filteredApartments" />
    </Container>
  </main>
</template>

<script>
import Container from './components/Container/Container.vue';
import ApartmentFilterForm from './components/apartments/apartmentFilterForm/ApartmentFilterForm.vue';
import ApartmentsList from './components/apartments/apartmentsList/ApartmentsList.vue';
import apartments from './components/apartments/apartmentsList/apartmentsData.js';

export default {
  name: 'App',
  components: {
    Container,
    ApartmentFilterForm,
    ApartmentsList,
  },
  data() {
    return {
      apartments,
      filters: {
        city: '',
        price: '',
      },
    };
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
      console.log('Filters:', this.filters);
    },
  },
};
</script>

<style lang="scss" src="./App.scss" scoped></style>
