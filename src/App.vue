<template>
  <Notifications />
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Header from './components/header/Header.vue';
import Footer from './components/footer/Footer.vue';
import Notifications from './components/notifications/Notifications.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Notifications,
  },
};
</script>

<style lang="scss" scoped></style>
