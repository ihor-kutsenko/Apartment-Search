<template>
  <main class="login">
    <AuthSection>
      <LoginForm />
    </AuthSection>
  </main>
</template>

<script>
import LoginForm from '../components/auth/loginForm/LoginForm.vue';
import AuthSection from '../components/auth/AuthSection.vue';
export default {
  name: 'SignInPage',
  components: {
    LoginForm,
    AuthSection,
  },
};
</script>

<style lang="scss" scoped></style>
