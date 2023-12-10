<template>
  <select @change="onChange" v-model="selectedValue" class="custom-select">
    <option
      v-for="item in formattedItems"
      :value="item.value"
      :key="item.value"
    >
      {{ item.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: "CustomSelect",
  props: {
    items: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  computed: {
    selectedValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
    formattedItems() {
      return this.items.map((item) => {
        return typeof item === "object" ? item : { value: item, label: item };
      });
    },
  },
  methods: {
    onChange(event) {
      this.$emit("change", event.target.value);
    },
  },
};
</script>

<style lang="scss" src="./CustomSelect.scss" scoped></style>
