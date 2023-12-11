<template>
  <header></header>

  <main>
    <Container>
      <ApartmentFilterForm @submit="logger" />
      <ApartmentsList :items="apartments" />
    </Container>
  </main>
</template>

<script>
import Container from "./components/Container/Container.vue";
import ApartmentFilterForm from "./components/apartments/apartmentFilterForm/ApartmentFilterForm.vue";
import ApartmentsList from "./components/apartments/apartmentsList/ApartmentsList.vue";
import apartments from "./components/apartments/apartmentsList/apartmentsData.js";

export default {
  name: "App",
  components: {
    Container,
    ApartmentFilterForm,
    ApartmentsList,
  },
  data() {
    return {
      apartments,
    };
  },
  methods: {
    logger(value) {
      console.log(value, "form value");
    },
  },
};
</script>

<style lang="scss" scoped></style>
