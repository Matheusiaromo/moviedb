<template>
  <div class="home">
    
    <Banner />
    <h1>Filmes</h1>
    <Filmes sessionTitle="Os Mais Populares"/>
   
  </div>
</template>

<script>
// @ is an alias to /src
import Filmes from '@/components/Filmes.vue';
import Banner from '@/components/Banner.vue';


export default {
  name: "Home",
  components: {
    Filmes,
    Banner
  },
};
</script>

<style scoped>

.home {
  color: #fff;
}



</style>
