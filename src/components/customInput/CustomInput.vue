<template>
  <input @input="onInput" v-model="internalValue" class="custom-input" />
</template>

<script>
export default {
  name: 'CustomInput',
  props: {
    modelValue: String,
  },
  computed: {
    internalValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';

.custom-input {
  padding: 8px 15px;
  height: 40px;
  max-width: 220px;
  width: 100%;
  border: 2px solid $accent-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;

  &::placeholder {
    color: inherit;
  }
}
</style>
