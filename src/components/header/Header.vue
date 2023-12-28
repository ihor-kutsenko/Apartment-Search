<template>
  <header class="header">
    <Container>
      <div class="header__content">
        <router-link to="/"><Logo /></router-link>
        <AccountActions v-if="isLogin" />
        <AuthActions v-else />
      </div>
    </Container>
  </header>
</template>

<script>
import Container from '../container/Container.vue';
import Logo from '../logo/Logo.vue';
import AuthActions from './AuthActions.vue';
import AccountActions from './AccountActions.vue';

import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  components: {
    Logo,
    Container,
    AuthActions,
    AccountActions,
  },
  computed: {
    ...mapGetters('auth', ['isLogin']),
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';

.header {
  padding: 16px 0;
  height: 60px;
  background-color: $second-color;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
