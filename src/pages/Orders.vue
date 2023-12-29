<template>
  <main class="my-orders-page">
    <Container>
      <section class="my-orders-page__content">
        <Title class="my-orders-page__title">Orders</Title>
        <OrdersList :items="orders" />
      </section>
    </Container>
  </main>
</template>

<script>
import Container from '../components/container/Container.vue';
import OrdersList from '../components/orders/OrdersList.vue';
import Title from '../components/title/Title.vue';

import { getOrders } from '../services/orders.js';

export default {
  name: 'OrdersPage',
  components: {
    Title,
    OrdersList,
    Container,
  },
  data() {
    return {
      orders: [],
    };
  },
  async created() {
    try {
      const { data } = await getOrders();
      this.orders = data;
    } catch (error) {
      this.$notify({
        type: 'error',
        title: 'Error',
        text: error.message,
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.my-orders-page {
  min-height: 100vh;

  &__content {
    margin: 48px auto 100px;
    max-width: 730px;
  }

  &__title {
    margin-bottom: 20px;
  }
}
</style>
