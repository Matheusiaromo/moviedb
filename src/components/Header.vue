<template>
  <header>
      <div class="container">
          <div>
            <nav>
                <ul>
                    <li><img src="@/assets/logo-header.svg"></li>
                    <li><a href="">Filmes</a></li>
                    <li><a href="">Séries</a></li>
                    <li><a href="">Pessoas</a></li>
                    <li><a href="">Mais</a></li>
                </ul>
                <ul>
                    <li><a href="">+</a></li>
                    <li><a href="">PT</a></li>
                    <li><a href="">Iniciar Sessão</a></li>
                    <li><a href="">Aderir ao TMDB</a></li>
                    <li><a href="">Search</a></li>                        
                </ul>
            </nav>
          </div>
      </div>
  </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>

header {
    background: var(--primary);
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    font-family: 'Source Sans Pro', sans-serif;
}



nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 70px    ;
}

a {
    text-decoration: none;
    color: #fff;
}

ul {
    display: flex;
    flex-direction: row;
    list-style: none;
}

li {
    display: flex;
}

img {
    height: 20px;
}

header ul:nth-child(1) li {
    margin-right: 20px;
}

header ul:nth-child(2) li {
    margin-left: 20px;
}



</style>