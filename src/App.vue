<template>
  <header></header>

  <main>
    <Container>
      <div class="wrapper">
        <Button>Click </Button>
        <h2>{{ text }}</h2>
        <CustomSelect
          v-model="selectedValue"
          :items="['name', 'label', 'salary']"
        />
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
import CustomSelect from "./components/customSelect/CustomSelect.vue";
import Container from "./components/Container/Container.vue";
import apartments from "./components/apartments/apartmentsList/apartmentsData.js";

export default {
  name: "App",
  components: {
    Button,
    ApartmentsList,
    CustomInput,
    Container,
    CustomSelect,
  },

  data() {
    return {
      text: "",
      selectedValue: "name",
      apartments,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin: 60px auto;
}
</style>
