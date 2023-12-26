<template>
  <AuthContainer class="login">
    <Title class="login__title">Sign In</Title>
    <CustomForm ref="form" @submit.prevent="handleSubmit" class="login__form">
      <CustomInput
        v-model="formData.email"
        placeholder="Email"
        name="email"
        :rules="emailRules"
        class="login__input"
      />
      <CustomInput
        v-model="formData.password"
        placeholder="Password"
        type="password"
        name="password"
        :rules="passwordRules"
        class="login__input"
      />
      <Button type="submit" class="login__button" :loading="loading"
        >Sign In</Button
      >
    </CustomForm>
  </AuthContainer>
</template>

<script>
import { mapActions } from 'vuex';

import CustomForm from '../../customForm/CustomForm.vue';
import CustomInput from '../../customInput/CustomInput.vue';
import Button from '../../button/Button.vue';
import AuthContainer from '../AuthContainer.vue';
import Title from '../../title/Title.vue';

import {
  emailValidation,
  passwordValidation,
  isRequired,
} from '../../../utils/validationRules.js';

export default {
  name: 'LoginForm',
  components: {
    CustomForm,
    CustomInput,
    Button,
    AuthContainer,
    Title,
  },
  data() {
    return {
      loading: false,
      formData: {
        email: '',
        password: '',
      },
    };
  },
  computed: {
    rules() {
      return {
        emailValidation,
        passwordValidation,
        isRequired,
      };
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired];
    },
  },
  methods: {
    ...mapActions('auth', ['loginUser']),
    async handleSubmit() {
      const { form } = this.$refs;
      const isFormValid = form.validate();

      if (isFormValid) {
        try {
          this.loading = true;
          await this.loginUser(this.formData);

          this.$router.push({ name: 'HomePage' });
          form.reset();
        } catch (error) {
          this.$notify({
            type: 'error',
            title: 'Error',
            text: error.message,
          });
        } finally {
          this.loading = false;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  &__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__title {
    margin-bottom: 20px;
    text-align: center;
  }

  &__input {
    width: 100%;
  }

  &__button {
    margin-top: 15px;
    width: 100%;
  }
}
</style>
