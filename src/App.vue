<template>
  <header></header>

  <main>
    <Button>Click </Button>
    <StarRating :rating="4" />
    <ApartmentsList :items="apartments" />
  </main>
</template>

<script>
import Button from "./components/Button/Button.vue";
import StarRating from "./components/StarRating/StarRating.vue";
import ApartmentsList from "./components/Apartments/ApartmentsList/ApartmentsList.vue";
import apartments from "./components/Apartments/ApartmentsList/apartments";

export default {
  components: {
    Button,
    StarRating,
    ApartmentsList,
  },

  data() {
    return { apartments };
  },
};
</script>

<style scoped></style>
