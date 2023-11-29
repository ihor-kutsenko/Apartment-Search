<template>
  <button
    v:on="$listener"
    v-bind:type="type"
    :disabled="loading"
    :class="{ btn: true, 'btn--outlined': outlined }"
  >
    <Loader v-if="loading" width="38" height="38" class="btn__loader" />
    <span class="btn__content" :class="contentStyle"></span>
    <slot></slot>
  </button>
</template>

<script>
import Loader from "../Loader/Loader.vue";
export default {
  name: "Button",
  components: {
    Loader,
  },
  props: {
    type: {
      type: String,
      default: "button",
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    contentStyle() {
      return {
        "btn__content--hidden": this.loading,
      };
    },
  },
};
</script>

<style lang="scss" src="./Button.scss" scoped></style>
