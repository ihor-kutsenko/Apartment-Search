<template>
  <span class="circle-loader">
    <svg
      class="preloader-icon"
      viewBox="0 0 100 100"
      :width="width"
      :height="height"
      :style="style"
    >
      <circle cx="50" cy="50" r="40" stroke-width="5" fill="none"></circle>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CircleLoader",
  props: {
    width: {
      type: [Number, String],
      default: 50,
    },
    height: {
      type: [Number, String],
      default: 50,
    },
    color: {
      type: String,
      default: "#fff",
    },
  },

  computed: {
    style() {
      return `stroke: ${this.color}`;
    },
  },
};
</script>

<style lang="scss" src="./Loader.scss" scoped></style>
