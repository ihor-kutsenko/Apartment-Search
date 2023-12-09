<template>
  <header></header>

  <main>
    <Container>
      <div class="wrapper">
        <Button>Click </Button>
        <h2>{{ text }}</h2>
        <CustomInput v-model="text" />
      </div>

      <ApartmentsList :items="apartments" />
    </Container>
  </main>
</template>

<script>
import Button from "./components/button/Button.vue";
import ApartmentsList from "./components/apartments/apartmentsList/ApartmentsList.vue";
import CustomInput from "./components/customInput/CustomInput.vue";
import Container from "./components/container/Container.vue";
import apartments from "./components/apartments/apartmentsList/apartmentsData.js";

export default {
  name: "App",
  components: {
    Button,
    ApartmentsList,
    CustomInput,
    Container,
  },

  data() {
    return {
      text: "",
      apartments,
    };
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin: 60px auto;
}
</style>
