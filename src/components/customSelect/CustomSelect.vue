<template>
  <select @change="onChange" v-model="selectedValue" class="custom-select">
    <option
      v-for="item in formattedItems"
      :key="item.value"
      :value="item.value"
      :selected="item.selected"
    >
      {{ item.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'CustomSelect',
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
        this.$emit('update:modelValue', value);
      },
    },
    formattedItems() {
      return this.items.map(item => {
        return typeof item === 'object' ? item : { value: item, label: item };
      });
    },
  },
  methods: {
    onChange(event) {
      this.$emit('change', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';

.custom-select {
  display: inline-block;
  padding: 8px 15px;
  max-width: 220px;
  width: 100%;
  height: 40px;
  border: 2px solid $accent-color;
  font-size: 18px;
  outline: none;
  cursor: pointer;
}
</style>
