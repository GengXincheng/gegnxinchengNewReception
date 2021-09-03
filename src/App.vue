<template>
  <div>
      <Header></Header>
    <router-view></router-view>
    <!-- <Footer v-show="$route.path !== '/login' && $route.path !=='/register'"></Footer> -->
  <!-- 两种方法,下边的更好 -->
  <Footer v-show="!$route.meta.isHidden"></Footer>
  </div>
</template>

<script>
// import app from ''
import Footer from "@/components/Footer";
import Header from "@/components/Header";
export default {
  name: "App",
  //非路由组建的注册
  components: {
    Footer,
    Header,
  },
};
</script>

<style></style>
