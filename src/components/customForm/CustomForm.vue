<template>
  <form v-on="$attrs" class="form">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'CustomForm',
  provide() {
    return {
      form: this,
    };
  },
  data() {
    return {
      inputs: [],
    };
  },
  methods: {
    registerInput(input) {
      this.inputs.push(input);
    },
    unRegisterInput(input) {
      this.inputs = this.inputs.filter(item => item !== input);
    },
    validate() {
      console.log('Form is being validated.');
      return Promise.all(this.inputs.map(input => input.validate())).then(
        results => {
          const isValid = results.every(isInputValid => isInputValid);
          console.log('Is form valid:', isValid);
          console.log('Form data after validation:', this.inputs);
          return isValid;
        }
      );
    },
    reset() {
      console.log('Resetting form...');
      this.inputs.forEach(input => input.reset());
    },
  },
};
</script>

<style lang="scss" scoped></style>
