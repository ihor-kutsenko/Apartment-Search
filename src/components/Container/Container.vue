<template>
  <div class="container">
    <slot>Default value</slot>
  </div>
</template>

<script>
export default {
  name: 'container',
};
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';

.container {
  max-width: 1110px;
  margin: 0 auto;
}
</style>
