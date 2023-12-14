<template>
  <Container class="main"> <h1>Apartment Page</h1></Container>
</template>

<script>
import Container from '../components/Container/Container.vue';

export default {
  name: 'Apartment',
  components: {
    Container,
  },
};
</script>

<style lang="scss" scoped>
.main {
  min-height: 100vh;
}
</style>
