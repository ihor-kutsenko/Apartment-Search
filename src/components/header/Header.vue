<template>
  <header class="header">
    <Container>
      <Logo />
    </Container>
  </header>
</template>

<script>
import Container from '../container/Container.vue';
import Logo from '../logo/logo.vue';
export default {
  name: 'Header',
  components: {
    Container,
    Logo,
  },
};
</script>

<style lang="scss" src="./header.scss" scoped></style>
