<template>
  <Header></Header>

  <main class="main">
    <Container>
      <ApartmentFilterForm @submit="handleFilter" class="apartments-filter" />
      <p v-if="!filteredApartments.length">No apartments found</p>
      <ApartmentsList v-else :items="filteredApartments" />
    </Container>
  </main>
  <Footer></Footer>
</template>

<script>
import Container from './components/Container/Container.vue';
import ApartmentFilterForm from './components/apartments/apartmentFilterForm/ApartmentFilterForm.vue';
import ApartmentsList from './components/apartments/apartmentsList/ApartmentsList.vue';
import Header from './components/header/Header.vue';
import Footer from './components/footer/Footer.vue';
import apartments from './components/apartments/apartmentsList/apartmentsData.js';

export default {
  name: 'App',
  components: {
    Header,
    Container,
    ApartmentFilterForm,
    ApartmentsList,
    Footer,
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
    },
  },
};
</script>

<style lang="scss" src="./App.scss" scoped></style>
