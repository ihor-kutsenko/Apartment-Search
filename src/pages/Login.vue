<template>
  <main class="login">
    <LoginForm />
  </main>
</template>

<script>
import LoginForm from '../components/loginForm/LoginForm.vue';
export default {
  name: 'LoginPage',
  components: {
    LoginForm,
  },
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
}
</style>
