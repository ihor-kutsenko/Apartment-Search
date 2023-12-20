<template>
  <form class="form" @submit.prevent="handleSubmit">
    <CustomSelect :items="cities" v-model="city" class="form__select" />
    <CustomInput
      v-model="price"
      placeholder="Price from"
      error-message="must not be empty"
      :rules="rules"
      class="form__input"
    />
    <SubmitButton type="submit" class="form__submit"
      >Search apartments</SubmitButton
    >
  </form>
</template>

<script>
import CustomSelect from '../../customSelect/CustomSelect.vue';
import CustomInput from '../../customInput/CustomInput.vue';
import SubmitButton from '../../button/Button.vue';
import { isRequired, charLimit } from '../../../utils/validationRules';

export default {
  components: {
    CustomSelect,
    CustomInput,
    SubmitButton,
  },
  data() {
    return {
      city: '',
      price: '',
    };
  },
  computed: {
    rules() {
      return [isRequired, charLimit(10)];
    },
    cities() {
      return [
        { value: '', label: 'City', selected: true },
        'Kyiv',
        'Odessa',
        'Poltava',
        'Kharkiv',
        'Dnipro',
        'Lviv',
        'Kherson',
        'Mariupol',
      ];
    },
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', {
        city: this.city,
        price: this.price,
      });
    },
  },
};
</script>

<style lang="scss" src="./ApartmentFilterForm.scss" scoped></style>
