<template>
  <input @input="onInput" v-model="internalValue" class="custom-input" />
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    modelValue: String,
  },
  computed: {
    internalValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
  methods: {
    onInput(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style lang="scss" src="./CustomInput.scss" scoped></style>
