<template>
  <form v-on="$attrs">
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
      this.inputs.filter(item => item !== input);
    },
    validate() {
      return this.inputs.reduce((isValid, input) => {
        const isInputValid = input.validate();
        return isValid && isInputValid;
      }, true);
    },
    reset() {
      console.log('Resetting form...');
      this.inputs.forEach(input => input.reset());
    },
  },
};
</script>

<style lang="scss" scoped></style>
