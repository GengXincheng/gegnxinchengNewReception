<template>
  <div>
  <TypeNav></TypeNav>
  <ListContainer></ListContainer>
  <Rank></Rank>
  <Like></Like>
  <Floor></Floor>
  <Brand></Brand>
  
  <Recommend></Recommend>
  </div>
</template>

<script>
// import App from '@/App'
// import App from '@/'
// import app from '@/components/HelloWorld.vue'
import ListContainer from '@/pages/Home/ListContainer/index.vue'
import Recommend from '@/pages/Home/Recommend/index.vue'
import Brand from '@/pages/Home/Brand/index.vue'
import Floor from '@/pages/Home/Floor/index.vue'
import Like from '@/pages/Home/Like/index.vue'
import Rank from '@/pages/Home/Rank/index.vue'
export default {
  name: "Home",
  components:{
    ListContainer,Rank,Recommend,Floor,Brand,Like
  }
};
</script>

<style></style>
