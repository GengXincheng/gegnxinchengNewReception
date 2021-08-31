<template>
  <div>
    <Footer></Footer>
    <router-view></router-view>
    <Header></Header>
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
