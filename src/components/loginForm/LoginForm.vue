<template>
  <CustomForm ref="form" @submit.prevent="handleSubmit" class="form">
    <CustomInput v-model="formData.email" name="email" :rules="emailRules" />
    <CustomInput
      v-model="formData.password"
      name="password"
      :rules="passwordRules"
    />
    <Button type="submit">Login</Button>
  </CustomForm>
</template>

<script>
import CustomForm from '../customForm/CustomForm.vue';
import CustomInput from '../customInput/CustomInput.vue';
import Button from '../button/Button.vue';
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from '../../utils/validationRules.js';
export default {
  name: 'LoginForm',
  components: {
    CustomForm,
    CustomInput,
    Button,
  },
  data() {
    return {
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
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
  },
  methods: {
    handleSubmit() {
      const isFormValid = this.$refs.form.validate();
      console.log('Form data before validation:', this.formData);

      if (isFormValid) {
        console.log('Form data after validation:', this.formData);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  gap: 15px;
  padding: 15px;
}
</style>
