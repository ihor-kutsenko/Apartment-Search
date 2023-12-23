<template>
  <component :is="tagName" class="title"> <slot></slot></component>
</template>

<script>
export default {
  name: 'Title',
  props: {
    level: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    tagName() {
      return `h${this.level}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 20px;
  font-weight: 700;
}
</style>
