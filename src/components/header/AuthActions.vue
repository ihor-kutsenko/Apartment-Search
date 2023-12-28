<template>
  <div class="auth-actions">
    <router-link class="auth-actions__link" :to="{ name: 'LoginPage' }">
      Login
    </router-link>
    /
    <router-link class="auth-actions__link" :to="{ name: 'RegistrationPage' }">
      Registration
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';

.auth-actions {
  color: $white-color;

  &__link {
    color: inherit;
    text-decoration: none;
    transition: color 0.4s;

    &:hover {
      color: $accent-color;
    }
  }
}
</style>
