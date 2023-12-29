<template>
  <main class="registration">
    <AuthSection>
      <RegisterForm />
    </AuthSection>
  </main>
</template>

<script>
import AuthSection from '../components/auth/AuthSection.vue';
import RegisterForm from '../components/auth/registerForm/RegisterForm.vue';
export default {
  name: 'RegistrationPage',
  components: {
    AuthSection,
    RegisterForm,
  },
};
</script>

<style lang="scss" scoped></style>
