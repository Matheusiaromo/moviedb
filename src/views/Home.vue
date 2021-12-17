<template>
  <div class="home">
    <div class="container">
      <div class="hero">
        <h1>Bem-vindo(a).</h1>
        <h4>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h4>
      </div>
      <div class="search">
        <input type="text" placeholder="Pesquise">
        <input type="button" value="search">
      </div>
    </div>
    
   
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "Home",
  components: {

  },
};
</script>

<style scoped>

.home {
  color: #fff;
}

.container {
  background: var(--primary);
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
}

.hero h1 {
  font-size: 48px;
}

.hero h4 {
  font-size: 32px;
}
  

</style>
