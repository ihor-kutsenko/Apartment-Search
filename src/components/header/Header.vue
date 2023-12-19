<template>
  <header class="header">
    <Container>
      <router-link to="/"><Logo /></router-link>
    </Container>
  </header>
</template>

<script>
import Container from '../container/Container.vue';
import Logo from '../logo/Logo.vue';
export default {
  name: 'Header',
  components: {
    Container,
    Logo,
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';

.header {
  padding: 16px 0;
  height: 60px;
  background-color: $second-color;
}
</style>
