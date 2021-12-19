<template>
  <div class="container">
      <div class="hero">
        <h1>Bem-vindo(a).</h1>
        <h4>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h4>
      </div>
      <div class="search">
        <input type="text" class="text" placeholder="Pesquisar por um filme, uma série televisiva, uma pessoa......">
        <input type="button" class="btn-search"  value="Search">
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.container {
  background: var(--primary);
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
  background-image: url('https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/jXDz3w8blsaPvw2OUA0i8zPIvHg.jpg');
}

.hero h1 {
  font-size: 48px;
}

.hero h4 {
  font-size: 32px;
}

input {
  height: 50px;
  border-radius: 50px;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
}

.search {
  position: relative;
}

.btn-search {
  position: absolute;
  right: 0px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  background: linear-gradient(90deg, rgba(28,211,172,1) 0%, rgba(2,181,226,1) 100%);
}


.text {
  width: 100%;
  font-size: 17px;
}

</style>