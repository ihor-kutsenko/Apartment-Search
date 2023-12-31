<template>
  <div class="wrapper-input">
    <input
      @input="onInput"
      v-model="internalValue"
      v-bind="$attrs"
      @blur="blurHandler"
      class="custom-input"
      :class="!isValid && 'custom-input--error'"
    />
    <span v-if="!isValid" class="custom-input__error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  data() {
    return {
      isValid: true,
      error: '',
      isFirstInput: true,
    };
  },
  inject: {
    form: {
      default: null,
    },
  },
  inheritAttrs: false,
  props: {
    modelValue: String,
    errorMessage: {
      type: String,
      default: '',
    },
    rules: {
      type: Array,
      default: () => [],
    },
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
  watch: {
    modelValue() {
      if (this.isFirstInput) return;
      this.validate();
    },
  },
  mounted() {
    if (!this.form) return;
    this.form.registerInput(this);
  },
  beforeDestroy() {
    if (!this.form) return;
    this.form.unRegisterInput(this);
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    },
    validate() {
      this.isValid = this.rules.every(rule => {
        const { hasPassed, message } = rule(this.modelValue);

        if (!hasPassed) {
          this.error = message || this.errorMessage;
        }
        return hasPassed;
      });

      return this.isValid;
    },
    blurHandler() {
      if (this.isFirstInput) {
        this.validate;
      }
      this.isFirstInput = false;
    },
    reset() {
      this.isFirstInput = true;
      this.isValid = true;
      this.$emit('update:modelValue', '');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';
.wrapper-input {
  position: relative;
  display: inline-flex;
}

.custom-input {
  padding: 8px 15px;
  height: 40px;
  /* max-width: 220px; */
  width: 100%;
  border: 2px solid $accent-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;

  &::placeholder {
    color: inherit;
  }

  &--error {
    border-color: red;
  }

  &__error {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    font-size: 12px;
    color: red;
  }
}
</style>
