<template>
  <section class="error">
    <h1 class="error__title">Page Not Found</h1>
  </section>
</template>

<script>
export default {
  name: 'NotFoundPage',
};
</script>

<style lang="scss" scoped>
.error {
  min-height: 100vh;

  &__title {
    font-style: 60px;
    text-align: center;
  }
}
</style>
