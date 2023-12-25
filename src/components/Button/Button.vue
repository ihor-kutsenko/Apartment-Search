<template>
  <button
    v:on="$listener"
    v-bind:type="type"
    :disabled="loading"
    :class="{ btn: true, 'btn--outlined': outlined }"
    @click.native="handleButtonClick"
  >
    <Loader v-if="loading" width="38" height="38" class="btn__loader" />
    <span class="btn__content" :class="contentStyle"><slot></slot></span>
  </button>
</template>

<script>
import Loader from '../loader/Loader.vue';
export default {
  name: 'Button',
  components: {
    Loader,
  },
  props: {
    type: {
      type: String,
      default: 'button',
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
        'btn__content--hidden': this.loading,
      };
    },
  },
  methods: {
    handleButtonClick() {
      console.log('button clicked');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';

.btn {
  position: relative;
  display: inline-block;
  font-size: 18px;
  background: $accent-color;
  color: $white-color;
  cursor: pointer;
  min-width: 220px;
  border: 1px solid transparent;
  padding: 8px 15px;
  transition: background-color 0.4s, color 0.4s;
  font-family: Montserrat, sans-serif;

  @include hover {
    background: $bg-color;
    color: $accent-color;
    border: 1px solid $accent-color;
  }

  &--outlined {
    background: none;
    border: 1px solid $accent-color;
    color: $accent-color;
  }

  &__content {
    &--hidden {
      opacity: 0;
    }
  }

  &__loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
