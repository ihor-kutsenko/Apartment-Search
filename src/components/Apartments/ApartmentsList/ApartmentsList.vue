<template>
  <Container>
    <div class="apartments-list">
      <ApartmentsItem
        v-for="{ id, description, rating, imgUrl, price } in items"
        :key="id"
        :id="id"
        :description="description"
        :rating="rating"
        :imgSrc="imgUrl"
        :price="price"
      />
    </div>
  </Container>
</template>

<script>
import ApartmentsItem from '../apartmentsItem/ApartmentsItem.vue';
import Container from '../../container/Container.vue';
export default {
  name: 'ApartmentsList',
  components: {
    ApartmentsItem,
    Container,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" src="./ApartmentsList.scss" scoped></style>
