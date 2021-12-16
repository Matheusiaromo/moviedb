<template>
  <footer>
      <div class="container footer">
          <div class="logo">
              <img src="@/assets/logo-footer.svg" alt="">
              <button>ÀDIRA A COMUNIDADE</button>
          </div>
          <ul>
              <li><a href="">OS BÁSICOS</a></li>
              <li><a href="">Sobre o TMDB</a></li>
              <li><a href="">Contacte-nos</a></li>
              <li><a href="">Fóruns de Suporte</a></li>
              <li><a href="">API</a></li>
              <li><a href="">System Status</a></li>
          </ul>
           <ul>
              <li><a href="">OS BÁSICOS</a></li>
              <li><a href="">Sobre o TMDB</a></li>
              <li><a href="">Contacte-nos</a></li>
              <li><a href="">Fóruns de Suporte</a></li>
              <li><a href="">API</a></li>
          </ul>
           <ul>
              <li><a href="">OS BÁSICOS</a></li>
              <li><a href="">Sobre o TMDB</a></li>
              <li><a href="">Contacte-nos</a></li>
              <li><a href="">Fóruns de Suporte</a></li>
              <li><a href="">API</a></li>
          </ul>
           <ul>
              <li><a href="">OS BÁSICOS</a></li>
              <li><a href="">Sobre o TMDB</a></li>
              <li><a href="">Contacte-nos</a></li>
              <li><a href="">Fóruns de Suporte</a></li>
          </ul>
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>

footer {
    background: var(--primary);
    font-family: 'Source Sans Pro', sans-serif;
    color: #fff;
    padding-top: 60px;
    padding-bottom: 80px;
}

a {
    text-decoration: none;
    color: #fff;
}

ul li:nth-child(1) a{
 
    font-weight: 700;
    
}

ul li:nth-child(1) {
    margin-bottom: 10px;
}

ul {
    list-style: none;
}

.footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.logo {
    display: flex;
    flex-direction: column;
    width: 250px;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: -30px;
}

.logo img {
    width: 120px;
}

button {
    width: 80%;
    padding: 10px;
}

.container {
    max-width: 1140px;
}

</style>