<template>
  <Container>
    <div class="apartments-list">
      <ApartmentsItem
        v-for="{ id, descr, rating, imgUrl, price } in items"
        :key="id"
        :id="id"
        :descr="descr"
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
