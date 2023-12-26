<template>
  <AuthContainer class="registration">
    <Title class="registration__title">Sign Up</Title>
    <CustomForm
      ref="form"
      @submit.prevent="handleSubmit"
      class="registration__form"
    >
      <CustomInput
        v-model="formData.name"
        placeholder="Name"
        name="name"
        :rules="nameRules"
        class="registration__input"
      />
      <CustomInput
        v-model="formData.email"
        placeholder="Email"
        name="email"
        :rules="emailRules"
        class="registration__input"
      />
      <CustomInput
        v-model="formData.password"
        placeholder="Password"
        type="password"
        name="password"
        :rules="passwordRules"
        class="registration__input"
      />
      <CustomInput
        v-model="formData.confirmPassword"
        placeholder="Confirm password"
        type="password"
        name="password"
        :rules="confirmPassword"
        class="registration__input"
      />
      <Button type="submit" class="registration__button" :loading="loading"
        >Sign Up</Button
      >
    </CustomForm>
  </AuthContainer>
</template>

<script>
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
  name: 'RegistrationForm',
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
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
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
    nameRules() {
      return [this.rules.isRequired];
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
    confirmPassword() {
      return [
        val => ({
          hasPassed: val === this.formData.password,
          message: 'Password mismatch',
        }),
      ];
    },
  },
  methods: {
    async handleSubmit() {
      const { form } = this.$refs;
      const isFormValid = form.validate();
      const { name, email, password } = this.formData;

      if (isFormValid) {
        try {
          this.loading = true;
          await this.$store.dispatch('registration', { name, email, password });

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
.registration {
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
